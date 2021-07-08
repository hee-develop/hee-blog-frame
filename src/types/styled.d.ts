import { ThemeType } from '../styles/theme';
import { CSSProp } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
