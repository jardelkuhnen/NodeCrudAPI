const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8000, function() {
    console.log('Aplicaçao rodando na porta 8000');
});

app.get('/', (req, res) => {
    res.send('Voce chegou!');
});


require('./controllers/authController')(app);