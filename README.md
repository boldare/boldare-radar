# Boldare Radar

Code implementation of [Boldare Tech Radar MVP](https://app.mural.co/t/boldare5080/m/boldare5080/1614856271941/8b3cd819b9ab4c8729723d891d9b94319806238b). Radar uses [Docusaurus](https://docusaurus.io/) as a framework for building documentations.

## How to setup the project?

### Requirements

[Node.js](https://nodejs.org/en/) with version `^18.0.0`. If you use [Node Version Manager](https://github.com/nvm-sh/nvm), you can just run a following command:

```bash
nvm use
```

### Setup

Install all dependencies with Yarn

```bash
yarn
```

Run app in development mode

```bash
yarn start
```

## How to build the production version?

Run build command

```bash
yarn build
```

## How to run automated tests?

Run unit tests

```bash
yarn test
```

## How to update the data?

Edit or add new file in `docs` or `blog` folder. You can use [Markdown](https://www.markdownguide.org/) or [Mdx](https://mdxjs.com/) for it. Each file in this folders creates a new page. To find more details, please check the [Docusaurus documentation](https://docusaurus.io/docs). For a new page you can use the template from [here](./data/template.md).
