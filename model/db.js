/**
 * db.js
 * Database connection
 */
var mongoose = require('mongoose');
var opts = {
    server: {
        socketOptions: { keepAlive: 1 }
    }
};
console.log(`Env PORT: ${process.env.MONGOHQ_URL}`);
mongoose.connect(process.env.MONGOHQ_URL, opts);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("db connected")
});
