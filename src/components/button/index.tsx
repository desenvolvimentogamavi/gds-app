/* eslint-disable react-native/no-inline-styles */
import React, {memo, useContext} from 'react';
import {
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  ActivityIndicator,
} from 'react-native';
import {ThemeContext} from 'styled-components/native';
import {Item, Touchable, ContentLoading, Text} from './styles';

interface IButton extends TouchableNativeFeedbackProps {
  text: string;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  checkIcon?: boolean;
  disabled?: boolean;
  hasIcon?: boolean;
  withoutBorder?: boolean;
  textColor?: 'orange' | 'gray' | 'blue' | 'black' | 'white';
}

const Button = ({
  text,
  loading,
  variant,
  disabled,
  withoutBorder,
  textColor,
  ...rest
}: IButton) => {
  const {
    color: {orange, white},
  } = useContext<ITheme>(ThemeContext);

  return (
    <Touchable
      disabled={disabled}
      background={TouchableNativeFeedback.Ripple('#CCD5DE', false)}
      {...rest}>
      <Item withoutBorder={withoutBorder} variant={variant} disabled={disabled}>
        {loading ? (
          <ContentLoading>
            <ActivityIndicator size="small" color={white} />
          </ContentLoading>
        ) : (
          <Text textColor={textColor} disabled={disabled} variant={variant}>
            {text}
          </Text>
        )}
      </Item>
    </Touchable>
  );
};

export default memo(Button);
