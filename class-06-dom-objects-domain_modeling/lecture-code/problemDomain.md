# Problem Domain Demo  

## Overall Concept  
- people can share stuff(links, images, text, video, emoji, pokemon, etc...).  
- people can respond to other people's tweets.  
- followers create feed of posts.  
- limit the content to 140 characters  
- supporting hashtags  
- news updates  
- tag users in tweets.  
- user database supporting login/signup


## User Stories  
- As a User, I want to be able to post images, to share with my followers.  
- As a User, I want to be able to tag other users, to also be able to share my tweets, or other user's tweets, with specific user.  
- As a Dev, I want to support multiple users logging in and signing up, to personalize my user experience.  


## Model Objects 
- Tweet  
  - image - image
  - Retweet Count - Number
  - Post Tweet - Function
  - Hashtags - Array
- User  
  - profile pic - images
  - email - string
  - first name - string
  - Followers - Number
  - Following - Array(User)
  - login - function
  - logout - function
  - signup - function
  - userIsLocked - boolean
  - forgot password - function
  - isBlocked - boolean
  - tweets - Array(Tweet)













