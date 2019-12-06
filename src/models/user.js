const mongoose = require('../database');
const bcript = require('bcryptjs');

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

});

UserSchema.pre('save', async function(next) {

    //passa a senha para criptar e 10 é o numero de vezes em que o hash e gerado para ser senha mais forte
    const hash = await bcript.hash(this.password, 10);
    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;