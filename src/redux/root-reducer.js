import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import directoryReducer from "./directory/directory.reducer";
import cartReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.reducer";
import { persistReducer } from "redux-persist";

// Actual Local storage object on our window browser
// As we will be telling to use local storage as default storage
// You can also find the sessionStorage from redux persist library
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"], // It will contain the string names that any of the reduce we want to store
};
const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryReducer,
  cart: cartReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
