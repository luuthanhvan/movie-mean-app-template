const mg = require("mongoose");

const Schema = mg.Schema;

const Movies = new Schema({
  movieName: { type: String, required: true },
  genre: { type: String, required: true },
  runningTime: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  cast: [{ type: String, required: true }],
  director: { type: String, required: true },
  status: { type: String, required: true },
  posterImg: { type: String, required: true },
});

module.exports = mg.model("Movies", Movies);