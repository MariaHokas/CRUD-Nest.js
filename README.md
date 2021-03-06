<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Simple CRUD Nest.js app with docker. Started with [Nest](https://github.com/nestjs/nest) framework starter repository.

## Service contains such modules:

 1. `db` - connected typerom with correct env vars

## Prerequisites
It's required to install:
 1. [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) for setting up local db.
 2. [NVM](https://github.com/nvm-sh/nvm) for managing `Node.js` versions.

## Setting local environment

```bash
#DB
TYPEORM_HOST=localhost
TYPEORM_PORT=PORT
TYPEORM_USERNAME=USERNAME
TYPEORM_PASSWORD=PASSWORD
TYPEORM_DATABASE=DATABASE
TYPEORM_ENTITIES=dist/**/*.entity.js
TYPEORM_CONNECTION=mssql
TYPEORM_SYNCHRONIZE=true

#APP
WEB_APP_BASE_URL=http://localhost:3000
NODE_ENV=development

#Azure storage
AZURE_STORAGE_ACCESS_KEY=ACCESS_KEY
AZURE_STORAGE_ACCOUNT=STORAGE_ACCOUNT
```

## Setting up Local DB

All DB variables will be taken from .env file.
```bash
Start you docker-compose first with command
$ docker-compose up -d
```
To check if docker container is runing:

```bash
$ docker ps
```

## Installation of node modules

Select the package manager you want to use in the project. 

```bash
$ npm run install
```
Or
```bash
$ yarn run install
```

## Running the app scripts


```bash
# development
$ npm run start

or

```bash
# development
$ yarn start

# watch mode
$ npm run start:dev

or

```bash
# development
$ yarn star:dev


##  Swagger(Open API)
For opening documentation locally paste in your browser [http://localhost:3050/docks](http://localhost:3050/api) or exchange with your custom app env `PORT`.

## License

Nest is [MIT licensed](LICENSE).
