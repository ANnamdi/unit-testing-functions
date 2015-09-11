'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('fixProperNoun', function() {
	it('fixes a one word noun',function() {
		expect(functions.fixProperNoun("micHael")).to.equal("Michael");
	});
	it('should throw an exception if the input is not a string', function(){
		expect(function(){functions.fixProperNoun(1)} ).to.throw('Invalid Input');
	});
});