---
title: Worker Events
description: 'Worker Events'
---

## Subscribe To Events
### Subscribing

Subscribing to updates from a web browser or any other platform supporting Server-Sent Events is straightforward:

```javascript
// The subscriber subscribes to updates for the https://example.com/users/dunglas topic
// and to any topic matching https://example.com/books/{id}
const url = new URL('https://localhost/.well-known/mercure');
url.searchParams.append('topic', 'https://example.com/books/{id}');
url.searchParams.append('topic', 'https://example.com/users/dunglas');
// The URL class is a convenient way to generate URLs such as https://localhost/.well-known/mercure?topic=https://example.com/books/{id}&topic=https://example.com/users/dunglas

const eventSource = new EventSource(url);

// The callback will be called every time an update is published
eventSource.onmessage = e => console.log(e); // do something with the payload
```
The EventSource class is available in all modern web browsers. And for legacy browsers, there are polyfills.

### Closing Connection
It is important to close this connection between the client and the hub if it is no longer needed. Opened connections have a continuous buffer that will drain your application resources. This is especially true when using Single Page Applications (based on e.g. ReactJS): the connection is maintained even if the component that created it is unmounted.

To close the connection, call eventSource.close().

## Publish Events
### Publishing
To dispatch an update, the publisher (an application server, a web browser...) needs to send a POST HTTP request to the hub:

```bash
POST example.com HTTP/1.1
Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdLCJzdWJzY3JpYmUiOlsiaHR0cHM6Ly9leGFtcGxlLmNvbS9teS1wcml2YXRlLXRvcGljIiwie3NjaGVtZX06Ly97K2hvc3R9L2RlbW8vYm9va3Mve2lkfS5qc29ubGQiLCIvLndlbGwta25vd24vbWVyY3VyZS9zdWJzY3JpcHRpb25zey90b3BpY317L3N1YnNjcmliZXJ9Il0sInBheWxvYWQiOnsidXNlciI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXNlcnMvZHVuZ2xhcyIsInJlbW90ZUFkZHIiOiIxMjcuMC4wLjEifX19.z5YrkHwtkz3O_nOnhC_FP7_bmeISe3eykAkGbAl5K7c

topic=https://example.com/books/1&data={"foo": "updated value"}
```
Example using curl:

```bash
curl -d 'topic=https://example.com/books/1' -d 'data={"foo": "updated value"}' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdLCJzdWJzY3JpYmUiOlsiaHR0cHM6Ly9leGFtcGxlLmNvbS9teS1wcml2YXRlLXRvcGljIiwie3NjaGVtZX06Ly97K2hvc3R9L2RlbW8vYm9va3Mve2lkfS5qc29ubGQiLCIvLndlbGwta25vd24vbWVyY3VyZS9zdWJzY3JpcHRpb25zey90b3BpY317L3N1YnNjcmliZXJ9Il0sInBheWxvYWQiOnsidXNlciI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXNlcnMvZHVuZ2xhcyIsInJlbW90ZUFkZHIiOiIxMjcuMC4wLjEifX19.z5YrkHwtkz3O_nOnhC_FP7_bmeISe3eykAkGbAl5K7c' -X POST https://localhost/.well-known/mercure
```
Example using Node.js / Serverless:
```javascript
// Handle a POST, PUT, PATCH or DELETE request or finish an async job...
// and notify the hub
const http = require('http');
const querystring = require('querystring');

const postData = querystring.stringify({
    'topic': 'https://example.com/books/1',
    'data': JSON.stringify({ foo: 'updated value' }),
});

const req = http.request({
    hostname: 'localhost',
    port: '3000',
    path: '/.well-known/mercure',
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdLCJzdWJzY3JpYmUiOlsiaHR0cHM6Ly9leGFtcGxlLmNvbS9teS1wcml2YXRlLXRvcGljIiwie3NjaGVtZX06Ly97K2hvc3R9L2RlbW8vYm9va3Mve2lkfS5qc29ubGQiLCIvLndlbGwta25vd24vbWVyY3VyZS9zdWJzY3JpcHRpb25zey90b3BpY317L3N1YnNjcmliZXJ9Il0sInBheWxvYWQiOnsidXNlciI6Imh0dHBzOi8vZXhhbXBsZS5jb20vdXNlcnMvZHVuZ2xhcyIsInJlbW90ZUFkZHIiOiIxMjcuMC4wLjEifX19.z5YrkHwtkz3O_nOnhC_FP7_bmeISe3eykAkGbAl5K7c',
        // the JWT must have a mercure.publish key containing an array of topic selectors (can contain "*" for all topics, and be empty for public updates)
        // the JWT key must be shared between the hub and the server
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData),
    }
}, /* optional response handler */);
req.write(postData);
req.end();

// You'll probably prefer use the request library or the node-fetch polyfill in real projects,
// but any HTTP client, written in any language, will be just fine.
```

The JWT must contain a publish property containing an array of topic selectors. This array can be empty to allow publishing anonymous updates only. The topic selector * can be used to allow publishing private updates for all topics. To create and read JWTs try jwt.io (demo token, key: !ChangeMe!).
