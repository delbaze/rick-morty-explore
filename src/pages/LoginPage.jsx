import { useNavigate } from "react-router";
import { useLoginMutation } from "../slices/authApi";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setInfos } from "../slices/authSlice";

function LoginPage() {
  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();

  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ username, password }).unwrap();
      dispatch(setInfos({ username: data.username, email: data.email }));
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Connexion..." : "Se connecter"}
        </button>
        {error && <p>Identifiants incorrects</p>}
      </form>
      <p>Compte de test : emilys | emilyspass</p>
    </div>
  );
}

export default LoginPage;
