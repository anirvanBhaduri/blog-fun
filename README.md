# Blog Fun App

## Getting Started

### Pre-requisites

Ensure to have node (npm) installed.

```sh
$ node --version
v18.20.2
```

Above is the version I've used to run this application.

### Installation

Install the dependencies first from the root of the project.

```sh
$ npm install
```

OR

```sh
$ yarn install
```

### Run the dev server

You can run the dev version of the server (with hot reload) using

```sh
yarn run start:server
```

## Using the application

This application is very simple at the moment and does not have an unit tests or error handling.
It offers a blog post database and some routes to get all `posts` and a route to create a `post`.

e.g.

```javascript
// e.g.
// route GET: http://localhost:9000/blog/posts
// route POST: http://localhost:9000/blog/posts
```

Here is a easy way to create a post using `curl`:

```sh
curl -X POST localhost:9000/blog/posts \
  -d '{ "title": "blog title", "content": "some blog content", "tags": ["cool", "stuff"] }' -H 'content-type:application/json'
```

Then you can get the posts using:

```sh
curl -X GET localhost:9000/blog/posts
```
