***Settings***
Documentation  Test register 
Resource  ../Resources/App.robot
Resource  ../Resources/PO/LoginPage.robot
Resource  ../Resources/Common.robot
Resource  ../Resources/Database.robot
Variables  ../Resources/Variables.py

Test Setup  Test Setup
Test Teardown  Test Teardown

***Keywords***
Test Setup
  Common.Begin Web Test
  App.Register a new user successfully  ${USERNAME_1}  ${PWD_1}

Test Teardown
  Database.Clean data
  Common.End Web Test

***Variables***


***Test Cases***
User should be able to login with correct credentials
  [Tags]  Login
 
  App.Login successfully  ${USERNAME_1}  ${PWD_1}

User should not be able to login with wrong credentials
  [Tags]  Login
  LoginPage.Go to login page
  LoginPage.Start login  ${USERNAME_1}  wrongPwd
  App.Display error  Login failed, wrong username or password

