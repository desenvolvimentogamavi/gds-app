import {DefaultTheme} from 'styled-components/native';
import {scale} from '../utils/scale';

export const GdsTheme: DefaultTheme & ITheme = {
  color: {
    gray: '#C4C4C4',
    orange: '#FB7C35',
    blue: '#2075D8',
    white: '#FFFFFF',
    black: '#000000',
  },
  fonts: {
    h1: {
      fontFamily: 'DMSans-Medium',
      fontSize: 32,
      color: 'white',
    },
    h2: {
      fontFamily: 'Roboto-Bold',
      fontSize: 32,
      color: 'black',
    },
    h3: {
      fontFamily: 'Roboto-Medium',
      fontSize: 18,
      color: 'black',
    },
    h4: {
      fontSize: 20,
      color: 'black',
    },
    p: {
      fontFamily: 'Roboto-Medium',
      fontSize: 16,
      color: 'black',
    },
    pBold: {
      fontSize: 18,
      color: 'black',
      fontWeight: '600',
    },
  },
  spaces: {
    x00: scale(2),
    x0: scale(4),
    x1: scale(8),
    x2: scale(17),
    x3: scale(24),
    x4: scale(32),
    x5: scale(40),
    x6: scale(48),
    x7: scale(56),
    x8: scale(64),
    x9: scale(72),
    x10: scale(80),
    x11: scale(88),
    x12: scale(96),
    x13: scale(104),
    x14: scale(112),
    x15: scale(120),
    x16: scale(128),
    x17: scale(136),
    x18: scale(144),
    x19: scale(152),
    x20: scale(160),
    x25: scale(225),
    x30: scale(240),
    x35: scale(280),
    x40: scale(320),
    x50: scale(400),
    x60: scale(480),
  },
};

export type fontTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'pBold';

export type colorTypes = 'grey' | 'orange' | 'blue' | 'black' | 'white';
