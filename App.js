import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';

export default () => {
  const firstOpacity = useRef(
    new Animated.Value(0)
    ).current;

    const secondOpacity = useRef(
      new Animated.Value(0)
      ).current;

      const thirdOpacity = useRef(
        new Animated.Value(0)
        ).current;  

    useEffect(() => { 
      Animated.stagger(100, [
        Animated.timing(firstOpacity, {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(secondOpacity, {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(thirdOpacity, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
    });  
     

  return (
    <View style={styles.container}>
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#B76E79',
        marginBottom: 10,
        opacity: firstOpacity,
        transform: [
          {translateX: translation.x},
          {translateY: translation.y},
        ],
      }}
      />
      <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#B76E79',
        marginBottom: 10,
        opacity: secondOpacity,
        transform: [
          {translateX: translation.x},
          {translateY: translation.y},
        ],
      }}
      />
      <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#B76E79',
        marginBottom: 10,
        opacity: thirdOpacity,
        transform: [
          {translateX: translation.x},
          {translateY: translation.y},
        ],
      }}
      />
    </View>
  )
    }

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});    