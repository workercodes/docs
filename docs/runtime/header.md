---
title: Header
description: 'The Headers interface of the Fetch API allows you to perform various actions on HTTP request and response headers.'
---

# Headers

## Description

The [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) interface of the Fetch API allows you to perform various actions on HTTP request and response headers. These actions include retrieving, setting, adding to, and removing headers from the list of the request's headers.

A [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) object has an associated header list, which is initially empty and consists of zero or more name and value pairs.  You can add to this using methods like append() (see Examples.) In all methods of this interface, header names are matched by case-insensitive byte sequence.

```js
let headers = new Headers;

headers.get('my-header'); //=> null

headers.set('my-header', 'hello');
headers.get('my-header'); //=> "hello"

headers.append('my-header', 'world');
headers.get('my-header'); //=> "hello, world"
```

## Syntax

```js
let headers = new Headers(init);
```

### Parameters


- `init` <TypeLink href="#requestinit">Object</TypeLink> <PropMeta>optional</PropMeta>

  - An object containing any HTTP headers that you want to pre-populate your Headers object with. This can be a simple object literal with String values; or an existing Headers object. In the last case, the new Headers object copies its data from the existing Headers object.


## Methods

### Instance methods

These methods are only available on an instance of a `Request` object or through its prototype.


- `append(name: string, value: string)`

  - Appends a new value onto an existing header inside a Headers object, or adds the header if it does not already exist..

- `delete(name: string)`

  - Deletes a header from a Headers object.

- `set(name: string, value: string)`

  - Sets a new value for an existing header inside a Headers object, or adds the header if it does not already exist.

- `get(name: string)` <Type>String</Type>

  - Returns a String sequence of all the values of a header within a Headers object with a given name.

- `has(name: string)` <Type>Boolean</Type>

  - Returns a boolean stating whether a Headers object contains a certain header.

- `entries()` <Type>iterator</Type>

  - Returns an iterator allowing to go through all key/value pairs contained in this object.

- `keys()` <Type>iterator</Type>

  - Returns an iterator allowing you to go through all keys of the key/value pairs contained in this object.

--------------------------------


## Worker Codes headers

Worker Codes sets a number of [its own custom headers on incoming requests](#) and outgoing responses.

### Request headers

