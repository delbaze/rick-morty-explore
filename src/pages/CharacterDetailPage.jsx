import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { maMethode } from "../utilities";
function CharacterDetailPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`,
      );
      //   const res = await fetch(
      //     "https://rickandmortyapi.com/api/character/" + id,
      //   );
      if (!res.ok) {
        setError("Il y a eu une erreur");
        return;
      }
      const data = await res.json();
      setLoading(false);
      if (data) {
        setCharacter(data);
      }
    };
    getData();
  }, [id]);
  console.log(character);
  if (loading) {
    return <div>Chargement en cours...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  const handleClick = () => {
    // maMethode()
    //import dynamique
    import("../utilities").then((utilities) => {
      utilities.maMethode();
    });
  };
  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} width={200} />

      <ul>
        <li>Statut : {character.status}</li>
        <li>Espèce : {character.species}</li>
        <li>Origin : {character.origin.name}</li>
        <li>Nombre d'épisodes : {character.episode.length}</li>
      </ul>
      <button onClick={handleClick}>Test</button>
    </div>
  );
}

export default CharacterDetailPage;
