import { createGlobalStyle } from 'styled-components';
import { colors } from 'utils/colors';
import {IThemeProps} from 'interfaces/GlobalStyles.interface';


const { main, main_darkTheme, decor_darkTheme, accent_darkTheme,border_darkTheme } = colors;

const lightTheme = {
  accent: main,
};

const darkTheme = {
  color: main_darkTheme,
  background: decor_darkTheme,
  text: main_darkTheme,
  accent: accent_darkTheme,
  border: border_darkTheme,
};

const GlobalStyles = createGlobalStyle<{ theme: IThemeProps }>`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    text: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
`;

export { lightTheme, darkTheme, GlobalStyles };
