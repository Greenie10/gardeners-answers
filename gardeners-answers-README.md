# Gardeners' Answers

### Overview

Using `create-react-app` and Firebase to present the answers given in the radio
programme "Gardeners' Question Time", by searching topic, season, or specific
episode. A companion to the sparse 'GQT Factsheet'.

Inspired by this article on using Firebase and create-react-app
https://www.codementor.io/yurio/all-you-need-is-react-firebase-4v7g9p4kf

* my Firebase console:
  https://console.firebase.google.com/u/0/project/gardeners-answers/overview
* my Gardeners' Answers app: https://gardeners-answers.firebaseapp.com/

### Deployment

* build it with `npm run build`
* upload new version with `firebase deploy`

### Data handling

The questions and answers are initially composed in a csv file, as one line per
question. A php script redefines it into a json file. Weekly updates are
uploaded via the firebase console.

### Firebase config file

You will need to create your own in `/src/fire.js`:

```
import firebase from 'firebase';
var config = {
  apiKey: 'your-api-key',
  authDomain: 'your-app.firebaseapp.com',
  databaseURL: 'https://your-app.firebaseio.com',
  projectId: 'your-app',
  storageBucket: 'your-app.appspot.com',
  messagingSenderId: 'your-messagingSenderId',
};
var fire = firebase.initializeApp(config);
export default fire;
```
