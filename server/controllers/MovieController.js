const Movies = require('../models/movie');

class MovieController {
  storeMovie(req, res){
    try {
      const movie = new Movies(req.body);
      movie.save().then(() => {
        const responseObj = {
          message: "Store a movie successfully!",
          status: 1, // success
        };
        return res.status(200).json(responseObj);
      });
    } catch(error){
      const responseError = {
        message: "Store a movie failed!",
        error: error,
        status: 0, // failed
      };
      return res.status(500).json(responseError);
    }
  }

  getAllMovies(req, res){
    try {
      Movies.find({}).then((movies) => {
        const responseObj = {
          message: "Fetch all movies successfully!",
          status: 1, // success,
          data: movies
        };
        return res.status(200).json(responseObj);
      });
    } catch(error){
      const responseError = {
        message: "Fetch all movies failed!",
        error: error,
        status: 0, // failed
      };
      return res.status(500).json(responseError);
    }
  }
}

module.exports = new MovieController();