***Settings***
Resource  ./PO/RegisterPage.robot
Resource  ./PO/LoginPage.robot
Resource  ./PO/SettingPage.robot
Resource  ./PO/HomePage.robot
Resource  ./PO/ProfilePage.robot

***Keywords***
Register a new user successfully
  [Arguments]  ${USERNAME}  ${PWD}
  RegisterPage.Go to register page
  RegisterPage.Start register  ${USERNAME}  ${PWD}  ${PWD}
  RegisterPage.Register succeeded

Login successfully
  [Arguments]  ${USERNAME}  ${PWD}
  LoginPage.Go to login page
  LoginPage.Start login  ${USERNAME}  ${PWD}
  LoginPage.Login succeeded

Logout
  SettingPage.Logout

Register and login for other operations
  [Arguments]  ${USERNAME}  ${PWD}
  Register a new user successfully  ${USERNAME}  ${PWD}
  Login successfully  ${USERNAME}  ${PWD}

Change username
  [Arguments]  ${NEW_USER_NAME}
  SettingPage.Change username  ${NEW_USER_NAME}
  SettingPage.Username change succeeded

Change password
  [Arguments]  ${OLD_PWD}  ${NEW_PWD}
  SettingPage.Change password  ${OLD_PWD}  ${NEW_PWD}  ${NEW_PWD}
  SettingPage.Password change succeeded

Display error
  [Arguments]  ${ERROR}
  Wait Until Page Contains  ${ERROR}

Add a blog
  [Arguments]  ${CONTENT}  ${FILE_PATH}
  HomePage.Add a blog  ${BLOG_CONTENT}  ${FILE_PATH}
  HomePage.Blog has been published successfully

Add a blog without images
  [Arguments]  ${CONTENT}
  HomePage.Add a blog without image  ${CONTENT}
  HomePage.Blog has been published successfully

Load more blogs
  [Arguments]  @{BLOGS}
  ProfilePage.Go to profile page
  ProfilePage.Load more blogs
  ProfilePage.Verify more blogs loaded  @{BLOGS}[0]
