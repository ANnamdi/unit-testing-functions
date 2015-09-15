'use strict';
var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('insertDashes', function() {


	it("insertDashes(1) throws Invalid Input ",function() {
		expect(function(){functions.insertDashes(1)} ).to.throw('Invalid Input');
	});
	it("insertDashes(null) throws Invalid Input ",function() {
		expect(function(){functions.insertDashes(null)} ).to.throw('Invalid Input');
	});
	it("insertDashes('abba test') => a-b-b-a t-e-s-t",function() {
		expect(functions.insertDashes('abba test') ).to.equal('a-b-b-a t-e-s-t');
	});
	it("insertDashes('abba test alpha') => a-b-b-a t-e-s-t a-l-p-h-a",function() {
		expect(functions.insertDashes('abba test alpha') ).to.equal('a-b-b-a t-e-s-t a-l-p-h-a');
	});



});