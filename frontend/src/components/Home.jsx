import React, { useEffect, useState } from "react";

import Hero from "./Hero";
import Footer from "./Footer";
import Layout from "./Layout";
import Header from "./Header";
import MovieSection from "./MovieSection";
import Loader from "./Loader";

const Home = () => {

  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchMovies = async () => {

      try {

        const [
          popularResponse,
          topRatedResponse,
          newReleaseResponse,
        ] = await Promise.all([

          fetch("http://localhost:5000/popular"),

          fetch("http://localhost:5000/top-rated"),

          fetch("http://localhost:5000/new-releases"),

        ]);

        const popularData = await popularResponse.json();

        const topRatedData = await topRatedResponse.json();

        const newReleaseData = await newReleaseResponse.json();

        setPopularMovies(popularData);

        setTopRatedMovies(topRatedData);

        setNewMovies(newReleaseData);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);
      }
    };

    fetchMovies();

  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">

      <Header />

      <Layout>

        {loading ? (

          <Loader />

        ) : (

          <>
            <Hero movie={popularMovies[0]} />

            <MovieSection
              title="Popular Movies"
              movies={popularMovies}
              route="/popular"
            />

            <MovieSection
              title="Top Rated"
              movies={topRatedMovies}
              route="/top-rated"
            />

            <MovieSection
              title="New Releases"
              movies={newMovies}
              route="/new-releases"
            />
          </>

        )}

      </Layout>

      <Footer />

    </div>
  );
};

export default Home;