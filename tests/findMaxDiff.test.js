'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('findMaxDiff', function() {

	//it("sumSquares(1) == ''",function() {
	//	expect(functions.sumSquares(1)).to.equal("");
	// });
	it("findMaxDiff(-1) throws Invalid Input ",function() {
		expect(function(){functions.findMaxDiff(-1)} ).to.throw('Invalid Input');
	});
		it("findMaxDiff(1) throws Invalid Input ",function() {
		expect(function(){functions.findMaxDiff(1)} ).to.throw('Invalid Input');
	});
	it("findMaxDiff(null) throws Invalid Input ",function() {
		expect(function(){functions.findMaxDiff(null)} ).to.throw('Invalid Input');
	});
	it("findMaxDiff('string') throws Invalid Input ",function() {
		expect(function(){functions.findMaxDiff('string')} ).to.throw('Invalid Input');
	});


	it("findMaxDiff([-1]) throws Invalid Input ",function() {
		expect(function(){functions.findMaxDiff([-1])} ).to.throw('Invalid Input');
	});
	it("findMaxDiff([1]) throws Invalid Input ",function() {
		expect(function(){functions.findMaxDiff([1])} ).to.throw('Invalid Input');
	});
	it("findMaxDiff([null,null]) throws Invalid Input ",function() {
		expect(function(){functions.findMaxDiff([null,null])} ).to.throw('Invalid Input');
	});
	it("findMaxDiff(['string','string']) throws Invalid Input ",function() {
		expect(function(){functions.findMaxDiff(['string','string'])} ).to.throw('Invalid Input');
	});

	var sampleArray = [1,9]; // 8
	var sampleArray2 = [2,0,11]; // 11
	var sampleArray3 = [19,1,1,2,0]; // 18

	it("findMaxDiff(sampleArray) == 8 ",function() {
		expect(functions.findMaxDiff(sampleArray)).to.equal(8);
	});
	it("findMaxDiff(sampleArray2) == 11 ",function() {
		expect(functions.findMaxDiff(sampleArray2)).to.equal(11);
	});
	it("findMaxDiff(sampleArray3) == 18 ",function() {
		expect(functions.findMaxDiff(sampleArray3)).to.equal(18);
	});



});