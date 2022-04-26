const disneyMovies = require('./disney-movies.json');
const express = require('express');

const app = express();
const port = 9000;

app.get('/disney-movie/:disney_movie_id', (req, res) => {
    const disneyMovieId = parseInt(req.params.disney_movie_id);

    if(typeof disneyMovies[disneyMovieId] !== 'undefined') {
        const disneyMovie = disneyMovies[disneyMovieId];
        res.write(`<!DOCTYPE html>
            <html>
                <head>
                    <title>Disney Movie: ${disneyMovie.name}</title>
                </head>
                <body>
                    <h1>Disney Movie: ${disneyMovie.name}</h1>
                    <p>
                        <img src="${disneyMovie.image}">
                        <strong>${disneyMovie.name}</strong>
                        (${disneyMovie.year})
                        [Rating: ${disneyMovie.imdbRating} ★]
                    </p>
                </body>
        </html>
        `);
        res.send();
    } else {
        res.status(404);
        res.write('404: Resource not Found.');
        res.send();
    }
});

app.listen(port, () => {
    console.log('HTTP server listening on port:', port);
});
