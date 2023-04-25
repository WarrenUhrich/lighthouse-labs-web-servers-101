const express = require('express');

/////////////////////////////////////////////////////////////////////
// Configuration
/////////////////////////////////////////////////////////////////////

const PORT = 3456;
const app = express();
app.set('view engine', 'ejs'); // Activate EJS

/////////////////////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////////////////////

// Traffic logger middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Please run the next middleware.
});

/////////////////////////////////////////////////////////////////////
// Listener
/////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
    console.log('Express app listening on:', PORT);
});

/////////////////////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
    res.status(200);
    res.contentType('text/html');
    res.render('homepage');
});

app.get('/about', (req, res) => {
    res.status(200);
    res.contentType('text/html');
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.status(200);
    res.contentType('text/html');
    res.render('contact');
});

app.get('/programming-languages', (req, res) => {
    res.status(200);
    res.contentType('text/html');

    const programmingLanguages = [
        'JavaScript',
        'HTML',
        'CSS',
        'PHP',
        'Python',
        'C#',
        'Ruby'
    ];

    const templateVar = {
        pageTitle: 'Programming Languages',
        programmingLanguages: programmingLanguages
    };
    res.render('programming-languages', templateVar);
});

app.get('*', (req, res) => {
    res.status(404);
    res.contentType('text/html');
    res.render('404');
});
