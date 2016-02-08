# Web App Bootstrap

Web App Bootstrap is web project boilerplate

## Front-End:
- Grunt
- Webpack
- Typescript
- ReactJS
- Backbone
- Less


## Back-End:
- Gradle
- Groovy/Java
- Spring Boot
- Spring MVC
- Spring Security


## System requirements:
- JDK 1.8
- Gradle
- Node.js
- NPM
- Grunt


## Running application:
- DEV MODE: 


    gradle bootRun -DappLogs=/full/path/to/logs -DappConfig=/full/path/to/config

Gradle run project with grunt:production task, which compiles .less and .ts(x) files for production site.

Task grunt:watch will listen changes in .less and .ts(x) files and it will recompile files with source maps.  

Default port is 8090, can be changed in application.properties with server.port property




- PROD MODE in external Tomcat with VM options: 


    -Dspring.config.location=appConfig=/full/path/to/application-production.properties/config/
    -Dspring.profiles.active=production 
    -DappLogs=/full/path/to/logs
    -DappConfig=/full/path/to/config



## Hot Reload

1. Groovy/Java code reload with springloaded gradle plugin

2. Front-end code recompile and reload with Grunt watch plugin (watch plugin is default plugin defined in grunt/aliases.js, so for hot code reloading just type in console: grunt)


## Backend

To register new demo user with with username/password: demo/demo please visit url - /registration/new?user=demo&pass=demo&auth=ROLE_USER,ROLE_ADMIN and visit /admin page for backend site


## Database

All database setting can be changed in application.properties file with spring.datasource.* properties










