import "./CharacterListPage.css";
import { useState, useEffect } from "react";
import CharacterList from "../components/CharacterList";
import SearchModule from "../components/SearchModule";

const DEFAULT_URL = "https://rickandmortyapi.com/api/character/";

function CharacterListPage() {
  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState(DEFAULT_URL);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      const urlObj = new URL(url);
      urlObj.searchParams.set("page", page);

      const res = await fetch(urlObj.toString());
      if (!res.ok) {
        if (res.status == 404) {
          setCharacters([]);
          return;
        }
        setError("Il y a eu une erreur");
        return;
      }
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data) {
        setCharacters(data.results);
      }
    };
    getData();
  }, [url, page]);

  const handleSubmit = ({ search, status, gender }) => {
    const params = new URLSearchParams();
    let urlBase = DEFAULT_URL;
    if (search) {
      params.set("name", search);
    }
    if (status && status !== "all") {
      params.set("status", status);
    }
    if (gender && gender !== "all") {
      params.set("gender", gender);
    }
    setUrl(`${urlBase}?${params.toString()}`);
  };
  if (loading) {
    return <div>Chargement en cours...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <SearchModule handleSubmit={handleSubmit} />
      <CharacterList characters={characters} />
      {/* <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Page suivante
      </button> */}
    </div>
  );
}

export default CharacterListPage;
