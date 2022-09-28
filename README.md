# React Native, Commercetools, and Contentful demo

## Development setup

This project runs on Node 16.15.0.

Installation

```sh
yarn
```

Running in local

```sh
# Run for web
yarn web
```

Copy `.env.example` as `.env` and update the values using your credentials from TwicPics, Commercetools, and Contentful.

## Data seeding

To make this demo work, go through the following steps. You will need to go through some configuration.

- **TwicPics**: 
- **Commercetools**: this project uses Commercetools' [SUNRISE sample data](https://docs.commercetools.com/sdk/sunrise-data)
- **Contentful**: Create a `blogPost` content type that has the following fields: `title` (text), `coverImage` (image), and `excerpt` (text); then, create some blog posts.
- 

Avantage de TwicPics :
- Facilité de gérer les images sans avoir à gérer la hauteur
- Contrairement à React Native qui recommande de set la hauteur pour éviter le CLS
- Il est possible de set la hauteur s'ils le veulent (dans ce cas, il ne faut pas mettre de ratio, eg. `ratio="none"`)
- avec TwicPics, l'aspect ratio suffit

