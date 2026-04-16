import { useDispatch, useSelector } from "react-redux";

import { addToFavorites, removeFromFavorites } from "../slices/favoritesSlice";
import { selectFavorites } from "../slices/favoritesSelectors";

export const useFavorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const addFavorites = (id) => {
    dispatch(addToFavorites(id));
  };
  const removeFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };

  const isFavorite = (id) => {
    if (id === 1) {
      console.log("DANS IS FAVORITES");
    }
    return favorites.some((f) => f === id);
  };

  return {
    addFavorites,
    removeFavorites,
    isFavorite,
  };
};
