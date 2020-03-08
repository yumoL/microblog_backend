***Settings***
Library  SeleniumLibrary
Resource  ./LandingPage.robot

***Variables***
${DISCOVER_MENU} =  id=discoverMenu

***Keywords***
Go to discover page
  Click Element  ${DISCOVER_MENU}

Verify a blog loaded
  [Arguments]  ${CONTENT}
  Wait Until Page Contains  ${CONTENT}
