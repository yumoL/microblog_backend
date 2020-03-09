### User guide
* Go to the [website](http://microblogdevops.herokuapp.com)
<img src="https://github.com/yumoL/microblog_backend/blob/master/user_guide_image/index.png" width=400 height=400>

* Log in: if you already have an account, you can go to the login page by clicking the "Login" in the navigation bar.
You can log in with the test user (username: user1, password: 123).
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
<img src="https://github.com/yumoL/microblog_backend/blob/master/user_guide_image/timeout.png" width=600 height=400>

- Profile page: You can your own blogs in the profile page, the last five blogs will be shown. You can click a image to zoom it (same as in discover page).
<img src="https://github.com/yumoL/microblog_backend/blob/master/user_guide_image/own_blog_list.png" width=500 height=400>
&nbsp;&nbsp;&nbsp;&nbsp;You can click the "Click to load more" button to see more blogs.
<img src="https://github.com/yumoL/microblog_backend/blob/master/user_guide_image/own_blog_list_end.png" width=600 height=400>

- Discover page: You can see blogs of all users in the discover page. The app tries to get these blogs from redis cache whose expiration time is 1 minute, so the newest blog will be seen in 1 minute after it's publish time.
<img src="https://github.com/yumoL/microblog_backend/blob/master/user_guide_image/discover.png" width=500 height=400>
&nbsp;&nbsp;&nbsp;&nbsp;You can see blogs of a certain user by clicking his username. 
