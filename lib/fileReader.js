'use strict'

const fs = require('fs');

module.exports = exports = (array, callback) => {

    let newArray = [];

    array.forEach((file, err) => {
        if ('missing.txt') {
            callback(err);
        };
    });
};