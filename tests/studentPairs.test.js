var expect = require('chai').expect;
var functions = require('../scripts/main.js');

describe('studentPairs', function() {
	it('should exist', function(){
		expect(functions.studentPairs).not.to.be.undefined;
	})
	it('should not accept empty input', function(){
		expect(function() {functions.studentPairs()}).to.throw('Invalid input');
	});
	it('should not accept string input', function()) {
		expect(function() {functions.studentPairs('g')}).to.throe('Invalid input');
	})
	it('should return an array', function()) {
		expect(functions.studentPairs(['a','b'])).to.be.instanceof(Array);
	});
	it('should not allow non-string studen', function()) {
		expect(function() {functions.studentPairs('g')}).to.throe('Invalid input');
	})
});
