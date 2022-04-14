# Alright REACT APP

Professional React app generator. Shipped with an exposed, unopinionated, highly-performant config.
Jest-SWC, Storybook, SWC, Typescript, Webpack 5.

<img width="528" alt="alright-react-app-in-terminal" src="https://user-images.githubusercontent.com/43271780/163279998-4761f850-3483-4cd8-bdc8-703e8d7d1e78.png">

# GETTING STARTED

In your terminal, type:

```js
npx alright-react-app
```

The `npx` command is available if `npm` is globally isntalled on your computer.
**Alright Create App** will ask you to enter an app name. Then, you only have to press enter.

The following folder will be created at the root of your current working directory:

```
my-app
├── webpack.config.js
├── tsconfig.json
├── README.md
├── package.json
├── jest.swc.config.js
├── custom.d.ts
├── .swcrc
├── .gitignore
├── .eslintrc.js
├── .eslintignore
├── .env
└── src
    ├── index.tsx
    ├── index.html
    ├── app.tsx
    ├── app.test.ts
    └── pages
        └── home
            ├── index.tsx
            ├── home.css
    └── components
        └── error-boundary
            ├── index.tsx
            ├── layout.tsx
        └── title
            ├── index.tsx
            ├── stories.tsx
     └── assets
        └── images
            ├── favicon.png
        └── svg
            ├── logo.svg
└── .storybook
    ├── main.js
    ├── preview.js

```

Once the app is created, type:

```js
cd my-app && npm install
```

# COMMANDS

**START**: npm/yarn dev

**BUILD**: npm/yarn build

**STORYBOOK**: npm/yarn storybook

**TEST**: npm/yarn test

## CREDITS

DoneDeal0
