'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMin', function() {
	it('returns smaller of two integers',function() {
		expect(functions.myMin(3,4)).to.equal(3);
	});
	it('should throw an exception if the input is not an integer', function(){
		expect(function(){functions.myMin(1)} ).to.throw('Invalid Input');
	});
});