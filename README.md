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

Simple CRUD Nest.js app with Docker and Swagger. Started with [Nest](https://github.com/nestjs/nest) framework starter repository.

## Prerequisites
It's required to install:
 1. [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) for setting up local db.
 2. [NVM](https://github.com/nvm-sh/nvm) for managing `Node.js` versions.

## Setting local environment

Create.env file to your root directory. More information how to take image used in project to use. https://hub.docker.com/r/kcollins/mssql

Example .env file
```bash
#DB
version: '3.1'
services:
  db:
    image: kcollins/mssql:latest
    ports:
      - 1433:1433
    volumes:
      - db_data:/var/opt/mssql
      - ./db-backups:/backups
      - ./db-init:/docker-entrypoint-initdb.d
    secrets:
      - sa-password
      - mssql-password
    environment:
      # ACCEPT_EULA confirms your acceptance of the End-User Licensing Agreement.
      ACCEPT_EULA: Y
      SA_PASSWORD_FILE: /run/secrets/sa-password
      MSSQL_DATABASE: test
      MSSQL_USER: testuser
      MSSQL_PASSWORD_FILE: /run/secrets/mssql-password
      MSSQL_PID: Developer  # Change to the edition you need, e.g. "Express", "Standard", etc.

secrets:
  sa-password:
    file: ./secrets/SA_PASSWORD
  mssql-password:
    file: ./secrets/MSSQL_PASSWORD

volumes:
  db_data:
```

## Setting up Local database

All database variables will be taken from .env file.
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
```
or

```bash
# development
$ yarn start
```
# watch mode
```bash
$ npm run start:dev
# development
```
or
```bash
$ yarn star:dev

```
##  Swagger(Open API)
For opening documentation locally paste in your browser (http://localhost:3050/api) or exchange with your custom app env `PORT`.

## License

Nest is [MIT licensed](LICENSE).
