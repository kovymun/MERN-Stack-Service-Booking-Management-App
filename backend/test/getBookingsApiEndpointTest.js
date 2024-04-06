/** TAC SERVICE BOOKING APP EXPRESSJS BACKEND TEST FILE **/

/*Importing the "chai" and "request" modules into the test file.*/
const expect = require("chai").expect;
const request = require("request");

/*
Unit testing of our back-end ExpressJS application, will apply the following test case scenario:

Testing of the REST API, in particular the "getBookings API get request endpoint/route". This endpoint/route is configured to retrieve all service bookings, 
scheduled by the service booking agents at Tyler's Auto Clinic, from the database. 

As each endpoint/route requires valid authentication/authorization credentials, we will verify a request and response to and from the API endpoint with a 
response status code of 401. An HTTP 401 unauthorized response status code indicates that a client request has not been completed because it lacks valid 
authentication credentials for the requested resource.
*/

describe("Testing the 'getBookings' API endpoint/route in the backend", () => {
  it("Should return a response code of 401 for unauthorized access", (done) => {
    const getBookingApiEndPoint = "http://localhost:8080/api/bookings";
    request(getBookingApiEndPoint, (error, response, body) => {
      expect(response.statusCode).to.equal(401);
      done();
    });
  });
});
