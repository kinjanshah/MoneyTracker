import React, { Component } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, KeyboardAvoidingView} from 'react-native';
import Router from './components/Router/Router';
var DismissKeyboard = require('dismissKeyboard');

export default class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.mainContainer} behavior="padding">
        <TouchableWithoutFeedback onPress={ () => { DismissKeyboard() } }>
          <View style={styles.container}>
            <Router></Router>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  mainContainer: {
    backgroundColor:'#3498db',
    flex:1
  },
});
