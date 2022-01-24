---
title: Get Started
description: 'Worker Codes serverless computing platform managed your code, database and push notifications'
---

# Get Started

Worker Codes serverless computing platform managed your code, database and push notifications. Allowing developers to focus coding their application, without the need to worry about provisioning servers or containers, load balancing, creating failover or scaling plans.


This guide will instruct you through setting up a Worker Codes account to deploying your first Worker script.

--------------------------------

## 1. Sign up for a Workers account

Before you can start [publishing](/worker-cli/commands#publish) your application you must sign up for a Worker Codes account.

<!-- <p><Button type="primary" href="https://console.worker.codes/auth/signup">Sign up</Button></p> -->

--------------------------------

## 2. Install the Workers CLI

Installing the Workers CLI, gives you the freedom to [`generate`](/worker-cli/commands#generate), [`configure`](/worker-cli/commands#configure), [`build`](/worker-cli/commands#build), [`preview`](/worker-cli/commands#preview), and [`publish`](/worker-cli/commands#publish) your Workers projects from the comfort of your development environment.

To install [`cli`](https://github.com/wkr/cli), ensure you have [`npm` installed](https://www.npmjs.com/get-npm), then run:

```sh
$ npm install -g @wkr/cli
```
or install with yarn:

```sh
$ yarn global add @wkr/cli
```

Then run `cli --version` to confirm that the installation was successful:

```sh
$ wrk --version
wrk 1.11.1
```

--------------------------------

## 3. Configure the Worker CLI

With installation complete, you will need to authenticate the `cli`,
You may authenticate this `cli` using the following commands:

  - `login`: this command will open a browser window login page to authenticated.
  - `config`: an alternative to login that prompts you to enter your api key.

### Login From The Browser
With installation complete, `cli` will need access tokens. You may create an access token under the Profile Settings view at https://console.worker.codes/account/api-tokens  The access tokens are valid for a year.

```sh
$ wrk login
Open this link in your browser: https://console.worker.codes/oauth2/...
```

### Access Tokens
With installation complete, `cli` will need access tokens. From a Terminal, type `wkr login`. This command will open your browser and authenticate your `cli` through the browser.

```sh
$ wrk login
Enter API Token: yourNewTokenCreatedAbove
Successfully Authenticated
```
Upon a successful log-in, you are ready to start building you application.

--------------------------------

## 4. Generate a new project

Using the `wkr generate` [command](/worker-cli/commands#generate) will create a new project. The [default starter](https://github.com/wkr/worker-template) template will be used. The `cli` also has many quick start template you can use `hello-world`, `worker-sql` ,`worker-store` ,`worker-cache` and `worker-event`. You may also provide a custom template using the [template argument](/worker-cli/commands#generate) with a URL to your desired repository.

```sh
wkr generate my-app
```

The `wkr generate` will create a folder called `my-app` with the contents of your chosen template. The folder will also contain toml configuration file `cli.toml`, this file contains the configuration for your project.

```sh
cd my-app
ls
index.js           cli.toml           README.md          package.json

```

Go to the [Templates](/get-started/templates) page to see a list of available starter templates.

To start a project from your own code — use [`wkr init`](/worker-cli/commands#init).

--------------------------------

## 5. Write code

With your new project generated, you may begin to write your application.

Workers application consists of two parts:

1. An [event listener](/runtime-apis/add-event-listener) that listens for [`FetchEvents`](/runtime-apis/fetch-event), and
2. An event handler that returns a [Response](/runtime-apis/response) object which is passed to the event’s `.respondWith()` method.

When a request is received on one of Worker Codes’s edge servers for a URL matching a Workers script, it passes the request to the Workers runtime. This dispatches a [`FetchEvent`](/runtime-apis/fetch-event) in the [isolate](/learning/how-workers-works#isolates) where the script is running.

```js
addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return new Response("Hello World!", {
    headers: { "content-type": "text/plain" }
  })
}
```

Below is an example of the request response workflow:

1. An event listener for the `FetchEvent` tells the script to listen for any request coming to your Worker. The event handler is passed the `event` object, which includes `event.request`, a [`Request`](/runtime-apis/request) object which is a representation of the HTTP request that triggered the `FetchEvent`.

2. The call to [`.respondWith()`](/runtime-apis/fetch-event#methods) lets the Workers runtime intercept the request in order to send back a custom response (in this example, the plain text “Hello worker!”).

    - The `FetchEvent` handler typically culminates in a call to the method `.respondWith()` with either a [`Response`](/runtime-apis/response) or `Promise<Response>` that determines the response.

    - The `FetchEvent` object also provides [two other methods](/runtime-apis/fetch-event#methods) to handle unexpected exceptions and operations that may complete after a response is returned.

Learn more about [the `FetchEvent` lifecycle](/learning/fetch-event-lifecycle).

--------------------------------

## 6. Preview your project

You can preview your application locally
```sh
wkr dev
watching "./my-app"
Listening on http://127.0.0.1:8787
```

This command will build and run your application locally, you may preview your application using the provided URL.

--------------------------------

## 7. Publish your application

You can now publish your application to your `*.wkr.codes`s subdomain using one simple command:

```sh
wkr publish
Publish https://hello-world.[subdomain].wrk.codes
```

--------------------------------

## Next steps

To do more with Worker Codes, go to the [Tutorials](/tutorials) section.