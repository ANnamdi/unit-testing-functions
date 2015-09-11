'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('absVal', function() {
	it('does nothing if the number is positive or zero',function() {
		expect(functions.absVal(2)).to.equal(2);
		expect(functions.absVal(0)).to.equal(0);
	});
	it('makes the number positive if it is negative',function() {
		expect(functions.absVal(-2)).to.equal(2);
	});
	it('should throw an exception if the input is not a number', function(){
		expect(function(){functions.absVal("invalid")} ).to.throw('Invalid Input');
	});
});