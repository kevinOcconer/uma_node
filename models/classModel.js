var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var classSchema = new Schema({
	'name' : String,
	'subjects':[{
		type: Schema.Types.ObjectId,
		ref: 'subject'
   }],
   'students':[{
		type: Schema.Types.ObjectId,
		ref: 'student'
   }]
});

module.exports = mongoose.model('class', classSchema);
