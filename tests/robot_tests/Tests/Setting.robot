***Settings***
Documentation  Test register 
Resource  ../Resources/App.robot
Resource  ../Resources/Database.robot
Resource  ../Resources/PO/LoginPage.robot
Resource  ../Resources/Common.robot
Resource  ../Resources/PO/SettingPage.robot
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
${NEW_USER_NAME} =  newUsername
${NEW_PWD} =  newPwd

***Test Cases***
Can logout
  App.Logout

Can change username
  App.Change username  ${NEW_USER_NAME}
  App.Logout
  App.Login successfully  ${NEW_USER_NAME}  ${PWD_1}
  App.Change username  ${USERNAME_1}

Show error message if new username is already used by another user
  SettingPage.Change username  ${USERNAME_2}
  App.Display error  User name is already existed

Can change password
  App.Change password  ${PWD_1}  ${NEW_PWD}
  App.Logout
  App.Login successfully  ${USERNAME_1}  ${NEW_PWD}
  App.Change password  ${NEW_PWD}  ${PWD_1}

Show error message when old password is wrong
  SettingPage.Change password  wrongPwd  newPwd  newPwd
  App.Display error  Fail to change password, please make sure that your old password is correct