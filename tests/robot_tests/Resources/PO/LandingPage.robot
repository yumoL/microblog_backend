*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${START_URL} =  http://localhost:3003

*** Keywords ***
Load
  Go To  ${START_URL}

Verify Page Loaded
  Wait Until Page Contains  Welcome to our Microblog Platform!