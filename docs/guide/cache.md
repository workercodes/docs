---
title: Cache
description: 'Live example of Nuxt Content docs theme on CodeSandbox.'
---

## Worker Cache API
The Cache interface provides a ephemeral storage mechanism for Request / Response object pairs that are cached in long lived memory. 
These might be regular requests and responses created in the course of running your application, or they could be created solely for the purpose of storing data for later use.

The Woker Cache API enable your workers to cache endpoint requests so that they can provide fast responses, regardless of endpoint speed or availablity. However, the API can also be used as a general key-value store.

## Methods

### Cache.put(request, response) <span class="params-type">Promise</span>
Takes both a request and its response and adds it to the given cache.
```javascript
cache.put(request, response).then(function() {
  // request/response pair has been added to the cache
});
```
#### Parameters
##### request <span class="params-type">string | Request</span>
<span class="params-discription">The Request object or URL that you want to add to the cache.</span>

##### response <span class="params-type"> Response</span>
<span class="params-discription">The Response you want to match up to the request.</span>

#### Return value
A Promise that resolves with undefined.

### Cache.match(request, options) <span class="params-type">Promise\<boolean\></span>
Returns a Promise that resolves to the response associated with the first matching request in the Cache object.
```javascript
cache.match(request, {options}).then(function(response) {
  // Do something with the response
});
```
#### Parameters
##### request <span class="params-type">string | Request</span>
<span class="params-discription">The Request for which you are attempting to find responses in the Cache. This can be a Request object or a URL.</span>

##### options <span class="params-type"> Optional</span>
<span class="params-discription">Not implemented</span>

#### Return value
A Promise that resolves to the first Response that matches the request or to undefined if no match is found.

### Cache.delete(request, options) <span class="params-type">Promise\<boolean\></span>
Finds the Cache entry whose key is the request, returning a Promise that resolves to true if a matching Cache entry is found and deleted. If no Cache entry is found, the promise resolves to false.
```javascript
cache.delete('/images/image.png').then(function(response) {
    // Do something with the response
});
```
#### Parameters
##### request <span class="params-type">string | Request</span>
<span class="params-discription">The Request you are looking to delete. This can be a Request object or a URL.</span>

##### options <span class="params-type"> Optional</span>
<span class="params-discription">Not implemented</span>

#### Return value
a Promise that resolves to true if the cache entry is deleted, or false otherwise.


## Example
```javascript
async function handleRequest(event) {
  const request = event.request
  const cacheUrl = new URL(request.url)

  // Construct the cache key from the cache URL
  const cacheKey = new Request(cacheUrl.toString(), request)
  const cache = await caches.open('custom:cache');

  // Check whether the value is already available in the cache
  // if not, you will need to fetch it from origin, and store it in the cache
  // for future access
  let response = await cache.match(cacheKey)

  if (!response) {
    // If not in cache, get it from origin
    response = await fetch(request)

    // Must use Response constructor to inherit all of response's fields
    response = new Response(response.body, response)

    // Cache API respects Cache-Control headers. Setting s-max-age to 10
    // will limit the response to be in cache for 10 seconds max

    // Any changes made to the response here will be reflected in the cached value
    response.headers.append("Cache-Control", "s-maxage=10")

    // Store the fetched response as cacheKey
    // Use waitUntil so you can return the response without blocking on
    // writing to cache
    event.waitUntil(cache.put(cacheKey, response.clone()))
  }
  return response
}

addEventListener("fetch", event => {
  try {
    const request = event.request
    return event.respondWith(handleRequest(event))
  } catch (e) {
    return event.respondWith(new Response("Error thrown " + e.message))
  }
})
```