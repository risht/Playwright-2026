// Import playwright module
import { test, expect } from '@playwright/test'

import {formatAPIRequest} from '../../src/utils/APIHelper'

import path from 'path'
import fs from 'fs'

import {faker} from '@faker-js/faker'


test.use({

    baseURL: process.env.BASE_API_URL,

})

//Write a test

test('Create POST API Request using dynamic api request body in playwright & typescript', async ({ request }) => {

    const filepath =path.join(__dirname, '../../test-data/api_requests/Dynamic_POST_API_Request.json')
    const jsontemplate = fs.readFileSync(filepath, 'utf-8')

    const values = ['playwright','playwright javascript',1000]

    //Updating POST API Request Body
    const postAPIRequest = await formatAPIRequest(jsontemplate,values)

    //Create POST API Request

    const postAPIResponse = await request.post('booking', {
    data: JSON.parse(postAPIRequest),
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
    expect(jsonPOSTAPIResponse.booking.firstname).toBe('playwright')
    expect(jsonPOSTAPIResponse.booking.lastname).toBe('playwright javascript')
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2018-01-01')
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2019-01-01')



})

//


test('Create POST API Request using dynamic api request body in playwright & typescript using faker', async ({ request }) => {

    const filepath =path.join(__dirname, '../../test-data/api_requests/Dynamic_POST_API_Request.json')
    const jsontemplate = fs.readFileSync(filepath, 'utf-8')

    const firstName =  faker.person.firstName()
    const lastName =  faker.person.lastName()
    const totalPrice = faker.number.int({min:1000,max:10000})

    const values = [firstName,lastName,totalPrice]

    //Updating POST API Request Body
    const postAPIRequest = await formatAPIRequest(jsontemplate,values)

    //Create POST API Request

    const postAPIResponse = await request.post('booking', {
    data: JSON.parse(postAPIRequest),
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
    expect(jsonPOSTAPIResponse.booking.firstname).toBe(firstName)
    expect(jsonPOSTAPIResponse.booking.lastname).toBe(lastName)
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkin).toBe('2018-01-01')
    expect(jsonPOSTAPIResponse.booking.bookingdates.checkout).toBe('2019-01-01')



})