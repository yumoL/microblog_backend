# Microblog
This is a microblog application where people can share their thoughts and opinions with others. 

[![CircleCI](https://circleci.com/gh/yumoL/microblog_backend.svg?style=svg)](https://circleci.com/gh/yumoL/microblog_backend)


Possible features
- Register and log in to the application
- Add, modify and delete own blogs (unfinished)
- Follow other users and comment on their blogs(unfinished)
- Live chat with other users(unfinished)

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

The app will start at http://localhost:3003

### For testing
#### Unit testing

`npm run create_test_db`
`npm run test`

#### Robot Framework testing
Please check that you have [Robot Framework](https://github.com/robotframework/robotframework#installation) and [SeleniumLibrary](https://github.com/robotframework/SeleniumLibrary#installation) installed. 

Then run
`npm run eeTest`
`robot -d tests/robot_tests/Results tests/robot_tests/Tests/04_Blog.robot`

The testing results will be saved in tests/robot_tests/Results

