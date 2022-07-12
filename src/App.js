import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Component/Pages/LandingPage";
import Nav from "./Component/Nav/Nav";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>{<Nav />}</nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
