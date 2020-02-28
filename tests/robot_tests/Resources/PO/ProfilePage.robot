***Settings***
Library  SeleniumLibrary
Resource  ./LandingPage.robot

***Variables***
${PROFILE_MENU} =  id=profileMenu
${LOAD_MORE_BUTTON} =  id=loadMoreButton

***Keywords***
Go to profile page
  Click Element  ${PROFILE_MENU}

Load more blogs
  Wait Until Page Contains Element  ${LOAD_MORE_BUTTON}
  Click Button  ${LOAD_MORE_BUTTON}

Verify more blogs loaded
  [Arguments]  ${MORE_CONTENT}
  Page Should Contain  ${MORE_CONTENT}
