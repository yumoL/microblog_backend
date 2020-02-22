***Settings***
Library  SeleniumLibrary
Resource  ./LandingPage.robot

***Variables***
${HOME_MENU} =  id=homeMenu
${BLOG_TEXT_FIELD} =   id=blogTextField
${INSERT_IMAGE_BUTTON}=  id=insertImageButton
${FILE_INPUT} =    id=fileInput
${IMAGE} =  id=image
${PUBLISH_BLOG_BUTTON} =  id=publishBlogButton
${PROFILE_MENU} =  id=profileMenu

***Keywords***
Go to setting page
  Click Element  ${HOME_MENU}

Add a blog
  [Arguments]  ${BLOG_CONTNT}  ${FILE_PATH}
  Input Text  ${BLOG_TEXT_FIELD}  ${BLOG_CONTNT}
  Click Button  ${INSERT_IMAGE_BUTTON}
  Choose File  ${FILE_INPUT}  ${FILE_PATH}
  Wait Until Page Contains Element  ${IMAGE}
  Click Button  ${PUBLISH_BLOG_BUTTON}

Blog has been published successfully
  [Arguments]  ${BLOG_CONTNT}
  Wait Until Page Contains  You created a blog
  Click Element  ${PROFILE_MENU}
  Wait Until Page Contains  ${BLOG_CONTNT}

