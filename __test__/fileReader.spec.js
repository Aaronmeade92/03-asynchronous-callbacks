'use strict';

const fileReader = require('../lib/fileReader');

describe('File Reader Module', () => {

  it('Should return err when wrong file is read', (done) => {
    fileReader([`${__dirname}missing.txt`], (err) => {
      expect(err).not.toBeUndefined();
      done();
    });
  });

  it('should return one file', (done) => {
    fileReader([`${__dirname}burrito.txt`], (err, data) => {
      let actual = data[0].toString().trim();
      console.log(actual);
      expect(actual).toBe('yum burrito');
      done();
    });
  });
});