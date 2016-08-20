'use strict';
const Transform = require('stream').Transform;

class AwaitStream extends Transform {
	constructor(mapper, opts) {
		super(opts);
		this._mapper = mapper;
	}

	_transform(data, encoding, done) {
		this._mapper(data).then(result => {
			done(null, result);
		}).catch(error => {
			done(error);
		});
	}
}

module.exports = function (mapper, opts) {
	opts = opts || {};
	return new AwaitStream(mapper, Object.assign(opts, { objectMode: true }));
};