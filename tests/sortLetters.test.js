'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sortLetters', function() {
	it('sorts alphabetically a string',function() {
		expect(functions.sortLetters("edbca")).to.equal("abcde");
	});
	it('should throw an exception if the input is not a string', function(){
		expect(function(){functions.sortLetters(1)} ).to.throw('Invalid Input');
	});
});