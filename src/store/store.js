import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice";
import favoritesReducer from "../slices/favoritesSlice";
import charactersReducer from "../slices/charactersSlice";
import notificationsReducer from "../slices/notificationsSlice";
import authReducer from "../slices/authSlice";
import { charactersApi } from "../slices/charactersApi";
import { loggerMiddleware } from "../middlewares/logger.middleware";
import { guardFavoritesMiddleware } from "../middlewares/guardFavorites.middleware";
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
import { authApi } from "../slices/authApi";

const rootReducer = combineReducers({
  theme: themeReducer,
  favorites: favoritesReducer,
  characters: charactersReducer,
  auth: authReducer,
  [charactersApi.reducerPath]: charactersApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  // charactersApi: charactersApi.reducer,
  notifications: notificationsReducer,
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
    })
      // .concat(loggerMiddleware)
      .concat(guardFavoritesMiddleware)
      .concat(charactersApi.middleware)
      .concat(authApi.middleware),
  // reducer: {
  //   // theme: themeReducer,
  //   // favorites: favoritesReducer,

  // },
});
export const persistor = persistStore(store); // c'est le store persisté!!
//serializableCheck
// A non-serializable value was detected in the state
