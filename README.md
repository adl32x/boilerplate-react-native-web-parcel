# boilerplate-react-native-web-parcel

Example of how to use react-native-web with Parcel.js

<img src="/docs/screenshot.png" alt="Screenshot"/>

## Installing

`npm install`

## Running

`npm run web`

or for the standard Expo build:

`npm run start`

## Steps to reproduce this repo:

### 1. Run create-react-native-app

Run the standard create-react-native-app.

### 2. Add dependencies

`npm install --save parcel-bundler react-dom react-native-web`

### 3. Add index.html

See the index.html file.

### 4. Configure .babelrc, package.json

See .babelrc. When `NODE_ENV` equals `web` then babel will resolve to react-native-web instead of react-native.

Add npm run script: `"web": "NODE_ENV=web parcel index.html",`

### 5. Add a few lines to App.js

```
...
import { AppRegistry } from 'react-native';
...

if (Platform.OS === 'web') {
  AppRegistry.registerComponent('App', () => App);
  AppRegistry.runApplication('App', {
    initialProps: {},
    rootTag: document.getElementById('root'),
  });
}
```

### 6. Done!

`npm run web`
