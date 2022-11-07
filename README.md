# fukusuke-api
Backend application for Fukusuke's e-commerce

# Development

## Setup

- Install [node v16](https://nodejs.org/es/)

- Install yarn if you don't have it already

```shell
npm install -g yarn
```

- Install project dependencies
```shell
yarn install
```

- Create an `.env` file in the project root folder and copy the contents from `.env.default`. Replace the DB values with actual credentials (ask for them).

That's it! Now you can start the project by running:

```shell
yarn start:dev
```

# Project structure

The project is split into modules that represent business domains. Let's take a view at the folder structure:

```
/src
  /modules
    /products
      /controllers
        products.controller.js
      /models
        product.model.js
      /services
        products.service.js
      prouducts.module.js
    /clients
      /controllers
      /models
      /services
    /another-module
      /controllers
      /models
      /services
    ...
  app.module.js
```

As you can see, each module has three main folders: `controllers`, `models` and `services`.

### Controllers

Controllers are responsible for receiving requests and sending responses to the client. They should not contain any logic besides orchestrating service calls.

### Models

Models are the objects we use to interact with the DB. They should not contain any logic, only schema declarations.

### Services

Services is where the magic happens. These are responsible for the implementation of our use cases and business logic.

# Data flow

1. Client makes a request to `GET /products/1`
2. Products controller receives the request and asks the products service for a product with `id=1` 
3. The products service uses the product model to interact with the DB and get the requested product
4. The products service sends back the data from the model to the controller
5. The controller sends the data to the client.
