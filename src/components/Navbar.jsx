import { NavLink } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../slices/themeSlice";
import { actualTheme } from "../slices/themeSelectors";
import {
  selectorUserlogged,
  selectorUserEmaillogged,
} from "../slices/authSelector";
import { selectorNotificationMessage } from "../slices/notificationsSelector";
import MyInput from "./MyInput";
import { useRef } from "react";
import { logout } from "../slices/authSlice";
// import MonComposant from "./MonComposant";
// import withMyArray from "../HOC/withMyArray";

// const MonComposantIntermediaire = withMyArray(MonComposant);
// MonComposantIntermediaire.displayName = "MonComposantIntermediaire";
function Navbar() {
  const theme = useSelector(actualTheme);
  const userLogged = useSelector(selectorUserlogged);
  const userEmailLogged = useSelector(selectorUserEmaillogged);
  const dispatch = useDispatch();
  const notificationMessage = useSelector(selectorNotificationMessage);
  const inputRef = useRef();
  const handleClick = () => {
    // ici je veux récupéré la valeur de l'input à partir de sa ref
    console.log(inputRef.current.value);
  };
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      {userLogged && (
        <div>
          Connecté en tant que {userLogged}({userEmailLogged})
          <button onClick={() => dispatch(logout())}>Se déconnecter</button>
        </div>
      )}

      {/* <MyInput ref={inputRef} /> */}
      <button onClick={handleClick}>Click</button>
      {/* <MonComposantIntermediaire info="toto" />
      <MonComposant tata="toto" /> */}
      <div>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/login">Se connecter</NavLink>
        <NavLink to="/characters-list">Personnages</NavLink>
        <NavLink to="/demo-reducer">Démo reducer</NavLink>
        <NavLink to="/todos-list">TodosList</NavLink>
        <NavLink to="/about">À propos</NavLink>
        <NavLink to="/tab-switcher">Tab switcher</NavLink>
        <NavLink to="/render-props">Render props</NavLink>
      </div>
      <div style={{ color: "red" }}>{notificationMessage}</div>
      <div>
        Theme: <button onClick={() => dispatch(toggleTheme())}>{theme}</button>
      </div>
    </nav>
  );
}

export default Navbar;
