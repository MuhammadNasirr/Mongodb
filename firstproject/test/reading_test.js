const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
    let zahid;
    beforeEach(() => {
        zahid = new User({ name: 'Zahid' });
        zahid.save()
            .then(() => done());
    });

    it('find all users with the name of nasir', (done) => {
        User.findOne({ name: 'Zahid' })
            .then((user) => {
                console.log(user);
                done();
            });
    });
});