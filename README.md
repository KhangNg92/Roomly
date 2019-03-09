# ROOMLY

![Screenshot of Homepage](https://i.imgur.com/iADd7Om.png)


Roomly is a non-profit organization where users can donate or provide extra spaces for homeless people around United States. The mission of Roomly is to help homeless to feel warm again and receive help from other people. 

## Full Stack Application

We have used MEAN Stack (MongoDB, Express, Angular 7, Node.js) to build Roomly into a friendly user web application.

### Back-End

1. **Express** + **middleware** functions to provide abstract layer on top of NodeJS
2. **MongoDB**: **Database** set up that allows me to easily and expressively model user info my application.
3. I use **mLab** as my digital database because they offer _500MB_ **free** for your storage.

Having the same basic data model in my code & database dramatically simplifies the task of application development, and eliminates the layers of complex mapping code otherwise required. MongoDB also makes it easy to evolve the structure of form data over time.

Models and Routes are set up accordingly in _server.js_ and _models.js_.

### Front-End
4. Bootstrap: quick, easy set up, mobile responsive.
5. Angular 7: 

**Angular 7** is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop.

### Other technologies

6. Passport, Nodemon, serve-favicon, body-parser etc. -
7. Babel, ES6. Bluebird, because ES 6 is fun and also I believe in clean code (hence promises).
8. **Stripe** is the best software platform for running an internet business. They handle billions of dollars every year for forward-thinking businesses around the world.
9. **AWS Service** is image-upload management. 

## Heroku and Deployment

1. Login your heroku

```
heroku login
```

2. Create Heroku 

```
heroku create <github.name><project-name>
```

3. Cofirm heroku

 ``` 
 heroku remote -v
 ```
 
 4. Add files ( same steps as adding to github)
 
 ```
 git add .
 ```
 
 5. Commit all files
 
 ``` 
 git commit -m **"description"**
 ```
 
 6. Update new files to heroku
 
 ```
 git push heroku master
 ```


 ## Team members

 1. Cuong La (Tin).
 2. Khang Nguyen.
 3. Thu Nguyen.
 4. Mai Huynh.
 5. Nathan Nguyen.