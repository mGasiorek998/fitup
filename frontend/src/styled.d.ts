import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      darkPurple: string;
      lightPurple: string;
      red: string;
      lightGray: string;
    };
    fontSize: {
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
  }
}
