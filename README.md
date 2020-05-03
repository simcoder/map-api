## Pre-requisites
  a machine with node >= 10 OR a machine with Docker installed 
## Getting Started with a machine with Docker

to run project simply paste the following in the terminal `docker-compose up` from the root of this project.


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
