---
title: Response
description: 'The Response interface of the Fetch API represents the response to a request.'
---

# Response

## Syntax

```js
let myBlob = new Blob();
let init = { "status" : 200 , "statusText" : "SuperSmashingGreat!" };
let myResponse = new Response(myBlob,init);
```

### Parameters


- `body` <PropMeta>optional</PropMeta>

  - An object defining a body for the response. This can be null (which is the default value), or one of:

    - <TypeLink href="https://developer.mozilla.org/en-US/docs/Web/API/BufferSource">BufferSource</TypeLink> &nbsp;
    - <TypeLink href="https://developer.mozilla.org/en-US/docs/Web/API/FormData">FormData</TypeLink> &nbsp;
    - <TypeLink href="https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream">ReadableStream</TypeLink> &nbsp;
    - <TypeLink href="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams">URLSearchParams</TypeLink> &nbsp;
    - <TypeLink href="https://developer.mozilla.org/en-US/docs/Web/API/USVString">USVString</TypeLink>    &nbsp;

- `init` <PropMeta>optional</PropMeta>

  - An `options` object that contains custom settings to apply to the response.

Valid options for the `options` object include:

  - `status` <Type>int</Type>
    - The status code for the response, such as `200`.

  - `statusText` <Type>string</Type>
    - The status message associated with the status code, like, `OK`.

  - `headers` <TypeLink href="/runtime/request#parameters">Headers</TypeLink> | <TypeLink href="https://developer.mozilla.org/en-US/docs/Web/API/ByteString">ByteString</TypeLink>
    - Any headers to add to your response that are contained within a [`Headers`](/runtime/request#parameters) object or object literal of [`ByteString`](https://developer.mozilla.org/en-US/docs/Web/API/ByteString) key/value pairs.

## Properties


- `body` <TypeLink href="/runtime/streams">Readable Stream</TypeLink>
  - A simple getter to get the body contents.
- `bodyUsed` <Type>boolean</Type>
  - A boolean indicating if the body was used in the response.
- `headers` <TypeLink href="/runtime/request#parameters">Headers</TypeLink>
  - The headers for the response.
- `ok` <Type>boolean</Type>
  - A boolean indicating if the response was successful (status in the range 200-299).
- `redirected` <Type>boolean</Type>
  - A boolean indicating if the response is the result of a redirect. If so, its URL list has more than one entry.
- `status` <Type>int</Type>
  - The status code of the response (for example, `200` to indicate success).
- `statusText` <Type>string</Type>
  - The status message corresponding to the status code (for example, `OK` for `200`).
- `url` <Type>string</Type>
  - The URL of the response. The value is the final URL obtained after any redirects.

## Methods

### Instance methods


- `clone()` <TypeLink href="#response">Response</TypeLink>
  - Creates a clone of a [`Response`](#response) object.

- `redirect()` <TypeLink href="#response">Response</TypeLink>
  - Creates a new response with a different URL.

- `arrayBuffer()` <TypeLink href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">Promise&lt;ArrayBuffer&gt;</TypeLink>

  - Takes a [`Response`](#response) stream, reads it to completion, and returns a promise that resolves with an [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

- `formData()` <TypeLink href="https://developer.mozilla.org/en-US/docs/Web/API/FormData">Promise&lt;FormData&gt;</TypeLink>

  - Takes a [`Response`](#response) stream, reads it to completion, and returns a promise that resolves with a [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object.

- `json()` <TypeLink href="https://developer.mozilla.org/en-US/docs/Web/">Promise&lt;JSON&gt;</TypeLink>

  - Takes a [`Response`](#response) stream, reads it to completion, and returns a promise that resolves with the result of parsing the body text as [`JSON`](https://developer.mozilla.org/en-US/docs/Web/)

- `text()` <TypeLink href="https://developer.mozilla.org/en-US/docs/Web/API/USVString">Promise&lt;USVString&gt;</TypeLink>

  - Takes a [`Response`](#response) stream, reads it to completion, and returns a promise that resolves with a [`USVString`](https://developer.mozilla.org/en-US/docs/Web/API/USVString) (text).

