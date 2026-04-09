import { useState } from "react";

function SearchModule({ handleSubmit }) {
  const [filters, setFilters] = useState({
    search: "",
    status: "all",
    gender: "all",
  });
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value }); // search: e.target.value ou status: e.target.value
  };
  return (
    <div>
      <input
        name="search"
        placeholder="Rechercher des personnages..."
        value={filters.search}
        onChange={handleChange}
      />
      <select value={filters.status} onChange={handleChange} name="status">
        <option value="all">Tous</option>
        <option value="alive">En vie</option>
        <option value="dead">Décédé</option>
        <option value="unknown">Inconnu</option>
      </select>
      <select value={filters.gender} onChange={handleChange} name="gender">
        <option value="all">Tous</option>
        <option value="female">Féminin</option>
        <option value="male">Masculin</option>
        <option value="genderless">Sans</option>
        <option value="unknown">Inconnu</option>
      </select>
      <button onClick={() => handleSubmit(filters)}>Filtrer</button>
    </div>
  );
}
export default SearchModule;
