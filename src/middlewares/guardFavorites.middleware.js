import { toast } from "react-toastify";
import {
  clearNotification,
  setNotification,
} from "../slices/notificationsSlice";

export const guardFavoritesMiddleware =
  (store) =>
  (next) =>
  (action = { type: "" }) => {
    if (
      action.type === "favorites/addToFavorites" ||
      action.type === "favorites/removeFromFavorites"
    ) {
      store.dispatch(clearNotification());
    }
    if (action.type === "favorites/addToFavorites") {
      const state = store.getState();
      if (state.favorites.length >= 10) {
        const message = "Maximum 10 favoris autorisés";
        console.warn(message);
        store.dispatch(setNotification(message)); // puisqu'on est pas dans un composant, on a pas useDispatch, on utilise store.dispatch
        toast(message, { type: "warning" });
        return;
      }
    }
    return next(action); //undefined
  };
