import { useState, memo } from "react"; // hook
import "./App.css";
import { useEffect } from "react";
import { useCallback } from "react";
import { useMemo } from "react";

// function Button({ onClick, label }) {
//   return <button onClick={onClick}>{label}</button>;
// }
// const Button = ({ onClick, label }) => {
//   return <button onClick={onClick}>{label}</button>;
// };
const Button = memo(({ onClick, label }) => {
  useEffect(() => {
    console.log("JE SUIS RENDU");
  });
  return <button onClick={onClick}>{label}</button>;
});

function App() {
  const [count, setCount] = useState(0); // état
  const [count2, setCount2] = useState(100);
  const [items] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const filteredAndDoubled = useMemo(() => {
    console.log("Calcul lourd en cours");
    return items.filter((n) => n % 2 === 0).map((n) => n * 2);
  }, [items]);
  return (
    <div>
      <p>Compteur {count}</p>
      <Button onClick={handleClick} label="Cliquez moi!" />
      <div>
        <button onClick={() => setCount2(count2 + 1)}>Changer Count 2</button>
      </div>
      <p>Compteur 2 {count2}</p>
      <p>{filteredAndDoubled.join(", ")}</p>
      {/* <button onClick={() =>setItems([...items, 100])}>AJouter 100</button> */}
    </div>
  );
}

export default App;
