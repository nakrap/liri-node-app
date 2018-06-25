# liri-node-app
LIRI is like iPhone's SIRI! However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a "Language" Interpretation and Recognition Interface. LIRI is a **command line Node.js app** that takes in parameters and returns requested data.

## Running the app:

Clone the repo to your local machine, install the dependencies, and run the liri.js file in Terminal.
When the user opens the file liri.js in the terminal, user is allowed the following commands:
1. node liri.js my-tweets
2. node liri.js spotify-this-song *any song title*
3. node liri.js movie-this *any movie title*
4. node liri.js do-what-it-says 


## How it Works:
```
1. **my-tweets:** Will return Twitter's last 20 tweets with the search parameter of "startups."
```
```
2. **spotify-this-song *any song title*:** Will search Spotify for the song that the user entered, and return specific info.
```
```
3. **movie-this *any movie title*:** Will search IMDB for the movie that the user entered, and return specific info.
```
```
4. **do-what-it-says:** Will look for the .txt file and search Spotify for whatever is in it, and return specific info.
```


## Deployment:

https://github.com/nakrap/liri-node-app


## Built With:
```
Node.js,
NPM,
APIs,
Javascript,
JQuery,
```
