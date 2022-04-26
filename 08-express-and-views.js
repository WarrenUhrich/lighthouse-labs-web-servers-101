const disneyMovies = require('./disney-movies.json');
const express = require('express');

const app = express();
const port = 7000;

app.set('view engine', 'ejs');

app.get('/disney-movie/:disney_movie_id', (req, res) => {
    const disneyMovieId = parseInt(req.params.disney_movie_id);

    if(typeof disneyMovies[disneyMovieId] !== 'undefined') {
        const disneyMovie = disneyMovies[disneyMovieId];
        res.render('disney-movie', disneyMovie);
    } else {
        res.status(404);
        res.write('404: Resource not Found.');
        res.send();
    }
});

app.listen(port, () => {
    console.log('HTTP server listening on port:', port);
});
