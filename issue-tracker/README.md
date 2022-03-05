# Relay Hooks Example App - GitHub Issues Clone

This is an example app that implements a (partial) clone of GitHub's issue feature. The focus is on demonstrating experimental React and Relay features in the context of a real app, including Concurrent Mode, Suspense, and Relay Hooks, which are fully compatible with Concurrent Mode and Suspense out of the box. Key features include:

* Implementing the "render-as-you-fetch" pattern discussed in our [React Conf 2019 talk](https://youtu.be/JDDxR1a15Yo?t=3647) about Suspense for Data-Fetching as well as the [React Suspense docs](https://reactjs.org/docs/concurrent-mode-suspense.html#approach-3-render-as-you-fetch-using-suspense). During route transitions the app is configured to load the code and data for new routes *in parallel*, rendering whatever is available.
* Using Concurrent Mode and Suspense to improve the loading sequence, including [`useTransition()`](https://reactjs.org/docs/concurrent-mode-reference.html#usetransition) for route transitions in order to continue showing the previous route for a brief period while the next route is prepared/rendered.
* Uses Relay Hooks - `useFragment()` and friends - to colocate data-dependencies of components within the components themselves. 
* Integrates with React Router primitives to allow preloading of code/data: this is currently a custom integration but we're working with the React Router team to implement support for preloading directly in the framework.

## Setup

This app is meant for experimentation; we recommend cloning and running locally, hacking on the source code, trying to change things and see how it affects the user experience.

1. First, clone the app:

        git clone git@github.com:relayjs/relay-examples.git

2. Change into the app's directory:

        cd relay-examples/issue-tracker

3. Install the app's dependencies:

        # npm users:
        npm install

        # yarn users:
        yarn

4. Install [watchman](https://facebook.github.io/watchman/docs/install.html) (file watching service):

        # macOS or Linux via homebrew:
        brew install watchman
        
        # Windows via Chocolatey:
        choco install watchman

5. Get your GitHub authentication token in order to let the app query GitHub's public GraphQL API:
   1. Open https://github.com/settings/tokens.
   2. Ensure that at least the `repo` scope is selected.
   3. Generate the token
   4. Create a file `./relay-examples/issue-tracker/.env.local` and add the following contents (substitute `<TOKEN>` for your authentication token):

          # issue-tracker/.env.local
          REACT_APP_GITHUB_AUTH_TOKEN=<TOKEN>

Now you're ready to run the app!

## Running The App

You can run the app by navigating to `relay-examples/issue-tracker/` and then running the start command:

        # npm users:
        npm start

        # yarn users:
        yarn start

This will start the development server (including Relay Compiler) and open a browser to [localhost:3000](http://localhost:3000).

## About the App

This app uses a number of technologies including (among others):

- [Create React App](https://github.com/facebook/create-react-app): The app has only a few additions to the default Create React App (CRA) setup - note that these all follow the CRA documentation - the app is *not* ejected:
  - The app follows the steps in https://create-react-app.dev/docs/adding-relay/ to use CRA's built-in support for Relay GraphQL queries.
  - The app uses CRA's support for environment variables - https://create-react-app.dev/docs/adding-custom-environment-variables - to allow configuring the GitHub authentication token.
  - The app enables [prettier](https://prettier.io) for code formatting, as discussed in https://create-react-app.dev/docs/setting-up-your-editor#formatting-code-automatically.
  - Note that Create React App itself builds upon many great technologies, see the docs for more details!
- React's [experimental release with Concurrent Mode and Suspense](https://reactjs.org/docs/concurrent-mode-intro.html). 
- Relay's [experimental release with Hooks and Concurrent Mode/Suspense compatibility](https://relay.dev/docs/en/experimental/a-guided-tour-of-relay).
- [React Router](https://github.com/ReactTraining/react-router) does not yet support preloading data for routes (the React Router team is working on this), so the app uses React Router's primitives instead, specifically the [`history` package](https://github.com/ReactTraining/history/) and [`react-router-config` package](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config).

## Available Scripts

The available scripts are primarily those defined by Create React App. In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/concurrent).

To learn Relay, check out the [Relay documentation](https://relay.dev/docs/en/experimental/a-guided-tour-of-relay).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
