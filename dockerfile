FROM node:16-alpine3.11 as PRODUCTION
WORKDIR /app
COPY package*.json ./

RUN ["yarn"]
# Bundle app source
COPY . .

# Exec form, not shell
RUN ["yarn", "build"]

EXPOSE 3000/tcp
CMD [ "yarn", "start" ]


