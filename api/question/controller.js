/**
 * Created by khang on 3/15/2017.
 */
'use strict';

var Model = require('./model');
module.exports = {
    findAll: function (req, res) {
        Model.find({}).exec(function (err, data) {
            if (!err) {
                console.log(data);
                res.json(data);
            }
            else
                res.end(err);
        });
    },
    addQuestion: function (req, res) {
        // console.log("Req.body: " + req.body);
        if (req.body.question && req.body.answers.a && req.body.answers.b && req.body.answers.c && req.body.answers.d && req.body.choice && req.body.level) {
            {
                Model.findOne({question: req.body.question}).exec(function (err, data) {
                    if (data) {
                        res.json({status: false, message: "Question are already exist!"});
                    } else {
                        var newQuestion = {
                            question: req.body.question,
                            answers: {
                                a: req.body.answers.a,
                                b: req.body.answers.b,
                                c: req.body.answers.c,
                                d: req.body.answers.d
                            },

                            choice: req.body.choice,
                            level: req.body.level
                        }
                        console.log(newQuestion);
                        Model.create(newQuestion, function (err, data) {
                            if (!err)
                                res.json({status: true, message: "Success"});
                            else
                                res.json({status: false, message: "Create Failed: " + err});
                        });
                    }
                });


            }
        }
        else {
            res.json({status: false, message: "Undefine"});
        }
    }
    ,
    wellcome: function (req, res) {
        console.log("Well come");
        res.end("Well come");
    }
}
