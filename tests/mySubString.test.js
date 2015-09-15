'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('mySubstring', function() {


	it("mySubstring(1,2,1) throws Invalid Input ",function() {
		expect(function(){functions.mySubstring(1)} ).to.throw('Invalid Input');
	});
	it("mySubstring(null,1,2) throws Invalid Input ",function() {
		expect(function(){functions.mySubstring(null)} ).to.throw('Invalid Input');
	});
	it("mySubstring('string') throws Invalid Input ",function() {
		expect(function(){functions.mySubstring('string')} ).to.throw('Invalid Input');
	});
	it("mySubstring('abcde', 2, 3) == 'cd' ",function() {
		expect(functions.mySubstring('abcde', 2, 3)).to.equal('cd');
	});
	it("mySubstring('treasureisland', 4, 9) == 'sureis' ",function() {
		expect(functions.mySubstring('treasureisland', 4, 9)).to.equal('sureis');
	});


});