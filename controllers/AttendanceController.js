var AttendanceModel = require('../models/AttendanceModel.js');

/**
 * AttendanceController.js
 *
 * @description :: Server-side logic for managing Attendances.
 */
module.exports = {

    /**
     * AttendanceController.list()
     */
    list: function (req, res) {
        AttendanceModel.find(function (err, Attendances) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Attendance.',
                    error: err
                });
            }

            return res.json(Attendances);
        });
    },

    /**
     * AttendanceController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        AttendanceModel.findOne({_id: id}, function (err, Attendance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Attendance.',
                    error: err
                });
            }

            if (!Attendance) {
                return res.status(404).json({
                    message: 'No such Attendance'
                });
            }

            return res.json(Attendance);
        });
    },

    /**
     * AttendanceController.create()
     */
    create: function (req, res) {
        var Attendance = new AttendanceModel({
			date : req.body.date,
			classid : req.body.classid,
			subjectid : req.body.subjectid,
			studentId : req.body.studentId,
			professorId : req.body.professorId,
			status : req.body.status
        });

        Attendance.save(function (err, Attendance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Attendance',
                    error: err
                });
            }

            return res.status(201).json(Attendance);
        });
    },

    /**
     * AttendanceController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        AttendanceModel.findOne({_id: id}, function (err, Attendance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Attendance',
                    error: err
                });
            }

            if (!Attendance) {
                return res.status(404).json({
                    message: 'No such Attendance'
                });
            }

            Attendance.date = req.body.date ? req.body.date : Attendance.date;
			Attendance.classid = req.body.classid ? req.body.classid : Attendance.classid;
			Attendance.subjectid = req.body.subjectid ? req.body.subjectid : Attendance.subjectid;
			Attendance.studentId = req.body.studentId ? req.body.studentId : Attendance.studentId;
			Attendance.professorId = req.body.professorId ? req.body.professorId : Attendance.professorId;
			Attendance.status = req.body.status ? req.body.status : Attendance.status;
			
            Attendance.save(function (err, Attendance) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Attendance.',
                        error: err
                    });
                }

                return res.json(Attendance);
            });
        });
    },

    /**
     * AttendanceController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        AttendanceModel.findByIdAndRemove(id, function (err, Attendance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Attendance.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
