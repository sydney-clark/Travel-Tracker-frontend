# Travel-Tracker-Frontend

## Table of Contents

- [Node list](#node-list)
- [Collaborators](#Collators)
- [Instructions for running](#instructions-for-running)
- [Approach taken](#approach-taken)
- [User stories](#user-stories)
- [Wire framework](#wire-framework)
- [Live link](#live-link)
- [Stretch goals](#stretch-goals)

## Node list

- axios

- react bootstrap

- sass

- Install project with
  ```sh
      npm i
  ```

## Collaborators

- Sydney Clark

## Instructions for running

1. After cloning down from git hub make sure your node is running the right version (node v19.4.0) and run nmp i to install everything needed to run this application

2. Type in terminal npm start, but make sure your back end is running first

## Approach taken

- I started off by making two models with the lat and lng fields in order to populate markers on my google maps api. Then I added a coordinates finder, that allows you to type in a place and get the lat/long coordinates. That gets stored in the database on my backend, then when you click the add new marker button, it adds it ontop of my google maps api. Then I went through and made the app meet mvp.

## Unsolved problems

- I wanted to add a form that would be able to add extra info to each individual marker when you click on that specific marker.

## User stories

- As a user I should be able to look up any place in the world and get the latitude/longitude coordinates for it.

- As a user I should be able to add a new marker to my google maps.

- As a user I should be able to calculate routes on the map to see the distance in miles.

## Wire Framework

<img src="https://i.imgur.com/0jTu1tR.png" width=900 height=500/>

## Live link

- backend - https://travel-tracker-backend.onrender.com

- frontend - https://travel-tracker-frontend.onrender.com

## Stretch goals

- User login {} and authentication {}

- Click on marker on the map and extra info for that place pops up
