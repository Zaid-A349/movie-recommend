import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MoviesPage from "./components/MoviesPage";
import Recommend from "./components/Recommend";

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

        <Route
  path="/recommend"
  element={<Recommend />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;