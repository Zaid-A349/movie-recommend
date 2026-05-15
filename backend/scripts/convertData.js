const fs = require("fs");

const csv = require("csv-parser");

const results = [];

fs.createReadStream("../data/netflix_titles.csv")
  .pipe(csv())

  .on("data", (data) => {

    results.push({
      title: data.title,

      type: data.type.toLowerCase(),

      genre: data.listed_in
        ? data.listed_in.split(",").map((g) => g.trim())
        : [],

      year: Number(data.release_year),

      rating: data.rating,

      description: data.description,
    });
  })

  .on("end", () => {

    fs.writeFileSync(
      "../data/movies.json",
      JSON.stringify(results, null, 2)
    );

    console.log("movies.json created");
  });