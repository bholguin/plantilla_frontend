import React from 'react';
import ReactDOM from 'react-dom';
import App from './07_app/App';
import SpinnerLoadingIndicator from './00_utilities/SpinnerLoading'
import { msalConfig } from "./authConfig";
import { Provider } from "react-redux";
import { useStoreApp } from "./03_redux";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.handleRedirectPromise().then(res => {
  if(res){
    window.localStorage.setItem('microsoftToken', res.accessToken)
  }
})


ReactDOM.render(
  <React.Fragment>
    <Provider store={useStoreApp().store}>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
      <SpinnerLoadingIndicator />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);