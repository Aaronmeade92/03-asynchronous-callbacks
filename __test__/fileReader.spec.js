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
    fileReader(['./data/burrito.txt'], (err, data) => {
      console.log(data);
      let actual = data.toString().trim();
      console.log(actual);
      expect(actual).toBe('yum burrito');
      done();
    });
  });
});