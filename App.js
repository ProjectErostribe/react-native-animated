import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

export default  App() => {
  const translation = useRef(new Animated.Value(0)).
  current;

    useEffect(() => { 
        Animated.timing(translation, {
          toValue: 100,
          duration: 1000,
          useNativeDriver: false,
        }).start();
    });  
     

  return (
    <View style={styles.container}>
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: '#B76E79',
        transform: [
          {translateX: translation},
          { rotate: translationn.interpolate({
            inputRange: [0, 100],
            outputRange: ['0deg', '360deg']
          }
        ],
        opacity: translation.interpolate({
          inputRange: [0, 50,100],
          outputRange: [0, 1, 0],
      })
      }}
      />
    </View>
      

    const styles = StyleSheet.create({
      container: {
      backgroundColor: "black",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      },
      }); 