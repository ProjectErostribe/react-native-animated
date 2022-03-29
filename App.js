import React, { useState,  } from "react";
import { ScrollView, View,  } from "react-native";

export default function App() {
  const [headerShown, setHeaderShown] = useState(false);


  return (
    <>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: black,
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
