import React, {memo, useContext, useEffect, useRef, useState} from 'react';
import {KeyboardTypeOptions, StyleSheet} from 'react-native';
import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';
import {ThemeContext} from 'styled-components/native';
import {ContentInput, Row, Scaffold} from './styles';
import {Button, Markdown, TextInput} from '../../components';

/*
  Se for utilizar a props mask,
  necessário utilizar a props callbackValue
  para retornar o valor atual
*/

interface IFormScreenTemplate {
  title: string;
  titleColor?: string;
  disabled?: boolean;
  mask?: TextInputMaskTypeProp;
  optionsMask?: TextInputMaskOptionProp;
  style?: any;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  labelBalance?: boolean;
  submit: (price: string) => void;
  onChangeText?: (price: string) => void;
  callbackValue?: (text: string) => void;
  withoutBackgroundInput?: boolean;
  leftBorder?: boolean;
  disableIconButton?: boolean;
  titleButton?: boolean;
  paddingLeft?: number;
  value?: string;
}

const FormScreenTemplate = ({
  value,
  title,
  titleColor,
  labelBalance,
  placeholder,
  disabled,
  style,
  mask,
  optionsMask,
  submit,
  onChangeText,
  callbackValue,
  keyboardType = 'number-pad',
  titleButton,
  withoutBackgroundInput,
  paddingLeft,
  leftBorder,
}: IFormScreenTemplate) => {
  const {
    color: {blue},
  } = useContext<ITheme>(ThemeContext);
  const [data, setData] = useState('');
  const refForm = useRef<any>(null);
  useEffect(() => {
    data && callbackValue ? callbackValue(data) : undefined;
  }, [data, callbackValue]);

  return (
    <Scaffold style={style}>
      <Markdown value={title} types="h1" color={titleColor ?? 'blue'} />
      <ContentInput>
        <TextInput
          value={value}
          ref={refForm}
          mask={mask}
          withoutBorder
          leftBorder={leftBorder}
          withoutBackgroundInput={withoutBackgroundInput}
          paddingLeft={paddingLeft}
          placeholder={placeholder}
          callbackValue={(text: string) => setData(text)}
          onChangeText={onChangeText ?? undefined}
          keyboardType={keyboardType}
          optionsMask={optionsMask}
          autoFocus
        />
        {labelBalance && (
          <Row>
            <Markdown value="saldo disponível em conta" types="label" />
            <Markdown
              value="R$200,00"
              type="label"
              style={[{color: blue}, styles.labelNumber]}
            />
          </Row>
        )}
      </ContentInput>
      <Button
        text={titleButton ?? 'Próximo'}
        hasIcon={false}
        disabled={disabled}
        variant="secondary"
        textColor="blue"
        onPress={() => submit(data)}
      />
    </Scaffold>
  );
};

export default memo(FormScreenTemplate);

const styles = StyleSheet.create({
  labelNumber: {
    fontSize: 18,
  },
});
