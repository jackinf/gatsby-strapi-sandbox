# Strapi with Gatsby

## Description

I've just followed this article - https://blog.strapi.io/building-a-static-website-using-gatsby-and-strapi/.

* `gatsby-site` is Gatsby frontend application. It depends on Strapi (`strapi-site`) in runtime.
* `strapi-site` is Strapi Headless CMS api which serves data to Gatsby.
* `mongo-scripts` contains required scripts to run the initial setup for the MongoDB database.
* `strapi-consumer-example` is just a sandbox which queries `strapi-site` app's REST endpoints

There's also bunch of yaml files meant for `docker compose`. The one which is named `mongo-bitnami-2-docker-compose.yaml` works the best and scripts from `mongo-scripts` are meant for it.

## How to run

### First process: MongoDB

Spin up MongoDB docker instance 
```
docker-compose -f mongo-bitnami-2-docker-compose.yaml up -d
```
...and using some kind of mongodb client, create dummy user by running the script from `mongo-scripts`.

### Second process: Strapi backend

Then install `strapi-cli` and `gatsby-cli` (find doc on their official web pages).
Then go to `strapi-site`.

Install all the plugins (this is tedious):
* `strapi install graphql`
* `strapi install email`
* `strapi install content-type-builder`
* `strapi install graphql`
* `strapi install settings-manager`
* `strapi install upload`
* `strapi install user-permissions`

Then run the app
```
strapi start
```
(It works only in Linux/MacOS or WSL on Windows).
It will use the specific settings from `./config/environments/developemnt/database.json`.

In strapi admin website, create `Post` schema with fields
* title: string
* content: WYSIWYG
* cover: media
* author: User (one user can have many posts)

Give public access rights for reading Posts and Users.
Add at least one Post.

### Third process: Gatsby frontend

Then, in parallel, run `npm i` and `gatsby develop` inside the `gatsby-site` folder. This will spin up the Gatsby frontend.

## Deployment [TODO]

TODO:
* Make a docker-based deployment for `gatsby-site`. The challenge for me is that `gatsby-site` depends on `strapi-site` to be running at the same time in order to build a schema.
* Make a docker-based deployment for `strapi-site`. It depends on the MongoDB.