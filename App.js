import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { AppRegistry } from 'react-native';
import { Platform } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title="Hello world!" onPress={(e) => {}}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

if (Platform.OS === 'web') {
  AppRegistry.registerComponent('App', () => App);
  AppRegistry.runApplication('App', {
    initialProps: {},
    rootTag: document.getElementById('root'),
  });
}
