# build stage
FROM node:17.3
WORKDIR /usr/src/app
COPY package*.json ./
RUN apt-get update
RUN apt-get -qq -y install python
RUN yarn install
COPY . .
EXPOSE 3000
CMD yarn start
