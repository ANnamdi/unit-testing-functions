'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('myMax', function() {
	it('sorts alphabetically a string',function() {
		expect(functions.myMax("edbca")).to.equal("abcde");
	});
	it('should throw an exception if the input is not a string', function(){
		expect(function(){functions.myMax(1)} ).to.throw('Invalid Input');
	});
});