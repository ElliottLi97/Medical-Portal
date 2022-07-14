# Medical-Portal

![License Badge](https://img.shields.io/github/license/ElliottLi97/Medical-Portal) ![Top Language](https://img.shields.io/github/languages/top/ElliottLi97/Medical-Portal)

A CMS-style user login portal, where patients can secure access to view personal health information from anywhere with an Internet connection. Using a secure username and password, patients can view health information such as: Recent doctor visits. Discharge summaries including chat message.

## Installation

1. Download or clone repository
2. Node.js is required to run the application
3. `npm install` to install the required npm packages

## Usage

* To start using the application, use mySQL Workbench to setup the database and seed using files:

      * [scheme.sql](./db/schema.sql)
      * [seed.sql](./seeds/seed.sql)

* The application is invoked by running `node server.js` in the command line  
* Open a browser and navigate to <http://localhost:3001/>
* Shows the homepage to interact with the blog site.

## Demo and Links

* [Heroku](https://medicalportalgroup2.herokuapp.com/)
* [Github](https://github.com/ElliottLi97/Medical-Portal)

## Features

* JavaScript
* Node.js
* MySQL
* npm packages
  * bcrypt
  * connect-session-sequelize
  * dotenv
  * express
  * express-handlebars
  * express-session
  * mysql2
  * sequelize
  * moment
  * socket.io

## License

  Licensed under the [MIT](LICENSE) license.
