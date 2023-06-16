/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RNAnimated from './src/RNAnimated.jsx';
// import ReactSpringAnimated from './src/ReactSpringAnimated.jsx';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RNAnimated />
      {/* <ReactSpringAnimated /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  box: {
    width: 10,
    height: 10,
    backgroundColor: 'black',
  },
  springBox: {
    position: 'absolute',
    backgroundColor: 'black',
    height: 20,
    width: 20,
    borderRadius: 8,
  },
});

export default App;
