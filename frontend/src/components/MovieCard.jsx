import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="min-w-[220px] bg-gray-900 rounded overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={movie?.title?.image?.url}
        alt={movie?.title?.title}
        className="w-full h-80 object-cover"
      />

      <div className="p-3">

        <h3 className="font-semibold text-sm line-clamp-1">
          {movie?.title?.title}
        </h3>

        <div className="flex items-center justify-between mt-2 text-sm text-gray-400">

          <p>
            ⭐ {movie?.ratings?.rating || "N/A"}
          </p>

          <p>
            {movie?.title?.year}
          </p>

        </div>

      </div>

    </div>
  );
};

export default MovieCard;