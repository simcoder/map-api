FROM node:12-alpine
# Create app directory
WORKDIR /usr/src/app


COPY . .

# Install app dependencies and build app
RUN npm install && \
    npm run test && \
    npm run build

EXPOSE 3000

CMD npm run start