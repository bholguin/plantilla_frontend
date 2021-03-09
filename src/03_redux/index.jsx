import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";
import rootReducer from "../02_reducers";
import thunk from "redux-thunk";


export const useStoreApp = () => {
    let initialState = {}
    let middleware = []
    const persistConfig = {
        key: "root",
        storage: storage
    }

    const persistReduce = persistReducer(persistConfig, rootReducer)

    if (process.env.NODE_ENV === "development") {
        const reduxInmmutableStateInvariant = require("redux-immutable-state-invariant").default()
        middleware = [...middleware, reduxInmmutableStateInvariant, thunk]
      } else {
        middleware = [...middleware, thunk]
      }

      const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

      let store = createStore(
          persistReduce,
          initialState,
          composeEnhancers(applyMiddleware(...middleware))
      )

      let persistor = persistStore(store)

      return{
          store,
          persistor
      }

}