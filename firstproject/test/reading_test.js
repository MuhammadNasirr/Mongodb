const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', (done) => {
    let zahid;
    beforeEach((done) => {
        zahid = new User({ name: 'Zahid' });
        zahid.save()
            .then(() => done());
    });

    it('find all users with the name of nasir', (done) => {
        User.find({ name: 'Zahid' })
            .then((users) => {
                assert(users[0]._id.toString() === zahid._id.toString());
                done();
            });
    });
    it('find all users with the name of zahid', (done) => {
        User.findOne({ _id: zahid._id })
            .then((user) => {
                assert(user.name === 'Zahid');
                done();
            });
    });
});