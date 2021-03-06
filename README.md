# Microblog
This is a microblog platform where people can post blogs. 

[![CircleCI](https://circleci.com/gh/yumoL/microblog_backend.svg?style=svg)](https://circleci.com/gh/yumoL/microblog_backend)


Possible features
* Register and log in to the application

* After login
  * Change own avatar, username or password
  * Post a blog
  * See a list of own blogs and other users' blogs
  * Logout

[Demo](http://microblogdevops.herokuapp.com)

[Frontend](https://github.com/yumoL/microblog_client)

[Hour Accounting](https://github.com/yumoL/microblog_backend/blob/master/hour_accounting.md)

[User Guide](https://github.com/yumoL/microblog_backend/blob/master/user_guide.md)

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

The app will server will listen at http://localhost:3003

- Build UI: Make sure this repository and the repository of [client](https://github.com/yumoL/microblog_client) are in the same directory, and then use `npm run build:ui`(in the root of this repository) to create a production build of the UI.
After production build you can start your app at http://localhost:3003. 

### For testing
#### Unit testing

`npm run create_test_db`
`npm run test`

#### End-to-end testing (using Robot Framework)
Please check that you have [Robot Framework](https://github.com/robotframework/robotframework#installation) and [SeleniumLibrary](https://github.com/robotframework/SeleniumLibrary#installation) installed. 

Then run
`npm run eeTest`
`npm run rbt_test`

The testing results will be saved in tests/robot_tests/Results

