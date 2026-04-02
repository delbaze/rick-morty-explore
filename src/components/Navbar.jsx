import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/characters-list">Liste de personnages</NavLink>
      <NavLink to="/about">À propos</NavLink>
    </nav>
  );
}

export default Navbar;
