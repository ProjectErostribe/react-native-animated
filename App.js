import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';

export default () => {
  const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    new Animated.Value(0)
    ).current;

    useEffect(() => { 
      Animated.sequence([
        Animated.spring(translation.x, {
          toValue: -100,
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