server files : 
```
- server/config.js
- server/helpers.js
- index.js
```

===================================================================

** index.js file **
-------------------

- since our app uses angularjs framework all the routing happens in the front end .. that means we only have post requests to receive and deal with ..
- using __ express.static __ means the server by default will response with the main page **index.html** to any get request at the root '/' ....
- the line __ res.setHeader('Access-Control-Allow-Origin', '* '); __ is written to allow all the cross origin requests .. so using localhost or 127.0.0.1 or heroku will not effect the server work ... 

any post request at '/' is a request with with the main 3 criteria as an object .. use helpers function **helpers.findCities** to get top 10 cities and send them back to the client  ... __ all helpers functions are async so they all will receive a callback to give it the value when the task is done __ ....


===================================================================

** server/helpers.js file **
-----------------------------

-(fetcher) function to work once on each computer => get all data from json.txt file and add them to the db __fixed data__

- (API) function is responsable for requesting data from openweathermap api and it's called from the database __index.js__ file 

- (findCities) function to get all cities from the db and calculate thier marks => finally send top 10 to the call back at index.js file (main server file) ..

- (findDBinfo) to get securityMark , costMark .
- (findLocation) to get name , longitude , latitude , weatherMark  .
- (findPlaceId) to get array of IDs of hotels in that city => maps.googleapis.com
- (findHotel) to get hotels info depending on IDs array => maps.googleapis.com
- (findDescrption) to get description for the city from api => wikipedia
- (findImages) to get array of images from flicker ...

===================================================================