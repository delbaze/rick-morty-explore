import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import favoritesReducer from "../slices/favoritesSlice";
import charactersReducer from "../slices/charactersSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/es/storage";

const rootReducer = combineReducers({
  theme: themeReducer,
  favorites: favoritesReducer,
  characters: charactersReducer,
});
const persistConfig = {
  version: 1,
  key: "root",
  storage,
  whitelist: ["favorites", "theme"],
  // blacklist: ["characters"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // reducer: {
  //   // theme: themeReducer,
  //   // favorites: favoritesReducer,

  // },
});
export const persistor = persistStore(store); // c'est le store persisté!!
//serializableCheck
// A non-serializable value was detected in the state
