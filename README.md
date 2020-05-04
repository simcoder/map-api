## Pre-requisites
  A machine with NodeJS >= 10 OR a machine with Docker installed 
## Getting Started with a machine with Docker

To run project simply paste the following in the terminal `docker-compose up` from the root of this project.


## Getting Started with a machine without Docker
   - Install dependencies by pasting the following into your terminal from the root of the project  `npm install`

   - To run the application simply paste the following into your terminal `npm run build && npm run start`

## Data

If you want to run this application with your own dataset you can do so by replacing streets.json file located at "data/streets.json" and depending on how to running the application you will need to do the following
 - If you are running with docker.. you will have to
	- If the application container is running, stop the running container
	- Replace streets.json located inside src/data
	- Run the following from the terminal `docker-compose up` from the root of the project
 - If you are NOT running with docker you will have to
	- kill the application
	- paste the following into your terminal `npm run build && npm run start` from the root of the project


## Avaliable endpoints

- GET (get all streets)endpoint at `http://localhost:3000/api/street`

- POST (add a street) endpoint at `http://localhost:3000/api/street` 
   with the following body`
 `{
	"name":"my awesome street",
	"start":{
		"x":-6,
		"y": -8
	},
	"end":{
		"x":2,
		"y":3
	}
   }`

- GET (finding closest street(s)) endpoint at `http://localhost:3000/api/street/closest` with the required query parameters
	- x (x coordinate)
	- y (y coordinate)
	
	
sample query below


 `http://localhost:3000/api/street/closest?x=1&y6`
 
 
 ## Test
 
 
 To run tests in your local machines simply paste the following in your terminal `npm run test`
 To run tests in docker you will need to build a new image.. by running in your terminal `docker-compose up`
