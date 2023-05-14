# Vue3 demo project

I created this project in order to recall my knowledge of `HTML`, `CSS` and `JS`/`TS` and to learn about `Vue3` and related tech stack like `vue-router`, `Pinia` or `i18n`.

## Project Setup

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

## Application Demo

The purpose of the app wasn't to solve any business problem but just to play with the technology, the app doesn't request data from the API but uses mock data.

The application displays the recipes and gives the option of adding them to favourites or displaying the details on the right-hand drawer. In the favourites page, it is possible to display recipes that have already been added to favourites.
The side menu with navigation can be opened or hidden. It is possible to change the language of the application to English or Polish.

## GIF:

![](https://github.com/kingus/Vue3-Demo-Project/blob/main/readme_assets/vue-app-demo.gif)

## A few words about the tech stack used

The `Vue3` application was generated with `TypeScript`. I chose the `Composition API` to define components. I used `vue-router` to navigate through the `SPA` and created the `MainLayout.vue` and used `<RouterView />` to display pages in it. I used `Pinia` to create stores that support the sidemenu state and contain information about favourite recipes.

![](https://github.com/kingus/Vue3-Demo-Project/blob/main/readme_assets/pinia-state.png)

To provide internationalisation of the application I used `i18n`, in which I added locales for English and Polish. Languages can be changed on the fly in the top right corner of the application via custom select component.

I created a couple of custom components in which I defined props and events. Where appropriate, I used the `v-model` to simplify the use of the component.









