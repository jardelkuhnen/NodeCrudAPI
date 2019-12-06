const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {

    const { email } = req.body;

    try {

        if (await User.findOne({ email })) {
            return res.status(400).send({ error: 'Email já cadastrado!'})
        }

        console.log(req.body);
        const user = await User.create(req.body);
        
        user.password = undefined;

        return res.send(user);
    } catch (erro) {
        return res.status(400).send({ error: 'Falhou ao inserir registro!' });
    }

});

module.exports = app => app.use('/auth', router);