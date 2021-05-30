import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/index';
import GlobalStyles from './theme/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
