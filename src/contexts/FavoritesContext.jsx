import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const FavoritesContext = createContext({
  favorites: [],
  addFavorites: (id) => {},
  removeFromFavorites: (id) => {},
  isFavorite: (id) => {},
});

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites"));
  }); // [1, 30, 2]

  const addFavorites = (id) => {
    const fav = [...favorites, id];
    setFavorites(fav);
    localStorage.setItem("favorites", JSON.stringify(fav));
  };
  const removeFromFavorites = (id) => {
    const fav = favorites.filter((f) => f !== id);
    setFavorites(fav);
    localStorage.setItem("favorites", JSON.stringify(fav));
  };
  const isFavorite = (id) => {
    return favorites.some((f) => f === id);
  };
  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  return context;
}
