# Operations Application - React

This project is based on NextJs - "a minimalistic framework for server-rendered React applications". Out of the box it includes css support, webpack transpilation and bundling, hot code reloading, static files serving and server side rendered pages.

You can find more about it in detail in [Github](https://github.com/zeit/next.js/) and it is widely supported in the react community.

## Setup

In the project root run `yarn install` - install yarn [here](https://yarnpkg.com/en/)

run `yarn dev` and you should see the app running on `http://localhost:3000`

## Building pages

In the folder `./pages` you can create `.js` files and the server will render these as new pages, the url maps to the name of the file - but this can be overriden as well (check NextJs docs for this or ping someone on the team about this).

## Styles

- Styled-Components

For styling we use a css in js library called [_Styled-Components_](https://www.styled-components.com/) - it's very simple but yet powerful. You can do everything you can do with css and more - for example, running functions inside css declarations (kinda like mixins in Sass), theming, etc. Very easy to pick up and also widely supported.

- Cot-Experience

This is our internal component library that we use to build UIs. It is comprised of components that are common across our applications and follows our design language - mostly influenced by Google's Material Design.

You can find more about it or to raise issues at [Github](https://github.com/CapitalOnTap/COTE)

You can browse the component library [here](https://pedantic-allen-53a8aa.netlify.com/)

## Static files - images, css, etc

You can create at the roote level a `static` folder and add reference to files like `/static/images/myimage.jpeg` for example. See more [here](https://github.com/zeit/next.js/#static-file-serving-eg-images)

# Mock-APi

This is not ready yet - work in progress
