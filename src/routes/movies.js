const { Router } = require('express');
const router = Router();

const movies = require("../example.json");
const _ = require('underscore');


router.get('/', (req, res) => {
  res.json(movies);
});

router.post('/', (req, res) => {
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    const id = movies.length + 1;
    const newMovie = { id, ...req.body };
    movies.push(newMovie);
    res.json(movies);
  } else {
    res.status(400).json({ "error": "Bad Request" });
  }

});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;

  if (title && director && year && rating) {
    _.each(movies, (movie, i) => {
      if (movie.id == id) {

        movie.title = title;
        movie.director = director;
        movie.year = year;
        movie.rating = rating;

      }
    });
    res.json(movies);
  } else {
    res.status(500).json({ "error": "there was an error." });
  }
})


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  _.each(movies, (movie, i) => {
    if (movie.id == id) {
      movies.splice(i, 1);
    }
  })
  res.send(movies);
});


module.exports = router;