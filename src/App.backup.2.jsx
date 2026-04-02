import { useState, useRef } from "react"; // hook
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("Je valide le formulaire");
    console.log("Valeur de l'input contrôlé", value);
    console.log("Valeur de l'input non contrôlé", inputRef.current.value);
  };
  return (
    <div>
      <h1>Inputs</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Inputs contrôlés</h2>
          <input
            placeholder="Mon input contrôlé"
            value={value}
            onChange={handleChange}
          />
        </div>
        <div>
          <h2>Inputs non contrôlés</h2>
          <input
            placeholder="Mon input non contrôlé"
            ref={inputRef}
            defaultValue="ma valeur initiale"
          />
        </div>

        <button>Valider le formulaire</button>
      </form>
    </div>
  );
}

export default App;
