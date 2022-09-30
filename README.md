# React Native, Commercetools, and Contentful demo

## Stack

This demo project uses:
- [React Native](https://reactnative.dev/) and [React Native for Web](https://necolas.github.io/react-native-web/) to build the app
- [Commercetools](https://commercetools.com/) to manage products
- [Contentful](https://www.contentful.com/) to manage blog posts
- [TwicPics React Native Components](https://npmjs.com/package/@twicpics/components-react-native) to optimize images on-demand

## Development setup

This project runs on Node 16.15.0. We recommend using [NVM](https://github.com/nvm-sh/nvm) to easily switch Node versions.

Installation:

```sh
yarn
```

Running in local:

```sh
# Run for web
yarn web
```

Copy `.env.example` as `.env` and update the values using your credentials from TwicPics, Commercetools, and Contentful.

## Configuration & Data seeding

To make this demo work, go through the following steps. You will need to go through some configuration.

### Commercetools

This project uses Commercetools' [SUNRISE sample data](https://docs.commercetools.com/sdk/sunrise-data). Follow the tutorial to seed the data.

### Contentful

Create a `blogPost` content type that has the following fields: `title` (text), `coverImage` (image), and `excerpt` (text). Then, create some blog posts.

### TwicPics

- Create a path mapping your Commercetools images storage, eg. `https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/`
- Create a path mapping your Contentful images storage, eg. `https://images.ctfassets.net/<spaceID>/`
