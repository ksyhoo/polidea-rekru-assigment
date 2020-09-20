import React from 'react';
import { Routes } from './routes';
import store from 'store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import { GlobalStyles } from 'utils/styled';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <>
        <GlobalStyles />
        <Routes />
      </>
    </Provider>
  </ThemeProvider>
);

export default App;
