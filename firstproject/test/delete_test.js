const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
    let nasir;

    beforeEach((done) => {
        nasir = new User({ name: 'Nasir' });
        nasir.save()
            .then(() => done());
    })
    it('model instance remove', () => {
        nasir.remove()
            .then(() => User.findOne({ name: 'Nasir' }))
            .then((user) => {
                assert(user === null)
            });

    });
    it('class method remove', () => {
        User.remove({ name: 'Nasir' })
            .then(() => User.findOne({ name: 'Nasir' }))
            .then((user) => {
                assert(user === null)
            });

    });
    it('class method findOneAndRemove', () => {
        User.findOneAndRemove({ name: 'Nasir' })
            .then(() => User.findOne({ name: 'Nasir' }))
            .then((user) => {
                assert(user === null)
            });

    });
    it('class method findByIdAndRemove', () => {
        User.findByIdAndRemove( nasir._id )
            .then(() => User.findOne({ name: 'Nasir' }))
            .then((user) => {
                assert(user === null)
            });


    });
})