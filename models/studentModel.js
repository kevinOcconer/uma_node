var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var studentSchema = new Schema({
	'userid' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'user'
	},
	'classes' : [{
		type: Schema.Types.ObjectId,
		ref: 'class'
   }]
});

module.exports = mongoose.model('student', studentSchema);
