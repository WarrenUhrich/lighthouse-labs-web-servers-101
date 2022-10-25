# Lighthouse Labs | Web Servers 101

* [X] Review: HTTP
* [X] What is a client?
* [ ] What is a server?
* [ ] Making Requests
* [ ] Creating Server-side HTTP Applications in NodeJS (NodeJS' `http` Module)
* [ ] Using Express
* [ ] Middleware

## HTTP (HyperText Transfer Protocol)

HTTP is a (application layer) protocol built on the back of TCP.

### TCP

* Has detailed headers (20 bytes)
* Requires a formal on-going connection
* Corrupted packets are reported and replacements are sent
* Packets arrive in-order

### HTTP

* Corrupted packets are reported and replacements are sent
* Packets arrive in-order
* Request-response style communication
* Status codes in headers
* Content type is described in headers
* A LOT is described in headers!!!

## Client

A client is any software capable of properly formatting and sending a request.

* Browser
* Bots / Web Scrapers
* Servers / Server Scripts
* Desktop or Mobile Applications
* Games
* Terminal / Command-Line Tools
* Postman

## Server

Any device / software capable of receiving and interpreting HTTP requests and sending a response.

* Web Server: any software that accepts HTTP/HTTPS requests and can return a representation of that resource. Includes nginx, Apache, IIS.
* Application Server: a server that hosts and runs applications. Zend Server, Jakarta.
* Load Balancer: spreads request traffic amongst different servers to help balance the load. Ex) HAProxy.


