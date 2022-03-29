import React, { useEffect, useState, useRef  } from "react";
import { ScrollView, View, Animated } from "react-native";

export default function App() {
  const [headerShown, setHeaderShown] = useState(false);
  const scrolling = useRef(new Animated.Value(0)).
  current;
  const translation = useRef(new Animated.Value(-100)).
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

      <Animated.ScrollView
        onScroll={Animated.event([
          { 
            nativeEvent: { 
              contentOffset: { 
                y: scrolling, 
              },
             },
             },
             { useNativeDriver: true, }
            ])}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, height: 1000 }}/>
    </Animated.ScrollView>
    </>
  );
}
