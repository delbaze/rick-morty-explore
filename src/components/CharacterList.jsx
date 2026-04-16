// import { useFavorites } from "../contexts/FavoritesContext";
import { useFavorites } from "../hooks/useFavorites";
import "./CharacterList.css";
import { Link } from "react-router";
function CharacterList({ characters }) {
  const { isFavorite, addFavorites, removeFavorites } = useFavorites();
  return (
    <div className="blocImage">
      {characters.length > 0 ? (
        characters.map((c) => {
          const isFav = isFavorite(c.id);
          return (
            <div key={c.id} className="element">
              <Link to={`/character/${c.id}`}>
                <img src={c.image} width={150} />
              </Link>
              <div>
                <p>{c.name}</p>
                <button
                  style={{
                    backgroundColor: isFav ? "green" : "gray",
                  }}
                  onClick={() =>
                    isFav ? removeFavorites(c.id) : addFavorites(c.id)
                  }
                >
                  {isFav ? "-" : "+"}
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div>Il n'y a pas de résultat pour cette recherche</div>
      )}
    </div>
  );
}

export default CharacterList;
