# EcommerceApi

> Base URL
    > http://localhost:3000/product
    > http://local host:3000/users

```
## User Routes
  @param allUsers http://localhost:{port}/
 + gets all users from the database
  @param findUser http://localhost:{port}/:id
 + gets a single user by id from the database
  @param register http://localhost:{port}/register
 + create or register a new user
  @param updateUser http://localhost:{port}/update/:id
 + updates users record based on user id
  @param deactivateUser http://localhost:{port}/deactivate/:id
 + changes the status of the user to deactivated
   @param activateUser http://localhost:{port}/activate/:id
 + changes the status of the user to activated
```

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

Ecommerce Api is a kodecamp two assignment and it is based on classes help on mongoDb. The task is to use
the intermediate API folder structure
> Set up your code using models, controllers, routers and config
- configs
    - config.js
    - db.js
    - helpers.js
- controller
    - productController.js
    - usersController.js
- model
    - Product.js
    - User.js
- routers
    -


## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.



### Prerequisites

What things you need to install the software and how to install them.

+ *Install NodeJs on your computer*


```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running.

clone the repository

```
git clone <repository-url>
```

and install dependencies doing

```
yarn install // using npm do npm install
```

