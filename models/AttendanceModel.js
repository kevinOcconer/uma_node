var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var AttendanceSchema = new Schema({
	'date' : Date,
	'classid' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'class'
	},
	'subjectid' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'subject'
	},
	'studentId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'student'
	},
	'professorId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'professor'
	},
	'status' : String
},{ timestamps: true });

module.exports = mongoose.model('Attendance', AttendanceSchema);
