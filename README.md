# Lighthouse Labs | Web Servers 101

* [ ] Review: HTTP
* [ ] What is a client?
* [ ] What is a server?
* [ ] Making Requests
* [ ] Creating Server-side HTTP Applications in NodeJS (NodeJS' http Module)
* [ ] Using Express
* [ ] Middleware

## Review on HTTP

HTTP stands for HyperText Transfer Protocol! Transport layer built on TCP.

### TCP

* Has a detailed header (20 bytes)
* Requires an on-going connection (connection-oriented)
* Corrupted packets are reported to the server so corrections can be sent and made
* Packets arrive in-order

### HTTP

* Application-based transport layer - makes use of TCP as a base
* Features a request-response communication style (server waits for requests, sends responses)
* Is stateless, no information about previous requests carries over to or affects future requests
* Standard HTTP requests have a URL/path (resource location) and a verb (called a method)
* Status codes are used to quickly identify what type of response has come back from the server
* Both requests and responses contain headers

## What is a Client?

"The requester!"

* Any device or application capable of making a request to a server.
* Might be any number of different softwares expecting different formats.
* Not to be confused with end-user (we're usually talking software, not people here.)
* For example) mail client, web browser, cURL, most smart devices, server apps.

## What is Server?

"The one that provides the info or does the action!"

* Any device or application capable of handling a request and sending a response.
* For example) web servers, application/game servers, load balancer servers.

## What is Middleware?

Functions that run before the response function runs.

`receive a request -> middleware runs -> route code runs`

* Commons uses include authorization, logging, and more
