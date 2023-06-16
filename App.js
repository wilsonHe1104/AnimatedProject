/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { animated, useSpring, useSprings } from '@react-spring/native';
import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  Animated,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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

  const position = useRef(
    Array(200)
      .fill(0)
      .map(
        () =>
          new Animated.ValueXY({
            x: Math.random() * 400 - 200,
            y: Math.random() * 900 - 450,
          }),
      ),
  ).current;
  // const topAnim = useRef(new Animated.Value(0)).current;
  // const leftAnim = useRef(new Animated.Value(0)).current;

  // const movingTo = () => {
  //   position.forEach((p) => {
  //     Animated.timing(
  //       p, // Auto-multiplexed
  //       { toValue: { x: 0, y: 0 }, useNativeDriver: true }, // Back to zero
  //     ).start(({ finished }) => {
  //       if (finished) {
  //         movingOut();
  //       }
  //     });
  //   });
  // };

  // const movingOut = () => {
  //   position.forEach((p) => {
  //     Animated.timing(
  //       p, // Auto-multiplexed
  //       {
  //         toValue: {
  //           x: Math.random() * 400 - 200,
  //           y: Math.random() * 900 - 450,
  //         },
  //         useNativeDriver: true,
  //       }, // Back to zero
  //     ).start(({ finished }) => {
  //       if (finished) {
  //         movingTo();
  //       }
  //     });
  //   });
  // };

  // const fadeOut = () => {
  //   // Will change fadeAnim value to 0 in 3 seconds
  //   Animated.timing(fadeAnim, {
  //     toValue: 0,
  //     duration: 2000,
  //     useNativeDriver: true,
  //   }).start();
  // };

  return (
    <SafeAreaView style={styles.container}>
      {/* {position.map((p, index) => (
        <Animated.View
          key={index}
          style={[
            { transform: [{ translateX: p.x }, { translateY: p.y }] },
            styles.springBox,
          ]}
        />
      ))}

      <View style={styles.buttonRow}>
        <Button title="Moving To" onPress={movingTo} />
        <Button title="Moving Out" onPress={movingOut} />
      </View> */}

      {movingBoxs.map((props) => (
        <animated.View
          style={{
            ...props,
            ...styles.springBox,
          }}
        />
      ))}
      <View style={styles.buttonRow}>
        <Button
          title="Resume"
          onPress={() => {
            boxsApi.resume();
          }}
        />
        <Button
          title="Stop"
          onPress={() => {
            boxsApi.pause();
          }}
        />
      </View>
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
