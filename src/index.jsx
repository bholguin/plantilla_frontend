import React from 'react';
import ReactDOM from 'react-dom';
import App from './07_app/App';
import { Provider } from "react-redux";
import { useStoreApp } from "./03_redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={useStoreApp().store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);