import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import MovieCard from "./MovieCard";
import Loader from "./Loader";

const MoviesPage = () => {
  const location = useLocation();

  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  const path = location.pathname;

  useEffect(() => {

    const fetchMovies = async () => {
      try {

        const response = await fetch(
          `http://localhost:5000${path}`
        );

        const data = await response.json();

        setMovies(data);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);
      }
    };

    fetchMovies();

  }, [path]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">

      <Header />

      <Layout>

        <div className="py-10">

          <h1 className="text-3xl font-bold mb-8 capitalize">

            {path.replace("/", "").replace("-", " ")}

          </h1>

          {loading ? (

            <Loader />

          ) : (

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

              {movies.map((movie, index) => (
                <MovieCard
                  key={index}
                  movie={movie}
                />
              ))}

            </div>

          )}

        </div>

      </Layout>

      <Footer />

    </div>
  );
};

export default MoviesPage;