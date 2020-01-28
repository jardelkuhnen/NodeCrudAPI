const mongoose = require('mongoose');

/**
 * URL Mongo Cluster database
 */
let urlMongo = 'mongodb://mongo:localhost:45896,localhost:45897,localhost:45898/apinode'
mongoose.connect(urlMongo, { useNewUrlParser: true, useUnifiedTopology: true }, );

/**
 * URL Mongo simple database
 */
//mongoose.connect('mongodb://localhost:/apinode', { useNewUrlParser: true, useUnifiedTopology: true }, );
mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;

module.exports = mongoose;