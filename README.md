# Lighthouse Labs | Web Servers 101

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-web-servers-101/tree/2022.10.03-web-ft-east-19sept2022) | [Vimeo Video Recording (Coming Soon)](#coming-soon)

* [X] Review: HTTP
* [X] What is a client?
* [X] What is a server?
* [X] Making Requests
* [X] Creating Server-side HTTP Applications in NodeJS (NodeJS' http` Module)
* [X] Using Express
* [X] Middleware

## TCP

* Had a detailed header (20 bytes)
* Required a formal / ongoing connection
* Corrupted packets; corrections are requested — accuracy is big here
* Packets also arrive in-order

## HTTP

* Application-based layer (built on TCP)
* Status codes; detailed header information describing the request
* Request-response commucation style
* Stateless (HTTP by nature treats all requests as brand-new)
* Standard requests consist of of a URL and a method (verb)
  * GET https://google.com
  * POST https://gmail.com

## Client

Any device or application capable of making a request for a server.

* Terminal tools (npm, cURL)
* Testing tools (Postman)
* Everyday web browsing tools (Firefox)
* Desktop applications (Discord)
* E-mail applications
* Phone applications
* Video game executables
* Cable box / smart receiver
* Web applications (servers)

## Server

Any device or application capable of accepting and interpreting a request, and send a 
response.

* Web Server: any software that accepts HTTP/HTTPS traffic and sends  a response (Apache, nginx, IIS)
* Application Server: server that hosts applications (Zend server)
* Load Balancer: diverts request traffic among multiple servers (HAProxy)


