import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const genresList = [
  "Action",
  "Comedy",
  "Drama",
  "Horror",
  "Sci-Fi",
  "Romance",
  "Thriller",
  "Adventure",
];

const RecommendationForm = () => {

  const navigate = useNavigate();

  const [selectedGenres, setSelectedGenres] = useState([]);

  const [type, setType] = useState("");

  const [year, setYear] = useState("");

  // genre selection
  const handleGenreChange = (genre) => {

    if (selectedGenres.includes(genre)) {

      setSelectedGenres(
        selectedGenres.filter((item) => item !== genre)
      );

    } else {

      setSelectedGenres([
        ...selectedGenres,
        genre,
      ]);
    }
  };

  // submit
  const handleSubmit = (e) => {

    e.preventDefault();

    navigate("/recommend/result", {
      state: {
        genres: selectedGenres,
        type,
        year,
      },
    });
  };

  return (
    <div className="bg-gray-900 p-6 rounded mb-12">

      <h2 className="text-2xl font-bold mb-6">
        Find Recommendations
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        {/* GENRES */}
        <div>

          <label className="block mb-3 font-semibold">
            Select Genres
          </label>

          <div className="flex flex-wrap gap-3">

            {genresList.map((genre) => (

              <button
                type="button"
                key={genre}
                onClick={() =>
                  handleGenreChange(genre)
                }
                className={`px-4 py-2 rounded border transition ${
                  selectedGenres.includes(genre)
                    ? "bg-yellow-400 text-black border-yellow-400"
                    : "border-gray-600 text-white"
                }`}
              >
                {genre}
              </button>

            ))}

          </div>

        </div>

        {/* TYPE */}
        <div>

          <label className="block mb-2 font-semibold">
            Type
          </label>

          <select
            value={type}
            onChange={(e) =>
              setType(e.target.value)
            }
            className="w-full bg-black border border-gray-700 rounded px-4 py-3"
          >
            <option value="">
              Select Type
            </option>

            <option value="movie">
              Movie
            </option>

            <option value="tv show">
              Series
            </option>

          </select>

        </div>

        {/* YEAR */}
        <div>

          <label className="block mb-2 font-semibold">
            Release Year
          </label>

          <select
            value={year}
            onChange={(e) =>
              setYear(e.target.value)
            }
            className="w-full bg-black border border-gray-700 rounded px-4 py-3"
          >
            <option value="">
              Select Year
            </option>

            <option value="2024">
              2024+
            </option>

            <option value="2020">
              2020+
            </option>

            <option value="2015">
              2015+
            </option>

            <option value="2010">
              2010+
            </option>

            <option value="2000">
              2000+
            </option>

          </select>

        </div>

        {/* BUTTON */}
        <button className="w-full bg-yellow-400 text-black py-3 rounded font-semibold hover:bg-yellow-300 transition">

          Recommend

        </button>

      </form>

    </div>
  );
};

export default RecommendationForm;