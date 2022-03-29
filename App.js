import React, { useEffect, useState, useRef  } from "react";
import { ScrollView, View, Animated } from "react-native";

export default function App() {
  const [headerShown, setHeaderShown] = useState(false);
  cont translation = useRef(new Animated.Value(-100)).
  current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? 0 : -100,
      duration: 250,
      useNativeDriver: true,
      }).start();
  }, [headerShown]);

  return (
    <>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: grey,
          transform: [{ translateY: headerShown ? 0 :
             -100 }],
          }}
      />

      <ScrollView
        onScroll={(event) => {
          const scrolling = event.nativeEvent.
          contentOffset.y;

          if (scrolling > 100) {
            setHeaderShown(true);
          } else {
            setHeaderShown(false);
          }
    </>
}
