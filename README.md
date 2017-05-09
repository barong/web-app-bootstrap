# Web App Bootstrap

Web App Bootstrap is web project boilerplate

## Front-End:
- Less
- Typescript
- ReactJS
- Redux
- Backbone
- Grunt
- Webpack


## Back-End:
- Groovy/Java
- Spring Boot
- Spring MVC
- Spring Security


## System requirements:
- JDK 1.8
- Maven v.3.1.1+


## Running application:
- DEV MODE: 


    mvn spring-boot:run -Drun.jvmArguments="-DappLogs=/full/path/to/appLogs -DappConfig=/full/path/to/config"

Maven will run project with grunt:production task by default and it will compile .less and .ts(x) files for production site.

Default port is 8090, can be changed in application.properties with server.port property




- PROD MODE in external Tomcat with VM options: 


    -Dspring.config.location=/full/path/to/dir/with/application-production.properties/config/
    -Dspring.profiles.active=production 
    -DappLogs=/full/path/to/logs
    -DappConfig=/full/path/to/config



## Hot Reload

1. Groovy/Java code reload works with springloaded maven plugin. Don't forget to choose Groovy-Eclipse compiler to recompile single class and define /target/classes dir as compile result directory


2. Front-end code reload: typescript/reactJS and .less code can be recompiled and reloaded with webpack-dev-server. just type in console `npm run dev-server` and visit http://localhost:3000 for hot code reloading


## Backend

To register new demo user with with username/password: demo/demo please visit url - /registration/new?user=demo&pass=demo&auth=ROLE_USER,ROLE_ADMIN and visit /admin page for backend site


## Database

All database setting can be changed in application.properties file with spring.datasource.* properties

By default you should have local mysql database with db_name: webappbootstrap, user: sqluser, password: sqlpass


##### Frontend app bootstrap - [https://github.com/barong/frontend-app](https://github.com/barong/frontend-app)




