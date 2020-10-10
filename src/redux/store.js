import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root-reducer";
import { logger } from "redux-logger";
// persistStore is used for caching our store
import { persistStore } from "redux-persist";

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export { store, persistor };
