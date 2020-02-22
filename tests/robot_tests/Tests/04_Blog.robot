***Settings***
Documentation  Test register 
Resource  ../Resources/PO/LoginPage.robot
Resource  ../Resources/Common.robot
Resource  ../Resources/PO/AddBlog.robot
Variables  ../Resources/Variables.py
#Suite Setup  Insertg testing data
Test Setup  Begin Web Test
Test Teardown  End Web Test
# Suite Teardown  Cleanup testing data

***Variables***
${BLOG_CONTENT} =  This is a new blog

***Test Cases***
Can add a new blog
  LoginPage.Login for other operations  ${USERNAME_1}  ${PWD_1}
  AddBlog.Add a blog  ${BLOG_CONTENT}  ${CURDIR}${/}testImage.png
  AddBlog.Blog has been published successfully  ${BLOG_CONTENT}