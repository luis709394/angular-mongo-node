var mongoose = require('mongoose');

// Document schema for players
exports.PlayerSchema = new mongoose.Schema({
	name: { type: String, required: true },
	team: { type: String, required: true }
})