/**
 * Created by khang on 3/15/2017.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var question = new Schema({
    question: {
        type: String, required: true, default: 'Hello world'
    },
    answers: {
        a: {
            type: String, required: true, default: 'Hello world'
        },
        b: {
            type: String, required: true, default: 'Hello world'
        },
        c: {
            type: String, required: true, default: 'Hello world'
        },
        d: {
            type: String, required: true, default: 'Hello world'
        }
    },
    choice: {type: Number, required: true, min: 1, max: 4, default: 1},
    level: {type: Number, required: true, min: 1, max: 3, default: 1}
});

module.exports = mongoose.model('Question', question);
