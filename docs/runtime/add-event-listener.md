---
title: addEventListener
description: 'The addEventListener function defines triggers for a Worker script to execute. '
---
# addEventListener

## Description

The `addEventListener` function defines triggers for a Worker script to execute. Currently only one types of event listeners 
- `"fetch"` listeners which are sent a [`FetchEvent`](/runtime/fetch-event).

## Syntax

- `addEventListener(type, listener)`<Type>void</Type>

  - If multiple `"fetch"` listeners are registered, when one does not call [`event.respondWith()`](/runtime/fetch-event#methods), the runtime delivers the event to the next registered listener.

### Properties

- `type` <Type>string</Type>
  - The only types supported are `"fetch"`.

- `listener` <Type>function</Type>
  - The javascript function that receives the incoming events. The listener is passed a single argument:


    - `event` <Type>FetchEvent</Type>

      - The events dispatched to a Worker. Refer to [`FetchEvent`](/runtime/fetch-event).


## Syntax

```js
addEventListener("fetch", event => {
  event.respondWith(
    new Response("Hello world from wkr")
  )
})
```
