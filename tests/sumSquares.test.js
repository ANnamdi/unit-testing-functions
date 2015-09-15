'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('sumSquares', function() {

	//it("sumSquares(1) == ''",function() {
	//	expect(functions.sumSquares(1)).to.equal("");
	// });
	it("sumSquares(-1) throws Invalid Input ",function() {
		expect(function(){functions.sumSquares(-1)} ).to.throw('Invalid Input');
	});
	it("sumSquares('string') throws Invalid Input ",function() {
		expect(function(){functions.sumSquares('string')} ).to.throw('Invalid Input');
	});
	it("sumSquares(null) throws Invalid Input ",function() {
		expect(function(){functions.sumSquares(null)} ).to.throw('Invalid Input');
	});
	it("sumSquares(2.3) throws Invalid Input ",function() {
		expect(function(){functions.sumSquares(2.3)} ).to.throw('Invalid Input');
	});
	it("sumSquares(1) == 1 ",function() {
		expect(functions.sumSquares(1)).to.equal(1);
	});
	it("sumSquares(2) == 5 ",function() { // sum of squares leading up to N = 1^1 + 2^2
		expect(functions.sumSquares(2)).to.equal(5);
	});
	it("sumSquares(3) == 32 ",function() { // sum of squares leading up to N = 1^1 + 2^2 + 3^3
		expect(functions.sumSquares(3)).to.equal(32);
	});
	it("sumSquares(4) == 288 ",function() { // sum of squares leading up to N = 1^1 + 2^2 + 3^3 + 4^4 
		expect(functions.sumSquares(4)).to.equal(288);
	});
});