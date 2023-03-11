/** @format */

import { TOAST_COLORS } from "../types";

export const getToastColor = (color: string) => {
  if (color.startsWith("rgb") || color.startsWith("rgba")) {
    return color;
  }
  if (color.startsWith("#")) {
    return color;
  }
  switch (color) {
    case "success":
      return TOAST_COLORS.success;
    case "error":
      return TOAST_COLORS.error;
    case "warning":
      return TOAST_COLORS.warning;
    case "info":
      return TOAST_COLORS.info;
    default:
      return TOAST_COLORS.info;
  }
};
