# Node + ReactJS App - Zwitter
A very basic clone of Twitter using NodeJS, Express, MySQL and React

## Setup
- Clone the repository `git clone git@github.com:atulmy/nodejs-reactjs-zwitter.git zwitter` and `cd zwitter`
- Install NPM modules `npm install`
- Run Node server `npm start`

## Core Structure
    zwitter
      ├── client
      │   ├── actions
      │   │   ├── common
      │   │   ├── pages
      │   │   └── user
      │   ├── components
      │   │   ├── common
      │   │   ├── pages
      │   │   ├── user
      │   │   └── app.js
      │   ├── reducers
      │   ├── index.js
      │   └── routes.js
      ├── server
      │   ├── configs
      │   │   ├── database.js
      │   │   ├── orm.js
      │   │   ├── server.js
      │   │   └── webpack.dev.js
      │   ├── middlewares
      │   ├── models
      │   ├── repositories
      │   ├── routes
      │   ├── index.html
      │   └── index.js
      ├── shared
      │   └── validations
      ├── .babelrc
      ├── .gitignore
      ├── package.json
      └── README.md
