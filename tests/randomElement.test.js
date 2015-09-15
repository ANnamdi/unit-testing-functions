'use strict'; // this line is necessary to avoid unnecessary fails
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('randomElement', function() {
	var xArray1 = ["a","a","a"];
	var xArray2 = ["x","y","z"];
	it("randomElement(1) throws Invalid Input ",function() {
		expect(function(){functions.randomElement(1)} ).to.throw('Invalid Input');
	});
	it("randomElement('string') throws Invalid Input ",function() {
		expect(function(){functions.randomElement('string')} ).to.throw('Invalid Input');
	});
	it("randomElement(null) throws Invalid Input ",function() {
		expect(function(){functions.randomElement(null)} ).to.throw('Invalid Input');
	});
	it("randomElement(xArray1) == 'a' ",function() {
		expect(functions.randomElement(xArray1)).to.equal("a");
	});

	it("randomElement(xArray2) == 'x', 'y', or 'z' ",function() {
		// clarify if following is best way to get random
		function itemIsInArray(item) {
       		 return item == 'x' || item == 'y' || item == 'z';
		}
		expect(itemIsInArray(functions.randomElement(xArray2))).to.equal(true);
	});																				

});