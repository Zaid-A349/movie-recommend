import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "./Layout";

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    onSearch(query);
  };

  return (
    <Layout>
      <nav className="flex items-center justify-between py-4 border-b border-gray-800">

        <h1
          onClick={() => navigate("/")}
          className="text-xl font-bold cursor-pointer"
        >
          MovieApp
        </h1>

        <div className="flex-1 flex justify-center">
          <form
            onSubmit={handleSearch}
            className="flex w-1/2 bg-gray-900 border border-gray-700 rounded overflow-hidden"
          >
            <input
              type="text"
              placeholder="Search movies or series..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-2 bg-transparent focus:outline-none"
            />

            <button
              type="submit"
              className="px-4 bg-yellow-400 text-black font-semibold"
            >
              Search
            </button>
          </form>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <button className="hover:text-gray-300">
            Watchlist
          </button>

          <button className="hover:text-gray-300">
            Favourites
          </button>

          <button
            onClick={() => navigate("/login")}
            className="bg-yellow-400 text-black px-3 py-1 rounded"
          >
            Login
          </button>
        </div>

      </nav>
    </Layout>
  );
};

export default Header;