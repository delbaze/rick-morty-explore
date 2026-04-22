import { NavLink } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../slices/themeSlice";
import { actualTheme } from "../slices/themeSelectors";
import { selectorNotificationMessage } from "../slices/notificationsSelector";
import MyInput from "./MyInput";
import { useRef } from "react";
// import MonComposant from "./MonComposant";
// import withMyArray from "../HOC/withMyArray";

// const MonComposantIntermediaire = withMyArray(MonComposant);
// MonComposantIntermediaire.displayName = "MonComposantIntermediaire";
function Navbar() {
  const theme = useSelector(actualTheme);
  const dispatch = useDispatch();
  const notificationMessage = useSelector(selectorNotificationMessage);
  const inputRef = useRef();
  const handleClick = () => {
    // ici je veux récupéré la valeur de l'input à partir de sa ref
    console.log(inputRef.current.value);
  };
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Click</button>
      {/* <MonComposantIntermediaire info="toto" />
      <MonComposant tata="toto" /> */}
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
