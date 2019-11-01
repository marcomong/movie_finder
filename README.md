# Movie Finder - Vuejs

The movie finder web application allows you to find a movie and look at the main details you are probabily interested in

  - Trailer
  - Summary
  - Score

# How does it look like?

  <img width="1675" alt="Screen Shot 2019-10-30 at 10 21 51 PM" src="https://user-images.githubusercontent.com/38232463/67916557-15a5ce80-fb64-11e9-8981-7c74eb308776.png">
  
  <img width="1678" alt="Screen Shot 2019-10-30 at 10 17 06 PM" src="https://user-images.githubusercontent.com/38232463/67916815-fb202500-fb64-11e9-904c-2a807cdeee27.png">

### Tech

Dillinger uses a number of open source projects to work properly:

* [Vuejs - Cli3] - HTML enhanced for web apps!
* [HTML] - Mark up language
* [SCSS] - Stylesheet lanaguage

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## docker usefull commands
remove all containers
```
docker rm $(docker ps -a -f status=exited -q)
```

remove all images

```
docker rmi $(docker images -a -q)
```