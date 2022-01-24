---
title: Fetch Event
description: 'Live example of Nuxt Content docs theme on CodeSandbox.'
---

# FetchEvent

## Description

Incoming HTTP requests are `"fetch"` events, it contains the request and how the receiver will treat the response. It provides the event.respondWith() method, which allows us to provide a response to the client.

## Syntax

Use the `addEventListener` method to register a `"fetch"` event. Also network requests are assign to the `"fetch"` event, using the [`FetchEvent`](https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent).

```js
addEventListener("fetch", event => {
  event.respondWith(
    new Response("Hello World!")
  )
})
```

### Supported `FetchEvent` properties


- `event.type` <Type>string</Type>
    - The type of event. This will always return `"fetch"`.

- `event.request` <TypeLink href="/runtime-apis/request">Request</TypeLink>
    - The incoming HTTP request.

-  `event.respondWith(`response<TypeLink href="/runtime-apis/response">Response</TypeLink> | <ParamType>Promise</ParamType>`)` <Type>void</Type>

    - Learn more [`respondWith`](#respondwith).


### Bindings

When a Worker is deployed using the Service Worker syntax, any [bindings](/platform/environment-variables) will be made available as global runtime variables.


## Lifecycle methods

Respond to incoming HTTP request, by use any of the following methods to augment or control how the request is handled.

### `respondWith`

Intercepts the request and allows the Worker to send a custom response back to the client.

```js
addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest() {
  return new Response(JSON.stringify({ hello: "world" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
```
