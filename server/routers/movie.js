const express = require('express');
const router = express.Router();
const movieController = require('../controllers/MovieController');

// restful API
// get method: get one movie, get all movies
// post method: add one movie, delete all movies
// put: edit one movie
// delete: delete one movie

router.post('/', movieController.storeMovie);
router.get('/', movieController.getAllMovies);

module.exports = router;