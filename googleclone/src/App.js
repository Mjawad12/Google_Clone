import "./Styles/App.css";
import Home from "./Components/Home";
import ResultPage from "./Components/SearchPage/ResultPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<ResultPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
