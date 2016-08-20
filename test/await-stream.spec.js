'use strict';
const spec = require('stream-spec');
const expect = require('chai').expect;
const awaitStream = require('../lib/await-stream');

function readStream(stream, done) {
	let array = [];
	stream.on('data', item => array.push(item));
	stream.on('error', done);
	stream.on('end', () => done(null, array));
}

function writeStream(array, stream) {
	array.forEach(item => stream.write(item));
	stream.end();
}

describe('test await-stream', function() {
	it('should properly handle stream', function (done) {
		let doubler = awaitStream(data => Promise.resolve(data * 2));
		spec(doubler).through().validateOnExit();
		expect(doubler).to.have.property('writable').to.equal(true);
		expect(doubler).to.have.property('readable').to.equal(true);

		let input = [1, 2, 3, 7, 5, 3, 1, 9, 0, 2, 4, 6];
		readStream(doubler, (err, output) => {
			expect(output).to.deep.equal(input.map(item => item * 2));
			done();
		});
		writeStream(input, doubler);
	});
});