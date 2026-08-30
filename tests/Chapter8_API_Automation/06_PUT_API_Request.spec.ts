// Import playwright module
import { test, expect } from '@playwright/test'

import { getPOSTAPIRequestBody } from '../../src/utils/APIHelper'

import { faker } from '@faker-js/faker'

import tokenAPIResponse from '../../test-data/api_requests/Token_API_Request.json'

import putAPIRequest from '../../test-data/api_requests/PUT_API_Request.json'

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('Create PUT API Request using playwright & typescript', async ({ request }) => {

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


//Create PUT API Request

const putAPIResponse = await request.put(`/booking/${bookingid}` , {

headers:{

    "Content-Type":"application/json",
    "Cookie":`token=${token}`
},

    data: putAPIRequest,

    
})



expect(putAPIResponse.status()).toBe(200)
expect(putAPIResponse.statusText()).toBe('OK')

expect(putAPIResponse.headers()['content-type'])
    .toContain('application/json')

const putAPIJSONResponse = await putAPIResponse.json()

console.log(
    'PUT API Response:',
    JSON.stringify(putAPIJSONResponse, null, 2)
)

// Validate updated response body

expect(putAPIJSONResponse)
    .toHaveProperty('firstname')

expect(putAPIJSONResponse)
    .toHaveProperty('lastname')

expect(putAPIJSONResponse)
    .toHaveProperty('totalprice')

expect(putAPIJSONResponse)
    .toHaveProperty('bookingdates')


// Validate updated values

expect(putAPIJSONResponse.firstname)
    .toBe(putAPIRequest.firstname)

expect(putAPIJSONResponse.lastname)
    .toBe(putAPIRequest.lastname)

expect(putAPIJSONResponse.totalprice)
    .toBe(putAPIRequest.totalprice)

expect(putAPIJSONResponse.depositpaid)
    .toBe(putAPIRequest.depositpaid)

expect(putAPIJSONResponse.bookingdates.checkin)
    .toBe(putAPIRequest.bookingdates.checkin)

expect(putAPIJSONResponse.bookingdates.checkout)
    .toBe(putAPIRequest.bookingdates.checkout)

expect(putAPIJSONResponse.additionalneeds)
    .toBe(putAPIRequest.additionalneeds)    

})