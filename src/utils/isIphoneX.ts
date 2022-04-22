import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');

const X_HEIGHT = 812;
const X_WIDTH = 375;
const D_HEIGHT = width > height ? width : height;
const D_WIDTH = height < width ? height : width;

const isIPhoneX = () =>
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  D_HEIGHT >= X_HEIGHT &&
  D_WIDTH >= X_WIDTH;

export {isIPhoneX};
