import "./App.css";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Watched from "./components/Watched";
import "./lib/fontawesome/css/all.min.css";
import Add from "./components/Add";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
