import React, { useRef, useState } from "react";
import { View, PanResponder, Animated, Dimensions, StyleSheet } from "react-native";

const CustomBar = () => {
  const screenWidth = Dimensions.get("window").width;
  const barWidth = screenWidth * 0.9;
  const [progress, setProgress] = useState(0.5);

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        let newX = gestureState.dx + progress * barWidth;
        newX = Math.max(0, Math.min(newX, barWidth));
        pan.setValue({ x: newX, y: 0 });
      },
      onPanResponderRelease: (e, gestureState) => {
        let newProgress = (gestureState.dx + progress * barWidth) / barWidth;
        newProgress = Math.max(0, Math.min(newProgress, 1));
        setProgress(newProgress);
      },
    })
  ).current;

  return (
    <View style={[styles.barContainer, { width: barWidth }]}>
      <View style={[styles.barProgress, { width: progress * barWidth }]} />
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.barThumb,
          { left: progress * barWidth - 150 },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    height: 4,
    borderWidth: 1,
    borderColor: "#FFFFFF59",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  barProgress: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 10,
  },
  barThumb: {
    position: "absolute",
    width: 3,
    height: 4,
    backgroundColor: "black",
    borderRadius: 15,
  },
});

export default CustomBar;
