import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./StateStore/reducers";
import wordReducer from "./WordStore/reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

// Create a rootReducer that combines your reducers
const rootReducer = combineReducers({
  stateStore: stateReducer,
  wordStore: wordReducer,
});

// Define a root state type that includes the state from each reducer
export type RootState = ReturnType<typeof rootReducer>;

// Create a configuration object for redux-persist
const persistConfig = {
  key: "root",
  storage,
};

// Wrap the rootReducer with redux-persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Create a reference to the persistor
export const persistor = persistStore(store);
