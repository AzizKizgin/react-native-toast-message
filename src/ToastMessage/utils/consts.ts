import {Dimensions} from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

export const bottomInitialPosition = SCREEN_HEIGHT / 30 + SCREEN_HEIGHT;
export const bottomFinalPosition =
  SCREEN_HEIGHT / SCREEN_WIDTH > 1.77
    ? SCREEN_HEIGHT / 1.1
    : SCREEN_HEIGHT / 1.2;

export const topFinalPosition = SCREEN_HEIGHT / 30;
export const topInitialPosition = -(SCREEN_HEIGHT / 13);
