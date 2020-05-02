FROM node:12-alpine
# Create app directory
WORKDIR /usr/src/app


COPY . .

# Install app dependencies
RUN npm install 
RUN npm run build

#Copy compiles artifacts
COPY ./dist .

EXPOSE 3000

CMD npm run start