***Settings***
Documentation  Test register 
Resource  ../Resources/App.robot
Resource  ../Resources/PO/RegisterPage.robot
Resource  ../Resources/Common.robot
Resource  ../Resources/Database.robot
Variables  ../Resources/Variables.py
# Suite Setup  Insertg testing data
Test Setup  Test Setup
Test Teardown  Test Teardown

***Keywords***
Test Setup
  Common.Begin Web Test
  App.Register a new user successfully  ${USERNAME_1}  ${PWD_1}

Test Teardown
  Database.Clean data
  Common.End Web Test

***Test Cases***
New user should be able to register with valid data
  [Tags]  Register
  App.Register a new user successfully  ${USERNAME_2}  ${PWD_2}

Error should exist when register with existing username
  [Tags]  Register
  RegisterPage.Go to register page
  RegisterPage.Start register  ${USERNAME_1}  pwd  pwd
  App.Display error  User name is already existed

Error should exist when register with invalid username
  [Tags]  Register
  RegisterPage.Go to register page
  RegisterPage.Start register  a  pwd  pwd
  App.Display error  Username should be between 3 and 255 characters

Error should exist when register with invalid password
  [Tags]  Register
  RegisterPage.Go to register page
  RegisterPage.Start register  newUser  p  p
  App.Display error  Password should be between 3 and 255 characters

Error should exist when password and its confirmation are different
  [Tags]  Register
  RegisterPage.Go to register page
  RegisterPage.Start register  newUser  pwd  diffPwd
  App.Display error  Confirmation does not match the password 

