import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'prismjs/themes/prism-twilight.css';

import theme from './src/styles/theme.ts';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    {element}
  </ThemeProvider>
);
