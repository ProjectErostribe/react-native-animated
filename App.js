import React, { useEffect, useRef  } from "react";
import { ScrollView, View, Animated } from "react-native";

export default function App() {
  const [headerShown, setHeaderShown] = useState(false);
  const scrolling = useRef(new Animated.Value(0)).
  current;
  const translation = scrolling.interpolate({
    inputRange: [100, 100],
    outputRange: [-100, 0],
    extrapolate: "clamp"
  });


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
          transform: [{ translateY: translation }],
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
