/** @format */

import { Animated, StyleSheet, Text } from "react-native";
import React, { FC, memo, useEffect, useRef } from "react";
import { IToastMessage } from "./types";
import { topFinalPosition, topInitialPosition } from "./utils/consts";
import { getToastColor } from "./utils/helper";

const TopToastMessage: FC<IToastMessage> = (props) => {
  const {
    message,
    color,
    duration,
    textStyle,
    setShouldShowToast,
    shouldShowToast,
  } = props;

  const bgColor = getToastColor(color);
  const translateY = useRef(new Animated.Value(topInitialPosition)).current;

  const animateFromTop = () => {
    Animated.timing(translateY, {
      toValue: topFinalPosition,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(translateY, {
          toValue: topInitialPosition,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          setShouldShowToast(false);
        });
      }, duration);
    });
  };

  useEffect(() => {
    if (shouldShowToast) {
      animateFromTop();
    }
  }, [shouldShowToast]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
        },
        {
          transform: [{ translateY }],
        },
      ]}
    >
      <Text style={[styles.text, textStyle]}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "85%",
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "absolute",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default memo(TopToastMessage);
