import {TextStyle} from 'react-native';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export const TOAST_COLORS = {
  success: '#28a745',
  error: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
};

export type IToast = {
  message: string;
  color: RGB | RGBA | HEX | keyof typeof TOAST_COLORS;
  duration?: number;
  textStyle?: TextStyle;
  position?: 'top' | 'bottom';
};

export interface IToastMessage extends IToast {
  shouldShowToast: boolean;
  setShouldShowToast: (showToast: boolean) => void;
}
