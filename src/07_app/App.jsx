import React from 'react';
import RootContainer from "./routes";
import { interceptorHandler } from "../04_provider/instances";

const App = () => <RootContainer />

export default interceptorHandler(App) 

