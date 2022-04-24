import styled, {css} from 'styled-components/native';

interface ICardProps {
  theme: ITheme;
  background: string;
  elevation: number;
  variant?: 'outline';
}

export const Container = styled.View`
  ${({
    elevation,
    variant,
    theme: {
      spaces: {x0, x1},
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      color: {gray, orange},
    },
  }: ICardProps) => css`
    elevation: ${variant === 'outline' ? 0 : elevation || 0};
    border-radius: ${variant === 'outline' ? x1 : x0}px;
    border-width: ${variant === 'outline' ? 1 : 0}px;
    border-color: ${variant === 'outline' ? gray : undefined};
    width: 100%;
  `}
  background-color: #FB7C35;
`;
