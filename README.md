# Lighthouse Labs | Web Servers 101

## TCP

* Has a detailed header (20 bytes)
* Requires an on-going formal connection (connection-oriented)
* Corrupted packets are reported to the server, and corrections are sent back to the client
* Packets arrive in-order

## HTTP (HyperText Transfer Protocol)

* Is an application-based layer built on top of TCP standard
* Communication style differs from TCP: in HTTP we experience a request-response style communication
* HTTP is stateless - it doesn't keep track of the client or the history of transactions
* Standard HTTP requests have METHOD(verb) and PATH
    * `GET /about`
        * Get has no body, any info is included in the path
    * `POST /sign-in`
        * Post allows us to send a populated body in our request
* Status codes are included in the response
    * 100 range - info
    * 200 range - success
    * 300 range - redirection
    * 400 range - client error
    * 500 range - server error

## Client

What is a client?

* Code requesting info
* Program capable of making (forming and sending out) requests

Examples:
* Web Servers (reaching out to other web servers for information)
* Phone Applications
* Web Browser
    * Google Chrome
    * Firefox
    * Safari
* Some games use HTTP
* cURL

## Server

What is a server?

* Often it is a computer with networking hardware + software
* Waits for and allows a client to interact
    * A server is a device/software that can listen for requests and send responses
* Provides the response
