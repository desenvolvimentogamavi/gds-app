import React from 'react';
import {memo, useContext} from 'react';
import {Text, TextProps} from 'react-native';
import {ThemeContext} from 'styled-components/native';

interface IMarkdownProps extends TextProps {
  value: string | Element | null;
  types?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'pBold';
  color?: 'gray' | 'black' | 'white' | 'blue' | 'orange';
  sizeTheme?: number;
  textCenter?: boolean;
}

const Markdown = ({
  value,
  children,
  color,
  types,
  sizeTheme,
  textCenter,
  style,
  ...rest
}: IMarkdownProps) => {
  const {fonts, color: colorContext} = useContext<ITheme>(ThemeContext);

  return (
    <Text
      {...rest}
      style={
        types
          ? [
              fonts[types],
              {
                color: color ? colorContext[color] : undefined,
                fontSize: sizeTheme ? sizeTheme : fonts[types].fontSize,
                textAlign: textCenter ? 'center' : undefined,
              },
              style,
            ]
          : [style]
      }>
      {value || children}
    </Text>
  );
};

export default memo(Markdown);
