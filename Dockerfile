FROM node:9
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
WORKDIR /usr/src/app/data

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
RUN echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.6 main" | tee /etc/apt/sources.list.d/mongodb-org-3.6.list
RUN apt-get update
RUN apt-get install -y mongodb-org
COPY . .
RUN npm install
RUN npm run build

EXPOSE 8080
CMD mongod --dbpath /usr/src/app/data & sleep 10 && npm run server-prod
