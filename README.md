# IMDB Database Back-end API in Express ⚡️

## Project Briefing

This is the back-end API I've written to support the IMDB-database app I created in Nuxt JS. You can find the front-end app which is written using Vue and Nuxt JS here - https://github.com/Apfirebolt/imdb-clone-frontend-nuxt.

Back-end has user authentication model and supports saving movies as playlist with different categories. 

Made with ❤️ by **[@apfirebolt](https://github.com/Apfirebolt/)**

## Built With

* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)

## Project setup

Simply install node modules for backend. Make sure you have MongoDB installed and running on your system, you can also have it running inside a Docker container. Of course, you'd need you have Node and NPM environment configured on your system.

```
npm install
npm start
```

## Database Architecture

- MongoDB is used as database which works pretty smoothly with Javascript and other Javascript frameworks. 
- Mongoose ORM is used to define document schemas and perform 
complex queries.
- It has 4 models namely 'User', 'Movie', 'Playlist' and 'Category'.

## Future Requirements

- Might add feature for users to be able to review a movie and share saved movies with other users.

## Updates

- Any future updates to the API would be documented here.

