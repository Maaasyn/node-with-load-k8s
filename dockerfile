#Base
FROM node:16-alpine3.11 as base
WORKDIR /app
COPY package*.json ./
EXPOSE 3000/tcp

#Developemnt
FROM base as dev
RUN ["npm", "i" ]
ENV NODE_ENV=development
CMD ["npm", "run", "docker-dev"]

#Build
FROM base as build
RUN ["npm", "i"]
COPY . .
RUN ["npm", "run", "build"]

#PREPRODUCTION
FROM base as preproduction
COPY --from=build /app/dist ./dist
COPY .yarnclean ./
COPY yarn.lock ./
ENV NODE_ENV=production
RUN ["npm", "i", "--production"]
RUN ["yarn", "autoclean", "--force"]

# Distroless- Production grade build
FROM gcr.io/distroless/nodejs
WORKDIR /app
COPY --from=preproduction /app/node_modules ./node_modules
COPY --from=preproduction /app/dist ./dist
CMD ["dist/server.js"]

# YARN CREATES BIGGER IMAGE SIZE