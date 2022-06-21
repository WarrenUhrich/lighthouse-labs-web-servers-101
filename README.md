# Lighthouse Labs | Web Servers 101

* [ ] Review: HTTP
* [ ] What is a client?
* [ ] What is a server?
* [ ] Making Requests
* [ ] Creating Server-side HTTP Applications in NodeJS (NodeJS' `http` Module)
* [ ] Using Express
* [ ] Middleware

## HTTP???

* HyperText Transfer Protocol
* Request-response style connection
* Built on TCP... but not the same!
* Stateless! The protocol cannot keep track of users, their data, etc. on an ongoing basis... every request is treated FRESH!

1. Client makes a request...
2. Server awaits a request... sends a response...
3. Client can receive and interperet the response!

## What is a Client?

Anything capable of making a request to a server; capable of interpreting the response. (HTTP)

Examples:

* Web Browser
* Game Program
* Mobile Apps
* Postman (and other API dev software)
* `cURL`
* (Server-side Applications CAN act as a client)
  * node.js / Ruby

## What is a Server?

Software / system that can receive requests and send back a response.
