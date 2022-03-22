import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { useEffec, useRef } from 'react';

export default () => {
  const translation = useRef(
    new Animated.Value(0)
    ).current;

    useEffec(() => {
      for (let i = 0; i < 50; i++) {
        setTimeout(() => {
          translation.setValue(i);
        }, 25 * i);
      }
    }, []);


  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        transform: [{translateX: translation}],
      }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
