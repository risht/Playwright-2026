// Import playwright module
import { test, expect } from '@playwright/test'

import postAPIRequest from '../../test-data/api_requests/POST_API_Request.json'

test.use({

    baseURL: process.env.BASE_API_URL,

})

//Write a test

test('Create POST API Request using static file in playwright & typescript', async ({ request }) => {

    //POST API Request

    const postAPIResponse = await request.post('booking', {
    data: postAPIRequest,
    timeout: 30000
});    

    //Print JSON API Response
    const jsonPOSTAPIResponse = await postAPIResponse.json();

    console.log('Post API Response ' + JSON.stringify(jsonPOSTAPIResponse,null,2))

    //Validate api response
    expect(postAPIResponse.status()).toBe(200);
    expect(postAPIResponse.statusText()).toBe('OK');
    expect(postAPIResponse.headers()['content-type']).toContain('application/json')

    //Validate property/key names

    expect(jsonPOSTAPIResponse.booking).toHaveProperty('firstname')
    expect(jsonPOSTAPIResponse.booking).toHaveProperty('lastname')

    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkin')
    expect(jsonPOSTAPIResponse.booking.bookingdates).toHaveProperty('checkout')

    //Validate API response body

    expect(jsonPOSTAPIResponse.bookingid).toBeGreaterThan(0)
    expect(jsonPOSTAPIResponse.booking.firstname).toBe('playwright typescript')
    expect(jsonPOSTAPIResponse.booking.lastname).toBe('playwright javascript')
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2018-01-01')
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2019-01-01')



})