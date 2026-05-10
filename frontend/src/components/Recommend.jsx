import React from "react";

import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import RecommendationForm from "./RecommendationForm";

const Recommend = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">

      <Header />

      <Layout>

        <div className="py-10">

          <h1 className="text-4xl font-bold mb-4">
            Movie & Series Recommendation
          </h1>

          <p className="text-gray-400 mb-10">
            Select your preferences and discover something to watch.
          </p>

          <RecommendationForm />

        </div>

      </Layout>

      <Footer />

    </div>
  );
};

export default Recommend;