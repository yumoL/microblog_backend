***Settings***
Library  DatabaseLibrary

***Variables***
${DBNAME} =  microblog_test
${DBUSER} =  root
${DBPWD} =  password
${DBHOST} =  localhost
${DBPORT} =  3306

***Keywords***
Clean data
  Connect To Database Using Custom Params  pymysql  database='microblog_test', user='root', password='password', host='localhost', port=3306
  Execute SQL Script  ${CURDIR}${/}statement.sql