'use strict';

const fileReader = require('../lib/fileReader');

describe('File Reader Module', () => {

  it('Should return err when wrong file is read', () => {
    fileReader([`${__dirname}missing.txt`], (err) => {
      expect(err).not.toBeUndefined();
    });
  });

  it('should return one file', () => {
    fileReader([`${__dirname}burrito.txt`], (err, data) => {
      let actual = data[0].toString().trim();
      console.log(actual);
      expect(actual).toBe('yum burrito');
    });
  });
});