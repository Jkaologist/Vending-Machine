import './App.css';
import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
