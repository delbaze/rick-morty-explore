import "./CharacterListPage.css";
import { useEffect } from "react";
import CharacterList from "../components/CharacterList";
import SearchModule from "../components/SearchModule";
import Pagination from "../components/Pagination";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { useDispatch } from "react-redux";
import { fetchCharacters, maDemo } from "../slices/charactersThunk";
import { useSelector } from "react-redux";
import {
  selectError,
  selectFilteredAvecCreateSelector,
  selectItems,
  selectPage,
  selectPagesArray,
  selectStatus,
  selectUrl,
} from "../slices/charactersSelectors";
import { setPage, setUrl, DEFAULT_URL } from "../slices/charactersSlice";

function CharacterListPage() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const page = useSelector(selectPage);
  const status = useSelector(selectStatus);
  const url = useSelector(selectUrl);
  const error = useSelector(selectError);
  const pagesArray = useSelector(selectPagesArray);
  const filtered = useSelector(selectFilteredAvecCreateSelector);

  useEffect(() => {
    dispatch(fetchCharacters({ url, page }));
    setTimeout(() => {
      dispatch(maDemo());
    }, 4000);
  }, [url, page, dispatch]);

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
    dispatch(setUrl(`${urlBase}?${params.toString()}`));
  };
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <SearchModule handleSubmit={handleSubmit} />
      {status === "loading" ? (
        <div>Chargement en cours</div>
      ) : (
        <>
          <Pagination pagesArray={pagesArray} page={page} setPage={setPage} />
          <CharacterList characters={items} />
          <Pagination pagesArray={pagesArray} page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
}

export default CharacterListPage;
