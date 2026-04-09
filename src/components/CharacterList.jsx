import "./CharacterList.css";
import { Link } from "react-router";
function CharacterList({ characters }) {
  return (
    <div className="blocImage">
        {characters.map((c) => {
          return (
            <div key={c.id} className="element">
              {/* <div key={c.id} style={{ width: 200 }}> */}
              <Link to={`/character/${c.id}`}>
                <img src={c.image} width={150} />
              </Link>
              <p>{c.name}</p>
            </div>
          );
        })}
    </div>
  );
}

export default CharacterList;
