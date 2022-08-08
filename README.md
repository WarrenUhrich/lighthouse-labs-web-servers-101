# Lighthouse Labs | Web Servers 101

* [ ] Review: HTTP
* [ ] What is a client?
* [ ] What is a server?
* [ ] Making Requests
* [ ] Creating Server-side HTTP Applications in NodeJS (NodeJS' `http` Module)
* [ ] Using Express
* [ ] Middleware

## HTTP

* Stands for Hypertext Transfer Protocol
* Built on TCP
  * Detailed header of 20 bytes
  * Requires a formal / ongoing connection
  * Corrupted packets are reported to the server
  * Packets are expected to arrive in-order
* Request-response based protocol
* Statelesss (no information carried from request-to-request)
* Has a detailed nheader cotaining important information
  * Resource
  * Method / verb, describing what the client wants to do with that resource
  * Status
* Body to a request or response containing data

## Client

What is a client? Typically a device and/or application capable of making requests to a server, and interpreting a response.

* (A Computer, Phone, Tablet that is not a Server)
* (A virtual machine)
* Web Browser
* Other Servers
* Messengers
* Music Streaming App (Spotify)
* API Client Programs
* Authentication Tools / Password Managers
* Video Games
* Live Streaming Web Sites / Video Web Sites
* VPN

In-class we have tried:

* A web browser (Firefox)
* A command-line tool (cURL)
* An API testing tool (Postman)
* A Node.js program
