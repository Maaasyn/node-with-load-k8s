FROM node:16-alpine3.11 as PRODUCTION
WORKDIR /app
COPY package*.json ./

RUN yarn
# Bundle app source
COPY . .

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]


