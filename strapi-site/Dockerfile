# stage 1 - building the app
FROM node:10 as build-deps
WORKDIR /usr/src/app
COPY package.json package-lock.lock ./
RUN npm install
COPY . ./
RUN npm run setup

# Stage 2 - the production environment
FROM nginx:1.9.15-alpine
WORKDIR /usr/src/app
COPY --from=build-deps /usr/src/app/build /usr/src/app
EXPOSE 1337
CMD ["NODE_ENV=production", "npm", "start"]