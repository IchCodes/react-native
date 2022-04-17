import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Search from './components/Search';
import Navigation from './Navigation/Navigation';

export default class App extends React.Component {
  render(){
    return (
    <Navigation/>
  )
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
