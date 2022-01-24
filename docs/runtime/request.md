---
title: Request
description: 'The `Request` interface represents an HTTP request, and is part of the Fetch API.'
---

# Request

The `Request` interface represents an HTTP request, and is part of the Fetch API.

## Description

You can create a new Request object using the `Request` constructor, but you are more likely to encounter a `Request` object being returned as the result of another API operation, such as `FetchEvent`.

```js
addEventListener("fetch", event => {
  let request = event.request // Request object

  // ...
})
```

You can create a new request using the `Request` constructor then return some property values of the request. You could then `fetch` this request by passing the Request object in as a parameter to a `fetch` call.
```js
const request = new Request('https://www.mozilla.org/favicon.ico');

fetch(request)
  .then(response => response.blob())
  .then(blob => {
    //..
  });
```

## Syntax

```js
let request = new Request(input [, init])
```

### Parameters

- `input` <Type>string | Request</Type>

  - Either a string that contains a URL, or an existing `Request` object.

- `init` <TypeLink href="#requestinit">RequestInit</TypeLink> <PropMeta>optional</PropMeta>

  - Optional options object that contains settings to apply to the `Request`.

#### `RequestInit`

- `method` <Type>string</Type> <PropMeta>optional</PropMeta>

  - The HTTP request method. The default is `GET`.

- `headers` <Type>Headers</Type> <PropMeta>optional</PropMeta>

  - A [`Headers` object](https://developer.mozilla.org/en-US/docs/Web/API/Headers).

- `body` <Type>string | ReadableStream | FormData | URLSearchParams</Type> <PropMeta>optional</PropMeta>

  - The request body, if any.

- `redirect` <Type>string</Type> <PropMeta>optional</PropMeta>

  - The redirect mode to use: `follow`, `error`, or `manual`. The default  for a new `Request` object is `follow`. Note, however, that the incoming `Request` property of a `FetchEvent` will have redirect mode `manual`.


## Properties

All properties of an incoming `Request` object (i.e. `event.request`) are read only. To modify a request, you must create a new `Request` object and pass the options to modify to its [constructor](#constructor).

- `body` <Type>ReadableStream</Type> <PropMeta>read-only</PropMeta>

  - Stream of the body contents.

- `bodyUsed` <Type>Boolean</Type> <PropMeta>read-only</PropMeta>

  - Stores true or false to indicate whether or not the body has been used in a request yet.

- `headers` <Type>Headers</Type> <PropMeta>read-only</PropMeta>

  - Contains the associate [`Headers` object](https://developer.mozilla.org/en-US/docs/Web/API/Headers).

- `method` <Type>string</Type> <PropMeta>read-only</PropMeta>

  - Contains the request’s method, e.g. `GET`, `POST`, etc.

- `redirect` <Type>string</Type> <PropMeta>read-only</PropMeta>

  - Contains the mode for how redirects are handled. It may be one of `follow`, `error`, or `manual`.

- `url` <Type>string</Type> <PropMeta>read-only</PropMeta>

  - Contains the URL of the request.


## Methods

### Instance methods

These methods are only available on an instance of a `Request` object or through its prototype.


- `clone()` <Type>Promise&lt;Request></Type>

  - Creates a copy of the `Request` object.

- `arrayBuffer()` <Type>Promise&lt;ArrayBuffer></Type>

  - Returns a promise that resolves with an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) representation of the request body.

- `formData()` <Type>Promise&lt;FormData></Type>

  - Returns a promise that resolves with a [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) representation of the request body.

- `json()` <Type>Promise&lt;Object></Type>

  - Returns a promise that resolves with the result of parsing the request body as JSON.

- `text()` <Type>Promise&lt;string></Type>

  - Returns a promise that resolves with a text representation of the request body.

- `blob()` <Type>Promise&lt;Blob></Type>

  - Returns a promise that resolves with a Blob representation of the request body.

--------------------------------
