#Base
FROM node:16-alpine3.11 as base
WORKDIR /app
COPY package*.json ./
EXPOSE 3000/tcp

#Developemnt
FROM base as dev
RUN ["yarn" ]
ENV NODE_ENV=development
CMD ["yarn", "docker-dev"]

#Build
FROM base as build
RUN npm i
COPY . .
RUN npm run build

#PREPRODUCTION
FROM base as production
COPY --from=build /app/dist ./dist
COPY .yarnclean ./
COPY yarn.lock ./
ENV NODE_ENV=production
RUN npm i --production
RUN yarn autoclean --force

# Distroless
FROM gcr.io/distroless/nodejs
WORKDIR /app
COPY --from=production /app/node_modules ./node_modules
COPY --from=production /app/dist ./dist
CMD ["dist/server.js"]

# YARN CREATES BIGGER IMAGE SIZE
# #Build
# FROM base as build
# RUN yarn install --link-duplicates
# COPY . .
# RUN yarn build

# #Production
# FROM base as production
# COPY --from=build /app/dist ./dist
# COPY .yarnclean ./
# COPY yarn.lock ./
# ENV NODE_ENV=production
# RUN yarn install --production --link-duplicates
# RUN yarn autoclean --force
# CMD ["yarn", "start"]

