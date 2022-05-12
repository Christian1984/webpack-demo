This is a demo project to learn about manually setting up a webpack project from scratch. It follow the tutorial found at https://ideas.byteridge.com/webpack-bundle-your-frontend-apps/

# Installation

Init a new npm package, then run `npm i webpack webpack-cli --save-dev`.

# Zero Config

Run webpack without any configuration by simply running `npx webpack`.

# Own Base Config

Create a custom config file webpack.config.js, then run `npx webpack --config=webpack.config.js`.

Add a build script to `package.json` (see file)

# Notes

- When having multiple html files with multiple entry points, refer to this: https://stackoverflow.com/a/63385300/1934396
- Webpack has a watch mode: https://webpack.js.org/configuration/watch/

# Try

- build without production source map
- obfuscate js