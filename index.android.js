import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import * as firebase from 'firebase';

var firebaseConfig = {
    databaseURL: "https://react-native-test-b73c2.firebaseio.com"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class ReactNativeStarterApp extends Component {

  constructor() {
    super();
    console.log('In constructor');
    firebaseApp.database().ref().set({
      name : 'ReactNativeStarterApp'
    });


    firebase.database().ref().on('value', (snapshot) => {
      console.log(snapshot.val());
    });
  }

  render() {
    console.log('In render');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello ReactNativeStarterApp user
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('ReactNativeStarterApp', () => ReactNativeStarterApp);
