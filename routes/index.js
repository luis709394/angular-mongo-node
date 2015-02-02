// Connect to MongoDB using Mongoose
var mongoose = require('mongoose');
var db;
if (process.env.VCAP_SERVICES) {
   var env = JSON.parse(process.env.VCAP_SERVICES);
   db = mongoose.createConnection(env['mongodb-2.2'][0].credentials.url);
} else {
   db = mongoose.createConnection('localhost', 'playersapp');
}

// Get Poll schema and model
var PlayerSchema = require('../models/Player.js').PlayerSchema;
var Player = db.model('players', PlayerSchema);

// Main application view
exports.index = function(req, res) {
	res.render('index');
};

// JSON API for list of players
exports.list = function(req, res) {
	// Query Mongo for players, just get back the question text
	Player.find({}, 'name', function(error, players) {
		res.json(players);
	});
};




