import { NavLink } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../slices/themeSlice";
import { actualTheme } from "../slices/themeSelectors";
import { selectorNotificationMessage } from "../slices/notificationsSelector";
import MonComposant from "./MonComposant";
import withMyArray from "../HOC/withMyArray";

const MonComposantIntermediaire = withMyArray(MonComposant);
MonComposantIntermediaire.displayName = "MonComposantIntermediaire";
function Navbar() {
  const theme = useSelector(actualTheme);
  const dispatch = useDispatch();
  const notificationMessage = useSelector(selectorNotificationMessage);

  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <MonComposantIntermediaire info="toto" />
      <MonComposant tata="toto" />
      <div>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/characters-list">Personnages</NavLink>
        <NavLink to="/demo-reducer">Démo reducer</NavLink>
        <NavLink to="/todos-list">TodosList</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </div>
      <div style={{ color: "red" }}>{notificationMessage}</div>
      <div>
        Theme: <button onClick={() => dispatch(toggleTheme())}>{theme}</button>
      </div>
    </nav>
  );
}

export default Navbar;
