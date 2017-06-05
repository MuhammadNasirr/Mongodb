const assert = require('assert');
const User = require('../src/user');

describe('Creating Records', () => {
    it('save a user', () => {
        const nasir = new User({ name: 'Nasir' });
        nasir.save();
        // assert(1 + 1 === 2)
    });
});