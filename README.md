# Node + ReactJS App - Zwitter
A very basic clone of Twitter using NodeJS, Express, MySQL and React

## Setup
- Clone the repository `git clone git@github.com:atulmy/nodejs-reactjs-zwitter.git zwitter` and `cd zwitter`
- Install npm modules `npm install`
- Install global npm modules `npm i -g nodemon webpack webpack-dev-server knex`
- Run migration `knex --knexfile server/configs/database.js --cwd server/ migrate:latest`
- Run node server `npm start`

## Core Structure
    zwitter/
      ├── client/
      │   ├── actions/
      │   │   ├── common/
      │   │   ├── pages/
      │   │   └── user/
      │   │
      │   ├── components/
      │   │   ├── common/
      │   │   ├── pages/
      │   │   ├── user/
      │   │   └── app.js
      │   │
      │   ├── reducers/
      │   ├── index.js
      │   └── routes.js
      │
      ├── server/
      │   ├── configs/
      │   │   ├── database.js
      │   │   ├── orm.js
      │   │   ├── server.js
      │   │   └── webpack.dev.js
      │   │
      │   ├── middlewares/
      │   ├── models/
      │   ├── repositories/
      │   ├── routes/
      │   ├── index.html
      │   └── index.js
      │
      ├── shared/
      │   └── validations/
      │
      ├── .babelrc
      ├── .gitignore
      ├── package.json
      └── README.md


## Screenshots
![screenshot](http://atulmy.com/attachments/images/zwitter/zwitter.png)
