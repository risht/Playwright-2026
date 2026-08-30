// Import playwright module
import { test, expect } from '@playwright/test'

import { getPOSTAPIRequestBody } from '../../src/utils/APIHelper'

import { faker } from '@faker-js/faker'

import tokenAPIResponse from '../../test-data/api_requests/Token_API_Request.json'

//import putAPIRequest from '../../test-data/api_requests/PUT_API_Request.json'

import patchAPIRequest from  '../../test-data/api_requests/PATCH_API_Request.json'

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('Create DELETE API Request using playwright & typescript', async ({ request }) => {

    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const totalPrice = faker.number.int({ min: 1000, max: 10000 })

    // Create type-safe API request body
    const postAPIRequest = await getPOSTAPIRequestBody(
        firstName,
        lastName,
        totalPrice,
        true,
        "lunch",
        "2025-01-01",
        "2025-01-27"
    )

    // Print POST Request
    console.log(
        'POST Request:',
        JSON.stringify(postAPIRequest, null, 2)
    )

    // Create POST API Request
    const postAPIResponse = await request.post('booking', {
        data: postAPIRequest,
        timeout: 30000
    })

    // Print API Response
    const jsonPOSTAPIResponse = await postAPIResponse.json()

    console.log(
        'Post API Response:',
        JSON.stringify(jsonPOSTAPIResponse, null, 2)
    )

    console.log('Status:', postAPIResponse.status())
    console.log('Status Text:', postAPIResponse.statusText())

    // Validate API response
    expect(postAPIResponse.status()).toBe(200)
    expect(postAPIResponse.statusText()).toBe('OK')
    expect(postAPIResponse.headers()['content-type'])
        .toContain('application/json')

    // Validate property/key names
    expect(jsonPOSTAPIResponse.booking)
        .toHaveProperty('firstname')

    expect(jsonPOSTAPIResponse.booking)
        .toHaveProperty('lastname')

    expect(jsonPOSTAPIResponse.booking)
        .toHaveProperty('totalprice')

    expect(jsonPOSTAPIResponse.booking.bookingdates)
        .toHaveProperty('checkin')

    expect(jsonPOSTAPIResponse.booking.bookingdates)
        .toHaveProperty('checkout')

    // Validate API response body
    expect(jsonPOSTAPIResponse.bookingid)
        .toBeGreaterThan(0)

    expect(jsonPOSTAPIResponse.booking.firstname)
        .toBe(firstName)

    expect(jsonPOSTAPIResponse.booking.lastname)
        .toBe(lastName)

    expect(jsonPOSTAPIResponse.booking.totalprice)
        .toBe(totalPrice)

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin)
        .toBe('2025-01-01')

    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout)
        .toBe('2025-01-27')

        //GET API request

    const bookingid = jsonPOSTAPIResponse.bookingid;
    console.log('Booking ID : ' + bookingid)

    const getAPIResponse = await request.get(`/booking/${bookingid}`);

    expect(getAPIResponse.status()).toBe(200)
    expect(getAPIResponse.statusText()).toBe('OK')    


    const getAPIJSONresponse =  await getAPIResponse.json()

    expect(getAPIJSONresponse.firstname).toBe(firstName)
    expect(getAPIJSONresponse.lastname).toBe(lastName)
    expect(getAPIJSONresponse.totalprice).toBe(totalPrice)

    expect(getAPIJSONresponse.bookingdates.checkin)
    .toBe('2025-01-01')

    expect(getAPIJSONresponse.bookingdates.checkout)
    .toBe('2025-01-27')

    console.log(
    'GET API Response:',
    JSON.stringify(getAPIJSONresponse, null, 2)
)

//Generate Token

const tokenResponse = await request.post('/auth',{data : tokenAPIResponse})

expect(tokenResponse.status()).toBe(200)
expect(tokenResponse.statusText()).toBe('OK')    

const tokenAPIJSONReponse = await tokenResponse.json()

const token = tokenAPIJSONReponse.token;

console.log(`Token is: ` + token)

expect(token).toBeTruthy()


//Create PATCH API Request

const patchAPIResponse = await request.patch(`/booking/${bookingid}` , {

headers:{   

    "Content-Type":"application/json",
    "Cookie":`token=${token}`
},

    data: patchAPIRequest,

    
})



expect(patchAPIResponse.status()).toBe(200)
expect(patchAPIResponse.statusText()).toBe('OK')

expect(patchAPIResponse.headers()['content-type'])
    .toContain('application/json')

//Convert patch response to JSON

const patchAPIJSONResponse = await patchAPIResponse.json()

console.log(
    'PATCH API Response:',
    JSON.stringify(patchAPIJSONResponse, null, 2)
)

// Validate updated response body

expect(patchAPIJSONResponse)
    .toHaveProperty('firstname')

expect(patchAPIJSONResponse)
    .toHaveProperty('lastname')

expect(patchAPIJSONResponse)
    .toHaveProperty('totalprice')

expect(patchAPIJSONResponse)
    .toHaveProperty('bookingdates')


// Validate updated values

expect(patchAPIJSONResponse.firstname)
    .toBe(patchAPIRequest.firstname)


// Create DELETE API Request

const deleteAPIResponse = await request.delete(`/booking/${bookingid}`, {

    headers: {
        "Cookie": `token=${token}`
    }

})

// Validate DELETE response

expect(deleteAPIResponse.status()).toBe(201)
expect(deleteAPIResponse.statusText()).toBe('Created')

console.log('DELETE Status:', deleteAPIResponse.status())
console.log('DELETE Status Text:', deleteAPIResponse.statusText())


// Verify booking is deleted

const verifyDeleteResponse = await request.get(`/booking/${bookingid}`)

expect(verifyDeleteResponse.status()).toBe(404)
expect(verifyDeleteResponse.statusText()).toBe('Not Found')

console.log('Verify DELETE Status:', verifyDeleteResponse.status())
console.log('Booking successfully deleted')


})