# React Native, Commercetools, and Contentful demo

## 📦 Stack

This demo project uses:
- [React Native](https://reactnative.dev/) and [React Native for Web](https://necolas.github.io/react-native-web/) to build the app
- [Commercetools](https://commercetools.com/) to manage products
- [Contentful](https://www.contentful.com/) to manage blog posts
- [TwicPics React Native Components](https://npmjs.com/package/@twicpics/components-react-native) to optimize images on-demand

## 🧑‍💻 Development setup

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

> Complete the steps in the “Configuration & Data seeding” section to get the environment values needed to make the run the app in local.

## ⚙️ Configuration & Data seeding

To make this demo work, go through the following steps. You will need to go through some configuration.

### Commercetools

This project uses Commercetools' [SUNRISE sample data](https://docs.commercetools.com/sdk/sunrise-data). Follow the tutorial to seed the data.

> You'll get all the `CTP_*` env variables when creating an API client. Credentials will only be shown once.

### Contentful

Create a `blogPost` content type that has the following fields: `title` (text), `coverImage` (image), and `excerpt` (text). Then, create some blog posts.

> Create content delivery token to get the `CONTENTFUL_ACCESS_TOKEN`. Your `CONTENTFUL_SPACE_ID` can be found in the back-office URL.

### TwicPics

- Create a path mapping your Commercetools images storage, eg. `https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/`
- Create a path mapping your Contentful images storage, eg. `https://images.ctfassets.net/<spaceID>/`

> In the code, you can see how URLs retrieved from both APIs are mapped to TwicPics CDN here: [for Commercetools](https://github.com/TwicPics/react-native-commercetools-contentful-demo/blob/62b16ab3292b8f769d20ca74323a94c3cf36cdfc/components/ProductList.jsx#L25-L30) and [for Contentful](https://github.com/TwicPics/react-native-commercetools-contentful-demo/blob/62b16ab3292b8f769d20ca74323a94c3cf36cdfc/components/BlogPostList.jsx#L27-L32).
