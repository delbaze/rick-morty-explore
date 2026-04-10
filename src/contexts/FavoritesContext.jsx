import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const FavoritesContext = createContext({ info: "", setState: () => {} });

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]); // [1, 30, 2]

  const addFavorites = (id) => {
    setFavorites([...favorites, id]);
  };
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((f) => f.id !== id));
  };
  const isFavorite = (id) => {
    return favorites.some((f) => f.id === id);
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
