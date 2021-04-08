FROM node:15.5.0-alpine3.10
WORKDIR /app
COPY package*.json ./

RUN yarn
# Bundle app source
COPY . .

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]


