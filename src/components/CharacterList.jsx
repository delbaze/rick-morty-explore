import "./CharacterList.css";
import { Link } from "react-router";
function CharacterList({ characters }) {
  return (
    <div className="blocImage">
      {characters.length > 0 ? (
        characters.map((c) => {
          return (
            <div key={c.id} className="element">
              {/* <div key={c.id} style={{ width: 200 }}> */}
              <Link to={`/character/${c.id}`}>
                <img src={c.image} width={150} />
              </Link>
              <p>{c.name}</p>
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
