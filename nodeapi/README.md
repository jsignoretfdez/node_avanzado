<h1 align="center">Welcome to nodeapi 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/nodeapi" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/nodeapi.svg">
  </a>
</p>

## Install

```sh
npm install
```
## Config enviroment variables

Copy .env.example to env and review the settings.

```sh
cp .env.example .env
```

## Load initial data

You can load the database with initial data with.

```sh
 npm run init-db
```

**Warning! this script delete database contents before the load.**

Use in production only in the deployed. 

## Usage

```sh
npm start
```

## Development Start

```sh
npm run dev
```

## API Methods

### list of agents

GET /api/agentes

{
    "_id": "5f4ebb05c76aaf25cea9b0c5",
    "name": "Brown",
    "age": 25
}

## Retrieves one agent

GET /api/agentes/_id

{
  "result": {
    "_id": "5f5008faa5c4e7063c20d70f",
    "name": "Smith",
    "age": 36,
    "__v": 0
  }
}

## Create agent

POST /api/agentes body: {name: 'asdas', age: 34}

{
    "result": {
        "_id": "5f5011f12d0ce407d860d5b0",
        "name": "Jones",
        "age": 52,
        "__v": 0
    }
}

## Update agent

PUT /api/agentes/<_id> body: {name: 'asdas', age: 34}

{
    "result": {
        "_id": "5f5011f12d0ce407d860d5b0",
        "name": "Jones",
        "age": 40,
        "__v": 0
    }
}

## Delete agent

DELETE /api/agente/<_id>

Return: HTTPCode 200

## How to start a local mongodb instance for development

```sh
./bin/mongod --dbpath ./data/db --directoryperdb     
```

## Author

👤 **Jose Signoret**


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_