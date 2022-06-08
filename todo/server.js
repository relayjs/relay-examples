// @flow
import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import {persistedQueries} from 'express-graphql-persisted-queries';
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import {schema} from './data/schema';

const APP_PORT: number = 3000;
const QUERY_MAP_FILE: string = path.resolve(
  __dirname,
  '__generated__',
  'queries.json',
);

// Serve the Relay app
// Calling webpack() without a callback as 2nd property returns a Compiler object.
// The libdefs don't like it, but it's fine.  $FlowFixMe https://webpack.js.org/api/node/
const compiler = webpack({
  mode: 'development',
  entry: [
    'whatwg-fetch',
    path.resolve(__dirname, 'js', 'app.js'),
    path.resolve(__dirname, 'js', 'components', 'TodoApp.js'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: '/',
  },
});

const app = new WebpackDevServer(compiler, {
  contentBase: '/public/',
  publicPath: '/js/',
  stats: {colors: true},
});

// Serve static resources
app.use('/', express.static(path.resolve(__dirname, 'public')));

// Setup GraphQL endpoint
const queryMap = JSON.parse(fs.readFileSync(QUERY_MAP_FILE, 'utf8'));
app.use(
  '/graphql',
  persistedQueries({queryMap}),
  graphqlHTTP({
    schema: schema,
    pretty: true,
  }),
);

app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`);
});
