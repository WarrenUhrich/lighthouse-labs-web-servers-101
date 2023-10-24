# Lighthouse Labs | Web Servers 101

* [ ] Review: HTTP
* [ ] What is a client?
* [ ] What is a server?
* [ ] Making Requests
* [ ] Creating Server-side HTTP Applications in NodeJS (NodeJS' http Module)
* [ ] Using Express
* [ ] Middleware

## Review: HTTP

HyperText Transfer Protocol

### TCP

* Detailed header (20 bytes)
* Requires an on-going connection (connection-oriented)
* Corrupted packets are reported to the server; corrections are sent to the client
* Packets arrive in-order

### HTTP...

* It is an application layer on top of TCP
* Request-response style communication
* It is stateless (every connection is considered "fresh", there is no history)
* Standard requests consist of a URL and a verb/method
    * GET /search (METHOD and /path)
    * host: google.com
    * port: :443
    * protocol: https
* Responses should have status codes
* Both requests and responses have headers containing info about/for the request

## Client

* The device/program sending a request
* Example HTTP clients?
    * Web Browser
    * Mail (Client)
    * Weather App on a smartphone
    * cURL
    * Web Server Applications

## Server

* The device or program handling a request (can send a response)
* Example HTTP servers?
    * Web Server / Web Application
    * Exchange Servers(?)
    * Load Balancers

## Express

* A node package / framework for writing web (http/https) servers in NodeJS
* It has additional features (but follows similar convention) compared to http/https modules in Node
* Supposed to be easier/nicer/faster to use than http/https
* `npm install express` (not built-in to NodeJS)

## Middleware

* Code/features that run when we receive a request, but before we run our response code
* This is very common in authentication...
* Logging requests
