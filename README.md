
<div align="center">
<img width="200px" src="./img/logo.png">
</div>

<h1 align="center">theTABLE</h1> 

## Authors: Sarah Creager, Justin Hamerly, Christopher Burk, Haustin Kimbrough

## Version: 1.0.0

## About

`theTABLE` is an app that tracks your restaurants, recommended meals, and the number of visits. It displays a feed with detailed restaurant information and a personalized, dynamic worldwide map. This app is integrated with Auth0 login.

## Problem Domain

You know that feeling when you're trying to pick a place to eat, but you're too hungry to make a decision? We know the feeling all too well and so we set out on a mission to simply the process for you. `theTABLE` alleviates the stress of planning your next meal by tracking your favorite restaurants and recommended items. 

Our app displays a personalized feed with all your favorite spots, along with eye-catching visuals and a dynamic worldwide map. It is an info feed for foodies and hungry people who need some inspiration on where to go tonight. No more hangry arguments over where to eat or settling for the same place the third time this week. Come on over to `theTABLE`. We've got you covered.

## Project Overview

| Title      | Languages/Frameworks/Libraries/Tools |
| ----------- | ----------- |
| Frontend | React, Netlify, React-Bootstrap, CSS3 |
| Backend | Node.js, Express, Mongoose, Heroku, MongoDB Atlas |
| Integrations | Auth0, Yelp Business Search API, MapBox GL JS, MongoDB Compass |

## Installation

1. `npm install`  
    * axios
    * cors
    * dotenv
    * express
    * jsonwebtoken
    * jwks-rsa
    * mongoose


2. `npm start`

*sample .env*
``` 
PORT=3001

LOCATIONIQ_API_KEY=placeYourAPIKeyHere

YELP_API_KEY=placeYourAPIKeyHere

MONGODB_URI=placeYourMongoDBLinkHere
```

## User Stories

### LOGIN FEATURE

As a restaurant goer, I need to easily access the application so I can successfully decide on a restaurant that fits my taste.

Feature Tasks:

- User clicks a login button to enter credentials through Auth0

- Once user logs in successfully a logout button will appear.

Acceptance:

- When user clicks login button, Auth0 form will render.

- Once user successfully logs in, profile information will appear.

- Logout button will conditionally render once user is logged in.

### ADD A RESTAURANT FEATURE

As a user, I want to input previous restaurant experiences so I can track what restaurants I???ve been to and what dish was my favorite.

Feature Tasks:

- User clicks a check in button to track the restaurants they've visited.

- User can upload a photo and name of favorite dish at the restaurant.

Acceptance:

- When user clicks the check-in button, the tally for visits to that current restaurant increases.

- User is able to upload a picture and name of their favorite dish which saves to their favorites page.

### ADD A MAP THAT DISPLAYS PREVIOUSLY VISITED RESTAURANTS

As a user, I want to view the restaurants I???ve already visited so I can easily make a selection if I don???t want to eat somewhere new.

Feature Tasks:

- Map will display pins of user???s previously visited restaurants.

- Pin will be a unique color.

- Pin size will vary based on how many times they???ve visited the restaurant.

Acceptance:

- When user clicks the map it will show the pins of all the restaurants they have previously visited.

- The pins will display in a unique color for user???s selections.

- The pins will increase in size every 3 times the restaurant is visited.

## Domain Model

![domainmodel](./img/DomainModel.png)

## Database Schema Diagram

![DatabaseSchemaDiagram](./img/DatabaseSchemaDiagram.png)

## Resources and Contributions

### Sites

* [Miro](https://miro.com/login/)
* [Unsplash](https://unsplash.com/)
* [Trello](https://trello.com/)
* [Stack Overflow](stackoverflow.com)
* [Mongoose Docs](https://mongoosejs.com/docs/api.html)
* [MDN Docs](https://developer.mozilla.org/en-US/)
* [W3 Schools](https://www.w3schools.com/)
* [Node JS Docs](https://nodejs.org/en/docs/)
* [Yelp API](https://www.yelp.com/developers)
* [Mapbox GL](https://www.mapbox.com/)

### Advisors

* JB Tellez
* Hexx King
* Kristian Esvelt
* Chance Harmon
* Audrey Patterson
* JP Jones

## Future Implementations

### ADD A MAP THAT DISPLAYS FRIEND'S VISITED RESTAURANTS

As a user, I want to view the restaurants my friends have already visited so I can easily make a selection if I want to eat somewhere new recommended from a trusted source.

Feature Tasks:

- Map will display pins of friend's previously visited restaurants.

- Pin will be a unique color.

Acceptance:

- When user clicks the map it will show the pins of all the restaurants friends have previously visited.

- The pins will display in a unique color for friend's selections.

### ADD A MAP THAT DISPLAYS NEARBY RESTAURANTS

As a user, I want to view all the restaurants nearby so I can easily make a selection if I want to explore somewhere new.

Feature Tasks:

- Map will display pins of all nearby restaurants.

- Pin will be a unique color.

Acceptance:

- When user clicks the map it will show the pins of all the nearby restaurants in the area.

- The pins will display in a unique color.

### MAP TOGGLES BETWEEN VIEWS

As a user, I want to toggle between my restaurant pins, my friend's pins, and all other nearby restaurant pins on the map so I can easily make a selection based off of each filtered view.

Feature Tasks:

- User can selected a toggle option on map to view their restaurant pins, their friend's pins, or all other restaurants in the area.

Acceptance:

- When user clicks the toggle button on the map, it will filter the pins on the map to their selection.