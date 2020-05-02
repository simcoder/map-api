FROM node:12-alpine
# Create app directory
WORKDIR /usr/src/app


COPY package*.json ./

# Install app dependencies
RUN npm install && npm run build

#Copy compiles artifacts
COPY ./dist ./dist

EXPOSE 3000

CMD npm run start