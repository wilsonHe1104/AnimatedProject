/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useSprings } from '@react-spring/native';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RNAnimated from './src/RNAnimated.jsx';
// import ReactSpringAnimated from './src/ReactSpringAnimated.jsx';

const App = () => {
  // const [springs, api] = useSprings(
  //   2,
  //   () => ({
  //     from: { opacity: 0 },
  //     to: { opacity: 1 },
  //   }),
  //   [],
  // );

  // { top: 350, left: 190 }

  const [movingBoxs, boxsApi] = useSprings(
    200,
    () => ({
      from: { top: Math.random() * 900, left: Math.random() * 400 },
      to: { top: 350, left: 190 },
      // delay: 2000,
      // loop: true,
      // reverse: true,
      onRest: (result, spring) => {
        if (result.value.top !== 350 && result.value.left !== 190) {
          spring.start({
            to: { top: 350, left: 190 },
            from: { ...result.value },
          });
        } else {
          spring.start({
            to: { top: Math.random() * 900, left: Math.random() * 400 },
            from: { ...result.value },
          });
        }
      },
    }),
    [],
  );

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
