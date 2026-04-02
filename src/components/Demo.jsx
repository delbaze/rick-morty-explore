import { useEffect } from "react";

function Demo({ title, handleChangeTitle }) {
  useEffect(() => {
    console.log("Je suis chargé démo!");
    return () => {
      console.log("Je suis déchargé");
    };
  }, []);
  // function Demo(props) {
  // { info : "mon info"}
  //   const  info  = props.info; // je crée une variable info à partir de props.info
  //   const { info } = props; // je crée une variable info à partir de props.info

  return (
    <div>
      Je suis démo : {title}
      <button
        onClick={() => {
          handleChangeTitle("Mon titre démo");
        }}
      >
        Changer le titre depuis démo
      </button>
    </div>
  );
}
export default Demo;
