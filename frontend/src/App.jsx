import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Recommend from "./components/Recommend";
import MoviesPage from "./components/MoviesPage";
import RecommendationResult from "./components/RecommendationResult";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/recommend"
          element={<Recommend />}
        />

        <Route
          path="/recommend/result"
          element={<RecommendationResult />}
        />

        <Route
          path="/popular"
          element={<MoviesPage />}
        />

        <Route
          path="/top-rated"
          element={<MoviesPage />}
        />

        <Route
          path="/new-releases"
          element={<MoviesPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;