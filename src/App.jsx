import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import CharacterListPage from "./pages/CharacterListPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import DemoReducer from "./pages/DemoReducer";
import TodosList from "./pages/TodosList";
import CharacterListPageRTK from "./pages/CharacterListPageRTK";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters-list" element={<CharacterListPageRTK />} />
        {/* <Route path="/characters-list" element={<CharacterListPage />} /> */}
        <Route path="/character/:id" element={<CharacterDetailPage />} />
        <Route path="/demo-reducer" element={<DemoReducer />} />
        <Route path="/todos-list" element={<TodosList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
