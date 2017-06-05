const assert = require('assert');
const User = require('../src/user');

describe('Creating Records', () => {
    it('save a user', (done) => {
        // const nasir = new User({ name: 'Nasir' });
        // nasir.save()
        //     .then(() => {
        //         assert(!nasir.isNew);
        //         done();
        //     });
        const zahid = new User({ name: 'Zahid' });
        zahid.save()
            .then(() => {
                assert(!zahid.isNew);
                done();
            });
        // assert(1 + 1 === 2)
    });
});