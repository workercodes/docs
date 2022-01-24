---
title: Cache
description: 'Live example of Nuxt Content docs theme on CodeSandbox.'
---

# Cache

## Description

The [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache)  interface provides a ephemeral storage mechanism for Request / Response object pairs that are cached in long lived memory. These might be regular requests and responses created in the course of running your application, or they could be created solely for the purpose of storing data for later use.

The Woker Cache API enable your workers to cache endpoint requests so that they can provide fast responses, regardless of endpoint speed or availablity. However, the API can also be used as a general key-value store.

--------------------------------

## Syntax

You may create and manage additional Cache instances via the [`caches.open`](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/open) method.

```js
let myCache = await caches.open('custom:cache');
await myCache.match(request);
```


--------------------------------

## HTTP Cache Headers

Our implementation of the Cache API respects the following HTTP headers on the response passed to `put()`:

- `Cache-Control`
    - Cache-control header used to specify caching policies in both client requests and server responses. Policies include how a resource is cached, and its maximum age before expiring.
- `ETag`
    - A header that identifies the version of served content according to a string token. If a token is unchanged before a request is made, the worker will continues to use its cached version.
- `Expires` <Type>string</Type>
    - This header specifies a fixed date/time for the expiration of a cached resource.

--------------------------------

## Methods

### Put
Takes both a request and its response and adds it to the given cache.

```js
cache.match(request, {options}).then(function(response) {
  // Do something with the response
});
```

- `put(request, response)` <Type>Promise</Type>

    - Returns a promise that resolves to `undefined` once the cache stores the response.

#### Parameters


- `request` <Type>string</Type> | <TypeLink href="/runtime/request">Request</TypeLink>
    - Either a string or a [`Request`](/runtime/request) object to serve as the key. If a string is passed, it is interpreted as the URL for a new Request object.

- `response` <TypeLink href="/runtime/response">Response</TypeLink>
    -  A [`Response`](/runtime/response) object to store under the given key.


#### Invalid parameters

`cache.put` will fail if:
  - the `request` object has a method other than `GET`.
  - the `response` object has a `status` of [`206 Partial Content`](https://httpstatuses.com/206).
  - the `response` object contains the header `Vary: *` (required by the Cache API specification).

### Delete
Finds the Cache entry whose key is the request, returning a Promise that resolves to true if a matching Cache entry is found and deleted. If no Cache entry is found, the promise resolves to false.

```js
cache.delete('/images/image.png').then(function(response) {
    // Do something with the response
});
```

- `delete(request, options)` <TypeLink href="/runtime/response">Promise &lt;boolean&gt;</TypeLink>

Deletes the `Response` object from the cache and returns a `Promise` for a Boolean response:

- `true`: The response was cached but is now deleted
- `false`: The response was not in the cache at the time of deletion.

#### Parameters


- `request` <Type>string</Type> | <TypeLink href="/runtime/request">Request</TypeLink>

    - The string or [`Request`](/runtime/request) object used as the lookup key. Strings are interpreted as the URL for a new `Request` object.

<!-- What type is this? -->
- `options`
    -  Can contain one possible property: `ignoreMethod` (Boolean) Consider the request method a GET regardless of its actual value.


### Match
Returns a Promise that resolves to the response associated with the first matching request in the Cache object.

```js
cache.match(request, {options}).then(function(response) {
  // Do something with the response
});
```


- `match(request, options)` <TypeLink href="/runtime/response">Promise&lt;Response&gt;</TypeLink>

    - Returns a promise wrapping the response object to that request.



#### Parameters

- `request` <Type>string</Type> | <TypeLink href="/runtime/request">Request</TypeLink>

    - The string or [`Request`](/runtime/request) object used as the lookup key. Strings are interpreted as the URL for a new `Request` object.

- `options`
    -  Can contain one possible property: `ignoreMethod` (Boolean). When `true`, the request is considered to be a `GET` request regardless of its actual value.


--------------------------------
