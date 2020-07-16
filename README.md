# petsearch

Created by: Kilea Castillo, Bianca Olivarez, Anibal Guerra and Michael Rodriguez

# PET SEARCH 

PetSearch is an app that helps anyone locate an animal to adopt. You can search amongst animals available such as Dog, Cat, Rabbit etc. This is a great way to ethically obtain a new addition to the family. You can create an account, login and start to search using "Pet Type", "Zip Code" and "Breed" to find the closest adoptions available to you. 

# Technologies 
React
Node
Express
MongoDB
Mongoose
Heroku
React-Calendar
Passport

# MVP
Set up adoption appointments, search for adoptable pets near user, search for adoption events near user, save login info (username, email, encrypted password, ect.)

# New Technology 
React-Event-Calendar
Passport

# API
Petfinder - you will need to get a key for this in order to work as we have hidden our keys within a .env file which you will need to create and have the following code:
//
SESSION_SECRET=secret
REACT_APP_API_KEY = ""
REACT_APP_API_SECRET = ""
//

# Wants for Future:
Pet Blog, customizable profile, Events API, Lost and Found section, Geo-Location, Adoption Counter. 

# Installation
1. Clone Repo: git@github.com:norwayflames/petsearch.git
2. run NPM install
3. create a .env file
4. obtain API key and place in .env file: https://www.petfinder.com/developers/api-docs
5. un-comment line 4 to on the "routes/apiRoutes.js" file in order to run locally and test. 
6. When launching to Heroku you must comment the above step out again. 


