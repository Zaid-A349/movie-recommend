const fs = require("fs");

const csv = require("csv-parser");

const posters = [];

fs.createReadStream("../data/movie_poster.csv")
  .pipe(csv())

  .on("data", (data) => {

    console.log(data);

    posters.push(data);
  })

  .on("end", () => {

    console.log("CSV Loaded");

    console.log(posters[0]);
  });