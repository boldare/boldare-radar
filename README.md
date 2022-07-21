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

Edit or add new file in `docs` or `blog` folder. You can use [Markdown](https://www.markdownguide.org/) or [Mdx](https://mdxjs.com/) for it. Each file in this folders creates a new page. To find more details, please check the [Docusaurus documentation](https://docusaurus.io/docs). For a new page you can use the template from [here](./docs-template.md).



## How to work with Ampli & Amplitude?

In `Boldare Radar` we are using Amplitude as an Analytics Software. 
With Amplitude we are also testing `Ampli` which is a new tool that allows us to verify if all defined events are used in Application. 

### What is Ampli?

Ampli allows us to generate code to track the events more easily, by using abstraction called [ampli](src/ampli/index.ts), which gives us option to treat all Analytics Events as methods, example:
```ts
ampli.openRadar();
ampli.viewItem({ name: "Microfrontends", quadrant: "Techniques", ring: "Scaling" });
```

### How I can use Ampli?

Ampli is defined as `dev-dependency` in Boldare Radar. You can call the ampli by using methods:
```
ampli pull
```

And to verify if all events tracked in Amplitude are implemented in source code, you can run:
```
ampli status -u
```

### How to run Amplitude on Dev Environment?

In order to run the Amplitude on dev environment you need to create `.env` file in your local repository.
Inside that `.env` file create variable:
```env
REACT_APP_AMPLITUDE_API_KEY = key
```

Replace the `key` with Development key that You can generate from Amplitude or obtain from Maintainers.