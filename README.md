# Lighthouse Labs | Web Servers 101

* [X] Review: HTTP
* [X] What is a client?
* [X] What is a server?
* [X] Making Requests
* [X] Creating Server-side HTTP Applications in NodeJS (NodeJS' http Module)
* [ ] Using Express
* [ ] Middleware

## TCP

* A detailed header (20 bytes)
* Formal on-going connection (connection-oriented)
* Corrupted packets are reported to the server (corrections are sent to client)
* Packets arrive in-order

## HTTP

* A request-response based protocol
* Is an application layer (built on TCP, but has its own rules / requirements on-top)
* Stateless (no info is carried from one request to another)
    * Each request is treated as if it is 100% fresh
* Each standard request must have a URL (resource location)
* Status codes are used in headers to quickly identify what type of response we're receiving from a server
* HTTP supports a variety of header data to provide context and information about the content being requested, returned, etc.

## Client?

Any hardware / software capable of making a request to a server.

* Web Browser
* Video Game (Client)
* Computer (Operating System)
* Phones (Operating System)
* Apps (Computer, Phone, etc.)
* ISS Spotter (Node.js Programs / Applications)
* Zoom!
* Servers (reaching out to APIs, web pages, etc.)
* Devices on a Network (if there is an HTTP server avail.)
* cURL (CLI tool for making HTTP requests)
* Postman (developer tool for testing HTTP requests)

## Server?

Any device / hardware / software capable of accepting and interpreting a request, and sending a valid HTTP response.

* Web Server: software accepting HTTP/HTTPS requests, returning a representation of the expected resource. Examples) Apache, nginx, IIS.
* Application Server: a server that hosts applications. Examples) Jakarta EE, Zend Server.
* Load Balancer: server that diverts request traffic to more equally share the load across many servers. Example) HAProxy.
