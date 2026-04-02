import { useState, useEffect } from "react";
function CharacterListPage() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      if (!res.ok) {
        setError("Il y a eu une erreur");
        return;
      }
      const data = await res.json();
      setLoading(false);
      if (data) {
        setCharacters(data.results);
      }
    };
    getData();
  }, []);
 
  if (loading) {
    return <div>Chargement en cours...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ul>
        {characters.map((c) => {
          return <li key={c.id}>{c.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default CharacterListPage;
