## Pre-requisites
  a machine with node >= 10 OR a machine with Docker installed
## Getting Started with a machine with Docker

to run project simply paste the following in the terminal `docker-compose up` from the root of this project.


** I've only tested this with Docker for Mac.. I beleive Docker for Windows as long as docker compose is included as part of the installation.


## Getting Started with a machine without Docker

install dependencies from the root of the project
paste the following in the terminal from the project root  `npm install`

run application
paste the following in the terminal from the root of the project `npm run build && npm run start`

## Data

if you want to run this application with your own dataset you can do so by replacing streets.json file located at "data/streets.json" and depending on how to running the application you will need to do the following
 - if you are running with docker.. you will have to
	- if youre application container is running, stop the running container
	- replace streets.json located inside src/data
	- run `docker-compose up` from the root of the project
 - if you are NOT running with docker you will have to
	- kill the application
	- run this from your terminal `npm run build && npm run start` from the root of the project


## Avaliable endpoints

- gettings all streets 
 paste this in your brower or if you use post man use a GET call `http://localhost:3000/api/street`

 - adding a street
 you can use something like postman to  POST at `http://localhost:3000/api/street`
 with the following body`
 {
	"name":"my awesome street",
	"start":{
		"x":-6,
		"y": -8
	},
	"end":{
		"x":2,
		"y":3
	}
}
 `

 - finding closest street(s)
you can paste this to  your browser or use postman you must give it a point of reference to find closest street(s)
 `http://localhost:3000/api/street/closest?x=1&y6`
