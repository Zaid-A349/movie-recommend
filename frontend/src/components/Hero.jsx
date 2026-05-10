import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = ({ movie }) => {

  const navigate = useNavigate();

  if (!movie) return null;

  return (
    <div className="relative h-[75vh] rounded overflow-hidden mb-14">

      {/* Background */}
      <img
        src={movie?.title?.image?.url}
        alt={movie?.title?.title}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">

        <div className="max-w-2xl px-10">

          <p className="text-yellow-400 font-semibold mb-3">
            Featured Movie
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">

            {movie?.title?.title}

          </h1>

          <div className="flex items-center gap-5 text-gray-300 mb-6">

            <p>
              ⭐ {movie?.ratings?.rating || "N/A"}
            </p>

            <p>
              {movie?.title?.year}
            </p>

          </div>

          <p className="text-gray-300 mb-8 max-w-xl">
            Discover trending movies and series,
            explore recommendations based on your preferences,
            and find your next favorite watch.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <button className="bg-yellow-400 text-black px-7 py-3 rounded font-semibold hover:bg-yellow-300 transition">

              Watch Now

            </button>

            <button
              onClick={() => navigate("/recommend")}
              className="bg-white/10 backdrop-blur px-7 py-3 rounded font-semibold border border-white/20 hover:bg-white/20 transition"
            >
              Find Recommendations
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Hero;