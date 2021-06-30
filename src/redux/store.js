import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import album from "./reducers/album";

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  album,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
