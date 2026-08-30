// Import playwright module
import { test, expect } from '@playwright/test'

import { getPOSTAPIRequestBody } from '../../src/utils/APIHelper'

import { faker } from '@faker-js/faker'

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('Create POST API Request using dynamic api request body in playwright & typescript using faker', async ({ request }) => {

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
})