'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProjectSchema = Schema({

        name: String,
        description: String,
        category: String,
        year: Number,
        languages: [String]

});

module.exports = mongoose.model('Project',ProjectSchema);