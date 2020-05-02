## Prereqs
  a machine with node >= v10 or a machine with Docker installed
## Getting Started with a machine with Docker

build image
run `docker build -t map-api .`

run image
run `docker run -p 3000:3000 map-api`

## Getting Started with a machine without Docker

install dependencies
run `npm install`

run image
run `npm run build && npm run start`

## Data

if you want to run this application with your own dataset you can do so by replacing streets.json file located at "data/streets.json"


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