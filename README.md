## Prereqs
  a machine with node >= v10 or a machine with Docker installed
## Getting Started with a machine with Docker

to run project simply run `docker-compose up` from the root of this project.
** my asumption here is that you are runnind Docker for Mac I am not sure if Docker for windows have docker-compose as part of the installation.


## Getting Started with a machine without Docker

install dependencies from the root of the project
run `npm install`

run image
run `npm run build && npm run start`

## Data

if you want to run this application with your own dataset you can do so by replacing streets.json file located at "data/streets.json" and depending on how to running the application you will need to do the following
 - if you are running with docker.. you will have to
	- stock the running containers
	- replace streets.json localted inside src/data
 - if you are NOT running with docker you will have tto
	- kill the application
	- run `npm run build && npm run start`


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
you can past this to  your browser or use postman you must give it a point of reference to find closest street(s)
 `http://localhost:3000/api/street/closest?x=1&y6`
