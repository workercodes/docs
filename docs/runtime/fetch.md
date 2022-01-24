---
title: Fetch
description: 'Live example of Nuxt Content docs theme on CodeSandbox.'
---

# Fetch

The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) provides an interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

<Aside type="note">

Asynchronous tasks such as `fetch` are not executed at the top level in a Worker script and must be executed within a FetchEvent handler such as [`respondWith`](/runtime/fetch-event#methods). Learn more about [the Request context](/runtime/request#the-request-context).

</Aside>


--------------------------------

## Constructor

```js
async function eventHandler(event) {
  const response = await fetch(event.request)
  return response
}
```

<!-- Where do we have the return type in this format? -->

- `fetch()` <TypeLink href="/runtime/response">Promise&lt;Response&gt;</TypeLink>

  - Fetch returns a promise to a Response.

--------------------------------

## Properties


- `request` <TypeLink href="/runtime/request">Request</TypeLink> | <Type>string</Type>
  - The [`Request`](/runtime/request) object or a string represents the URL to fetch.

- `init` <TypeLink href="/runtime/request#requestinit">RequestInit</TypeLink>
  - The content of the request.
