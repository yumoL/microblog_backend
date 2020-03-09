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

### User guide
* Go to the [website](http://microblogdevops.herokuapp.com)
<img src="https://github.com/yumoL/microblog_backend/blob/master/user_guide_image/index.png" width=400 height=400>

* Log in: if you already have an account, you can go to the login page by clicking the "Login" in the navigation bar.
<img src="https://github.com/yumoL/microblog_backend/blob/master/user_guide_image/login.png" width=400 height=400>

* Register: Click the "Register" in the navigation bar to go to the register page. You will be redirected to the login page after registration succeeded.
<img src="https://github.com/yumoL/microblog_backend/blob/master/user_guide_image/register_ok.png" width=400 height=400>
&nbsp;&nbsp;&nbsp;&nbsp;Username should be unique, otherwise a warning message will be displayed.
<img src="https://github.com/yumoL/microblog_backend/blob/master/user_guide_image/register_existed_username.png" width=400 height=400>

* Home page: After login, you'll be directed to the home page where you can post blogs. You can also add pictures(maximum 3) with your blog.
<img src="https://github.com/yumoL/microblog_backend/blob/master/user_guide_image/post_blog.png" width=400 height=400>

* Setting 
<img src="https://github.com/yumoL/microblog_backend/blob/master/user_guide_image/setting_nav.png" width=600 height=400>
&nbsp;&nbsp;&nbsp;&nbsp;Account setting: You can change your username, avatar and pasword by clicking the "Account setting"
<img src="https://github.com/yumoL/microblog_backend/blob/master/user_guide_image/setting.png" width=400 height=400>
&nbsp;&nbsp;&nbsp;&nbsp;Logout: You can log out by clicking the "Logout" button in the dropdown

&nbsp;&nbsp;&nbsp;&nbsp;You'll see a message when your session expired at which time you should login again.The expiration time is one hour.

- Profile page: You can your own blogs in the profile page, the last five blogs will be shown. You can click a image to zoom it (same as in discover page).
<img src="https://github.com/yumoL/microblog_backend/blob/master/user_guide_image/own_blog_list.png" width=500 height=400>
&nbsp;&nbsp;&nbsp;&nbsp;You can click the "Click to load more" button to see more blogs.
<img src="https://github.com/yumoL/microblog_backend/blob/master/user_guide_image/own_blog_list_end.png" width=600 height=400>

- Discover page: You can see blogs of all users in the discover page.
<img src="https://github.com/yumoL/microblog_backend/blob/master/user_guide_image/discover.png" width=500 height=400>
&nbsp;&nbsp;&nbsp;&nbsp;You can see blogs of a certain user by clicking his username. 

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

- Build UI
Make sure this repository and the repository of [client](https://github.com/yumoL/microblog_client) are in the same directory, and then use `npm run build:ui`(in the root of this repository) to create a production build of the UI.
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

