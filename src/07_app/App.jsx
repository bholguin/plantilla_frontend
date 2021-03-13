import React from 'react';
import RootContainer from "./routes";
import { Provider } from "react-redux";
import { useStoreApp } from "../03_redux";

const App = () => {
    const { store } = useStoreApp()
    return (
        <Provider store={store}>
            <RootContainer />
        </Provider>
    )
}

export default App

