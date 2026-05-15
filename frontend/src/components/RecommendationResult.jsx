import React, {
  useEffect,
  useState,
} from "react";

import {
  useLocation,
} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Layout from "./Layout";
import Loader from "./Loader";

const RecommendationResult = () => {

  const location = useLocation();

  const {
    genres,
    type,
    year,
  } = location.state || {};

  const [movies, setMovies] = useState([]);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchRecommendations =
      async () => {

        try {

          const response = await fetch(
            "http://localhost:5000/recommend",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                genres,
                type,
                year,
              }),
            }
          );

          const data =
            await response.json();

          setMovies(data);

        } catch (err) {

          console.log(err);

        } finally {

          setLoading(false);
        }
      };

    fetchRecommendations();

  }, []);

  const nextMovie = () => {

    if (
      currentIndex < movies.length - 1
    ) {

      setCurrentIndex(
        currentIndex + 1
      );
    }
  };

  const currentMovie =
    movies[currentIndex];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">

      <Header />

      <Layout>

        <div className="py-10">

          {loading ? (

            <Loader />

          ) : currentMovie ? (

            <div className="bg-gray-900 rounded overflow-hidden max-w-6xl mx-auto">

              <div className="grid md:grid-cols-2 gap-8">

                {/* IMAGE */}
                <div>

                  <img
                    src="https://via.placeholder.com/500x700?text=Movie"
                    alt={currentMovie.title}
                    className="w-full h-full object-cover"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-8 flex flex-col justify-center">

                  <p className="text-yellow-400 font-semibold mb-3">
                    Recommended For You
                  </p>

                  <h1 className="text-5xl font-bold mb-5">

                    {currentMovie.title}

                  </h1>

                  <div className="flex gap-4 text-gray-400 mb-5">

                    <p>
                      {currentMovie.type}
                    </p>

                    <p>
                      {currentMovie.year}
                    </p>

                  </div>

                  {/* GENRES */}
                  <div className="flex flex-wrap gap-2 mb-6">

                    {Array.isArray(
                      currentMovie.genre
                    ) &&

                      currentMovie.genre.map(
                        (item, index) => (

                        <span
                          key={index}
                          className="bg-yellow-400 text-black px-3 py-1 rounded text-sm"
                        >
                          {item}
                        </span>

                      ))}

                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 leading-7 mb-8">

                    {currentMovie.description}

                  </p>

                  {/* NEXT BUTTON */}
                  <button
                    onClick={nextMovie}
                    className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold w-fit hover:bg-yellow-300 transition"
                  >
                    Next Movie
                  </button>

                  {/* COUNTER */}
                  <p className="text-gray-500 mt-5 text-sm">

                    {currentIndex + 1}
                    {" / "}
                    {movies.length}

                  </p>

                </div>

              </div>

            </div>

          ) : (

            <p className="text-center text-gray-400">
              No recommendations found.
            </p>

          )}

        </div>

      </Layout>

      <Footer />

    </div>
  );
};

export default RecommendationResult;