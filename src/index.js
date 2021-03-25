import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'focus-visible';

import 'src/firebase';
import store from 'src/redux/store';
import { MediaProvider } from 'src/contexts/media';
import { ThemeProvider } from 'src/contexts/theme';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MediaProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </MediaProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
