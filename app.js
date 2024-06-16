// Web-Server code

const express = require('express');
const app = express();

// Set the view engine to EJS

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// render the separate pages (also allowing for absolute urls)

app.get('/', (req, res) => {
	res.render('pages/index');
})

app.get('/cam', (req, res) => {
	res.render('pages/cam');
})

app.get('/ar', (req, res) => {
	res.render('pages/ar');
})

app.get('/ttslearning', (req, res) => {
	res.render('pages/ttslearning');
})
app.get('/posture', (req, res) => {
	res.render('pages/posture');
})
app.get('/chat', (req, res) => {
	res.render('pages/chat');
})
// Initiate the server on port 8080

app.listen(80)