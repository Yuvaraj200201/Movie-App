import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import WatchList from "./Pages/WatchList";
import Navbar from "./Components/Navbar";
import { WatchListProvider } from "./Context/WatchListContext";
import { MoviesProvider } from "./Context/Movies&FilterContext";
import MovieDetails from "./Pages/MovieDetails";

function App() {

  return (
    <MoviesProvider>
      <WatchListProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </WatchListProvider>
    </MoviesProvider>
  );
}

export default App;
