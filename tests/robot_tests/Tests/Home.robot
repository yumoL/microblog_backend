***Settings***
Documentation  Test register 
Resource  ../Resources/PO/LoginPage.robot
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

***Test Cases***
Can add a new blog
  App.Add a blog  ${BLOG_CONTENT}  ${CURDIR}${/}testImage.png


