import {Dimensions, PixelRatio, Platform} from 'react-native';
import {isIPhoneX} from './isIphoneX';

const {width, height} = Dimensions.get('window');

const widthMobile = height < width ? height : width;
const heightMobile = width > height ? width : height;

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

const FONT_SCALE_CORRECTION = 0.95;
const SCALE_CORRECTION = 0.9;

export const scaleFont = (size: number) =>
  PixelRatio.roundToNearestPixel(
    Platform.OS === 'ios' && Platform.isPad
      ? size
      : widthMobile >= guidelineBaseWidth
      ? (widthMobile / guidelineBaseWidth) * size * FONT_SCALE_CORRECTION
      : (widthMobile / guidelineBaseWidth) * size,
  );

// Para fonte e margin/padding Horizontais
export const scale = (size: number) => {
  if (Platform.OS === 'ios' && (Platform.isPad || isIPhoneX())) {
    return PixelRatio.roundToNearestPixel(size);
  }
  if (heightMobile >= guidelineBaseHeight) {
    return PixelRatio.roundToNearestPixel(
      (widthMobile / guidelineBaseWidth) * size * SCALE_CORRECTION,
    );
  }
  return PixelRatio.roundToNearestPixel(
    (widthMobile / guidelineBaseWidth) *
      (heightMobile / guidelineBaseHeight) *
      size,
  );
};
