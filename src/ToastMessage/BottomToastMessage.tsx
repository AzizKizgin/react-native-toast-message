/** @format */

import { Animated, StyleSheet, Text } from "react-native";
import React, { FC, memo, useEffect, useRef } from "react";
import { IToastMessage } from "./types";
import { bottomFinalPosition, bottomInitialPosition } from "./utils/consts";
import { getToastColor } from "./utils/helper";

const BottomToastMessage: FC<IToastMessage> = (props) => {
  const {
    message,
    color,
    duration,
    textStyle,
    setShouldShowToast,
    shouldShowToast,
  } = props;

  const bgColor = getToastColor(color);
  const translateY = useRef(new Animated.Value(bottomInitialPosition)).current;

  const animateFromBottom = () => {
    Animated.timing(translateY, {
      toValue: bottomFinalPosition,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(translateY, {
          toValue: bottomInitialPosition,
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
      animateFromBottom();
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
          transform: [
            {
              translateY,
            },
          ],
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

export default memo(BottomToastMessage);
