import React from "react";

const MovieCard = ({ movie }) => {

  const randomPoster =
    `https://picsum.photos/300/450?random=${movie.title}`;

  return (
    <div className="min-w-[220px] bg-gray-900 rounded overflow-hidden hover:scale-105 transition duration-300">

      <img
        src={movie.poster || randomPoster}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />

      <div className="p-3">

        <h3 className="font-semibold text-sm mb-2 line-clamp-1">

          {movie.title}

        </h3>

        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">

          <p>
            {movie.type}
          </p>

          <p>
            {movie.year}
          </p>

        </div>

        <p className="text-gray-500 text-sm line-clamp-3">

          {movie.description}

        </p>

      </div>

    </div>
  );
};

export default MovieCard;