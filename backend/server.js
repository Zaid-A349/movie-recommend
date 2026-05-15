const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://zaidansari0349:zaidansari0349@recommendation-system.a0nxehx.mongodb.net/movieApp?retryWrites=true&w=majority"
)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err.message));

app.get("/", (req, res) => {
  res.send("API is running");
});

// LOAD DATASET
const movies = JSON.parse(
  fs.readFileSync("./data/movies.json", "utf-8")
);

// POPULAR
app.get("/popular", (req, res) => {

  res.json(
    movies.slice(0, 20)
  );
});

// TOP RATED
app.get("/top-rated", (req, res) => {

  res.json(
    movies.slice(20, 40)
  );
});

// NEW RELEASES
app.get("/new-releases", (req, res) => {

  const filtered = movies.filter(
    (movie) => movie.year >= 2020
  );

  res.json(
    filtered.slice(0, 20)
  );
});

// RECOMMEND
app.post("/recommend", (req, res) => {

  try {

    const {
      genres,
      type,
      year,
    } = req.body;

    const filteredMovies = movies.filter((movie) => {

      // genre matching
      const genreMatch =
        genres.length === 0 ||

        genres.some((selectedGenre) =>

          movie.genre.some((movieGenre) =>

            movieGenre
              .toLowerCase()
              .includes(
                selectedGenre.toLowerCase()
              )
          )
        );

      // type matching
      const typeMatch =
        !type ||
        movie.type.toLowerCase() ===
        type.toLowerCase();

      // year matching
      const yearMatch =
        !year ||
        movie.year >= Number(year);

      return (
        genreMatch &&
        typeMatch &&
        yearMatch
      );
    });

    res.json(
      filteredMovies.slice(0, 20)
    );

  } catch (err) {

    console.log(err.message);

    res.json([]);
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});