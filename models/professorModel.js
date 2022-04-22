var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var professorSchema = new Schema({
	'userid' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'classes'
	},
	'classes' : [{
		type: Schema.Types.ObjectId,
		ref: 'class'
   }]
});

module.exports = mongoose.model('professor', professorSchema);
