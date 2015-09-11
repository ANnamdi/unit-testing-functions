'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('concatenateArrays', function() {
	it('should exist', function() {
		expect(functions.concatenateArrays).not.to.be.undefined;  //this line of code checks to see if function exists.
	});
	it('returns the contatenated arrays',function() {
		expect(functions.concatenateArrays([1,2,3], [4])).to.eql([1,2,3,4]);
	});
	it('should throw an exception if the input is not arrays', function(){
		expect(function(){functions.concatenateArrays(1,2)} ).to.throw('Invalid Input');
	});
});