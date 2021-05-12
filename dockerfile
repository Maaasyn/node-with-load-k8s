FROM node:16-alpine3.11 as base
WORKDIR /app
COPY package*.json ./
# Bundle app source
RUN ["yarn"]


FROM base as dev
ENV NODE_ENV=development
EXPOSE 3000/tcp
CMD ["yarn", "docker-dev"]


FROM base as production
COPY . .
ENV NODE_ENV=production
# Exec form, not shell
RUN ["yarn", "build"]
EXPOSE 3000/tcp
CMD [ "yarn", "start" ]


