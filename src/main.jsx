import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App.jsx";
// import { FavoritesProvider } from "./contexts/FavoritesContext.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store.js";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <FavoritesProvider> */}
      <PersistGate
        // loading={<Loader />}
        loading={<div>Chargement en cours...</div>}
        persistor={persistor}
      >
        <ToastContainer />
        <App />
      </PersistGate>
      {/* </FavoritesProvider> */}
    </Provider>
  </BrowserRouter>,
);
