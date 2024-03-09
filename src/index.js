import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';
import { AppContextProvider } from './AppContext';
import Routes from './Routes';
import './index.css';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// eslint-disable-next-line no-undef
const root = ReactDOM?.createRoot(document?.getElementById('root'));
root?.render(
  <AppContextProvider>
    <ToastContainer />
    <Routes />
  </AppContextProvider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    if (registration?.waiting) {
      // eslint-disable-next-line no-console
      console?.log('Inside registration');
      toast?.info({
        content: (
          <>
            New version available! Click Reload to get the latest version.
            <button
              className="ml-1 mb-0"
              type="button"
              onClick={() => {
                registration?.waiting?.postMessage({ type: 'SKIP_WAITING' });
                // eslint-disable-next-line no-undef
                window.location.reload();
              }}
            >
              Reload
            </button>
          </>
        ),
        duration: 0,
      });
    }
  },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
