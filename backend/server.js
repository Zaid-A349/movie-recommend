const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://zaidansari0349:zaidansari0349@recommendation-system.a0nxehx.mongodb.net/movieApp?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err.message));

const headers = {
  "X-RapidAPI-Key":
    "cde2400d59msh4a6fc476076e802p123335jsn4f64acf2110d",

  "X-RapidAPI-Host":
    "imdb8.p.rapidapi.com",
};

app.get("/", (req, res) => {
  res.send("API is running");
});

// helper function
const fetchMovieDetails = async (ids) => {

  const movies = await Promise.all(

    ids.map(async (id) => {

      const movieId = id.split("/")[2];

      const response = await axios.get(
        "https://imdb8.p.rapidapi.com/title/get-overview-details",
        {
          params: {
            tconst: movieId,
          },

          headers,
        }
      );

      return response.data;
    })

  );

  return movies;
};

// POPULAR
app.get("/popular", async (req, res) => {
  try {

    const response = await axios.get(
      "https://imdb8.p.rapidapi.com/title/get-most-popular-movies",
      {
        headers,
      }
    );

    const ids = response.data.slice(0, 5);

    const movies = await Promise.all(

      ids.map(async (id) => {

        try {

          const movieId = id.split("/")[2];

          const movieResponse = await axios.get(
            "https://imdb8.p.rapidapi.com/title/get-overview-details",
            {
              params: {
                tconst: movieId,
              },

              headers,
            }
          );

          return movieResponse.data;

        } catch {

          return null;
        }
      })

    );

    // remove failed/null movies
    const filteredMovies = movies.filter(Boolean);

    res.json(filteredMovies);

  } catch (err) {

    console.log(err.message);

    // ALWAYS send array
    res.json([]);
  }
});

// TOP RATED
app.get("/top-rated", async (req, res) => {
  try {

    const response = await axios.get(
      "https://www.omdbapi.com/",
      {
        params: {
          apikey: "e74ea04b",
          s: "interstellar",
        },
      }
    );

    res.json(response.data.Search || []);

  } catch (err) {

    console.log(err.message);

    res.json([]);
  }
});

// NEW RELEASES
app.get("/new-releases", async (req, res) => {
  try {

    const response = await axios.get(
      "https://www.omdbapi.com/",
      {
        params: {
          apikey: "e74ea04b",
          s: "2024",
        },
      }
    );

    res.json(response.data.Search || []);

  } catch (err) {

    console.log(err.message);

    res.json([]);
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});