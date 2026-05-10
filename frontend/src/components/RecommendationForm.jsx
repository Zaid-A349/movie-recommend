import React, { useState } from "react";

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

  const [selectedGenres, setSelectedGenres] = useState([]);

  const [type, setType] = useState("");

  const [year, setYear] = useState("");

  const [rating, setRating] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      genres: selectedGenres,
      type,
      year,
      rating,
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

        {/* Genres */}
        <div>

          <label className="block mb-3 font-semibold">
            Select Genres
          </label>

          <div className="flex flex-wrap gap-3">

            {genresList.map((genre) => (

              <button
                type="button"
                key={genre}
                onClick={() => handleGenreChange(genre)}
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

        {/* Type */}
        <div>

          <label className="block mb-2 font-semibold">
            Type
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded px-4 py-3"
          >
            <option value="">Select Type</option>

            <option value="movie">Movie</option>

            <option value="series">Series</option>

          </select>

        </div>

        {/* Year */}
        <div>

          <label className="block mb-2 font-semibold">
            Release Year
          </label>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded px-4 py-3"
          >
            <option value="">Select Year</option>

            <option value="2025">2025</option>

            <option value="2024">2024</option>

            <option value="2023">2023</option>

            <option value="2020">2020+</option>

            <option value="2015">2015+</option>

          </select>

        </div>

        {/* Rating */}
        <div>

          <label className="block mb-2 font-semibold">
            Minimum Rating
          </label>

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded px-4 py-3"
          >
            <option value="">Select Rating</option>

            <option value="9">9+</option>

            <option value="8">8+</option>

            <option value="7">7+</option>

            <option value="6">6+</option>

          </select>

        </div>

        {/* Submit */}
        <button className="w-full bg-yellow-400 text-black py-3 rounded font-semibold">

          Recommend

        </button>

      </form>

    </div>
  );
};

export default RecommendationForm;