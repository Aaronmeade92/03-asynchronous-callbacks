'use strict'

const fileReader = require('../lib/fileReader');

describe('File Reader Module', () => {

    it('Should return err when wrong file is read', () => {

        fileReader([`${__dirname}missing.txt`], (err) => {

            expect(err).not.toBeUndefined();
        });
    });
});