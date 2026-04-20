import "./CharacterListPage.css";

import CharacterList from "../components/CharacterList";
import SearchModule from "../components/SearchModule";
import Pagination from "../components/Pagination";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { useState } from "react";
import {
  useGetCharactersQuery,
  // useLazyGetCharactersQuery,
} from "../slices/charactersApi";
// import { useEffect } from "react";

function CharacterListPageRTK() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({ name: "", status: "", gender: "" });

  // const [maMethode, { data, isLoading, isFetching, error }] =
  //   useLazyGetCharactersQuery({
  //     page,
  //     ...filters,
  //   });

  // useEffect(() => {
  //   maMethode({ page, ...filters });
  // }, [page, filters, maMethode]);
  const { data, isLoading, isFetching, error } = useGetCharactersQuery({
    page,
    ...filters,
  });
  const handleSubmit = ({ search, status, gender }) => {
    setFilters({ name: search, status, gender });
    setPage(1);
  };
  if (error) {
    return <div>{error.message}</div>;
  }
  const pagesArray = data
    ? Array.from({ length: data.info.pages }, (_, i) => i + 1)
    : [];
  return (
    <div>
      {/* <button onClick={() => maMethode({ page, ...filters })}>
        Récupérer les personnages
      </button> */}
      <SearchModule handleSubmit={handleSubmit} />
      {isLoading || isFetching ? (
        <div>Chargement en cours</div>
      ) : (
        <>
          <Pagination pagesArray={pagesArray} page={page} setPage={setPage} />
          <CharacterList characters={data?.results ?? []} />
          <Pagination pagesArray={pagesArray} page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
}

export default CharacterListPageRTK;
