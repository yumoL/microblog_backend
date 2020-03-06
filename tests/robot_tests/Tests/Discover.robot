***Settings***
Resource  ../Resources/Common.robot
Resource  ../Resources/App.robot
Resource  ../Resources/Database.robot
Variables  ../Resources/Variables.py
#Suite Setup  Insertg testing data
Test Setup  Test Setup
Test Teardown  Test Teardown
# Suite Teardown  Cleanup testing data

***Keywords***
Test Setup
  Common.Begin Web Test
  App.Register and login for other operations  ${USERNAME_1}  ${PWD_1}

Test Teardown
  Database.Clean data
  Common.End Web Test

***Variables***
${BLOG_CONTENT} =  This is a new blog
#@{BLOGS} =  blog1  blog2  blog3
@{BLOGS} =  blog1  blog2

***Test Cases***
Can blogs of all users
  App.Add a blog without images  @{BLOGS}[0]
  App.Logout
  App.Register and login for other operations  ${USERNAME_2}  ${PWD_2}
  App.Add a blog without images  @{BLOGS}[1]
  App.Show blogs of all users in Discover page  @{BLOGS}


