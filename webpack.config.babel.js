import path from 'path';
import info from './package.json';


export default () => {

  let project_entry_array = info.main.split('/');

  const
    PROJECT_NAME = info.name,
    PROJECT_AUTHOR = info.author,
    PROJECT_FOLDER = project_entry_array.shift(),
    PROJECT_ENTRY = `./${project_entry_array.join('/')}`;

  return {
    context: path.resolve(__dirname, PROJECT_FOLDER),
    entry: {
      app: PROJECT_ENTRY,
    },
    output: {
      path: path.resolve(__dirname, "build"),
      publicPath: '/assets/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
          test: /\.jsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
          test: /\.js$/,
          loader: "eslint-loader",
          exclude: /node_modules/
        }
      ]
    }
  }
}
