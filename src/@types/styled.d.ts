import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      second: string;
    };
  }
}
