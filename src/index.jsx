import React from 'react';
import ReactDOM from 'react-dom';
import App from './07_app/App';
import SpinnerLoadingIndicator from './00_utilities/SpinnerLoading'

import { Provider } from "react-redux";
import { useStoreApp } from "./03_redux";



ReactDOM.render(
  <React.Fragment>
    <Provider store={useStoreApp().store}>
        <App />
      <SpinnerLoadingIndicator />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);