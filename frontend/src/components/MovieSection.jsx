import React from "react";
import { useNavigate } from "react-router-dom";

import MovieCard from "./MovieCard";

const MovieSection = ({
  title,
  movies = [],
  route,
}) => {

  const navigate = useNavigate();

  return (
    <section className="pb-12">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <button
          onClick={() => navigate(route)}
          className="text-yellow-400"
        >
          Show More →
        </button>

      </div>

      <div className="flex gap-4 overflow-x-auto">

        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
          />
        ))}

      </div>

    </section>
  );
};

export default MovieSection;