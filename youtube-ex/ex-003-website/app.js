const express = require('express');
const app = express();
const port = 5000;

// Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/image', express.static(__dirname + '/public/image'));
app.use('/js', express.static(__dirname + '/public/js'));

// Templating Engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Route 
const newsRouter = require('./src/routes/news');

app.use('/', newsRouter)

// Listen on port 5000
app.listen(port, () => {
    console.log(`Listening on https://localhost:${port}`);
});
