import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

export default () => {
  const translation = useRef(
    new Animated.Value(0)
    ).current;

    useEffect(() => { 
      Animated.timing(translation, { 
        toValue: 50, 
        useNativeDriver: true,
      }).start(); 
    }, []); 


  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#B76E79',
        transform: [{translateX: translation}]
      }}
      />
  )
    };