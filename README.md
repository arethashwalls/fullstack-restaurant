# [The Full Stack](https://sleepy-caverns-40509.herokuapp.com/)
## A full-stack MVC application featuring consumable pancakes created for UA Coding Bootcamp.

**The Full Stack** is a mock-restaurant application that allows users to 'eat' pancakes and add new pancake flavors to the menu, created as an exercise in MVC architecture.

*The Full Stack* uses:

* The [Node.js](https://nodejs.org/en/) runtime environment.
* The [Express](https://expressjs.com/) framework.
* A [MySQL](https://www.mysql.com/) database.
* The [Handlebars](http://handlebarsjs.com/) templating engine.

### Contents:

* `config`
  * [`connection.js`](/config/connection.js) includes all necessary configuration variables and connects to the database.
  * [`orm.js`](/config/orm.js) is a miniature custom ORM with three methods, selectAll, insertOne, and updateOne.
* `controllers`
  * [`pancakes_controller.js`](/controllers/pancakes_controller.js) contains the three routes required by the assignment.
* [`db`](/db) contains a SQL schema and seeds.
* `models`
  * [`pancake.js`](/models/pancake.js) maps the custom ORM methods to a pancake object.
* A `gitignore` file
* NPM's `package-lock.json` and `package.json` files.
* This `readme`.
* A [`server.js`](/server.js) file for setting up the Express server.

### Application:

#### Front End

#### Data

#### Routing

#### Server

[`server.js`](server.js) is mostly boilerplate and sets up our server.
