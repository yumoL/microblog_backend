# Microblog
This is a microblog application where people can share their thoughts and opinions with others. 

Possible features
- Register and log in to the application
- Add, modify and delete own blogs
- Follow other users and comment on their blogs
- Live chat with other users

This repository is the backend of the microblog app.

[Demo](http://microblogdevops.herokuapp.com/home)

[Frontend](https://github.com/yumoL/microblog_client)

[Hour Accounting](https://github.com/yumoL/microblog_backend/blob/master/hour_accounting.md)

### For development
- Clone the repository

`git clone git@github.com:yumoL/microblog_backend.git`

- Install dependencies

`npm install`

- Start MySQL and Redis using docker images

`docker-compose up`

If you haven't installed docker or docker-compose, please check the download instructions for [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/)

- Create database for development and migrate the schemas

`npm run createdb`
`npm run migrate`

- Run the app with development mode

`npm run dev`

The app will start at http://localhost:3003/home
