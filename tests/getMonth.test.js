'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('getMonth', function() {
/* 
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
*/
	it("getMonth(1) == 'January'",function() {
		expect(functions.getMonth(1)).to.equal("January");
	});
	it("getMonth(3) == 'March'",function() {
		expect(functions.getMonth(3)).to.equal("March");
	});
	it("getMonth(12) == 'December'",function() {
		expect(functions.getMonth(12)).to.equal("December");
	});
	it("getMonth(13) will fail",function() {
		// expect(functions.getMonth(1)).to.equal("January"); 
		// expect(functions.getMonth(13)).throws('/Error/');
		expect(function(){functions.getMonth(13)} ).to.throw('Invalid Input');
	});
	it("getMonth(10) == 'October'",function() {
		expect(functions.getMonth(10)).to.equal("October");
	});
	it("getMonth(2) !== 'July'",function() {
		expect(functions.getMonth(2)).to.not.equal("July");
	});
		it("getMonth('Jan') will fail",function() {
		expect(function(){functions.getMonth('Jan')} ).to.throw('Invalid Input');
	});

});