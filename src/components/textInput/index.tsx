import React, {
  forwardRef,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import {Container, Content, Input, InputWithMask, Label} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ThemeContext} from 'styled-components/native';
import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';

interface ITextInputProps extends TextInputProps {
  withoutBorder?: boolean;
  withoutBackgroundInput?: boolean;
  paddingLeft?: number;
  lockButton?: boolean;
  label?: string;
  positionLabel?: 'top' | 'bottom';
  leftBorder?: boolean;
  insideLabel?: ReactNode;
  callbackValue?: (text: string) => void;
  optionsMask?: TextInputMaskOptionProp;
  mask?: TextInputMaskTypeProp;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const TextInput = (
  {
    withoutBorder,
    withoutBackgroundInput,
    label,
    insideLabel,
    lockButton,
    positionLabel,
    paddingLeft,
    leftBorder = false,
    callbackValue,
    mask,
    optionsMask,
    defaultValue,
    ...rest
  }: ITextInputProps,
  ref: any,
) => {
  const inputElementRef = useRef<any>();
  const [secure, setSecure] = useState(rest.secureTextEntry ?? false);
  const [focused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const {
    spaces: {x2, x3},
    color: {blue, gray},
  } = useContext<ITheme>(ThemeContext);

  const handleSetSecure = useCallback(() => {
    setSecure(!secure);
  }, [secure]);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
    clear() {
      inputElementRef.current.clear();
    },
    isValid() {
      inputElementRef.current.isValid();
    },
  }));

  useEffect(() => {
    value && callbackValue ? callbackValue(value) : undefined;
  }, [value, callbackValue]);

  return (
    <Container>
      {label && positionLabel === 'top' && (
        <Label removeMarginLabelTop onFocus={focused} children={label} />
      )}
      <Content
        onFocus={focused}
        withoutBackgroundInput={withoutBackgroundInput}
        paddingLeft={paddingLeft ?? x2}
        withoutBorder={!!withoutBorder}>
        {mask ? (
          <InputWithMask
            ref={inputElementRef}
            {...rest}
            type={mask}
            options={optionsMask}
            leftBorder={leftBorder}
            placeholderTextColor={focused ? blue : gray}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={value}
            onChangeText={text => setValue(text)}
            editable
            secureTextEntry={secure}
          />
        ) : (
          <Input
            ref={inputElementRef}
            {...rest}
            autoFocus
            value={defaultValue}
            leftBorder={leftBorder}
            placeholderTextColor={focused ? blue : gray}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            editable
            secureTextEntry={secure}
          />
        )}
        {insideLabel}
        {!insideLabel && lockButton && (
          <TouchableOpacity onPress={handleSetSecure}>
            <Icon
              name={!secure ? 'eye' : 'eye-slash'}
              size={x2}
              color={focused ? blue : undefined}
            />
          </TouchableOpacity>
        )}
      </Content>
      {label && (positionLabel === 'bottom' || !positionLabel) && (
        <Label onFocus={focused} children={label} />
      )}
    </Container>
  );
};

export default forwardRef(TextInput);
