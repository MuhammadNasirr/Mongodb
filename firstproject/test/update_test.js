const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
    let nasir;

    beforeEach((done) => {
        nasir = new User({ name: 'Nasir' })
        nasir.save()
            .then(() => done());
    })
    function assertName(operation, done) {
        operation
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Mubashir');
                done();
            });

    }

    it('instance set n save', (done) => {
        nasir.set('name', 'Mubashir')
        assertName(nasir.save(), done)
    });
    it('A model instance can update', (done) => {
        assertName(nasir.update({ name: 'Mubashir' }, done))
    });
    it('A model class can update', (done)=>{
        assertName(
            User.update({name: 'Nasir'},{name: 'Mubashir'}),
            done
        )
        
    })
    it('A model class can update one record', (done)=>{
        assertName(
        User.findOneAndUpdate({name: 'Nasir'},{name: 'Mubashir'}),
        done
        );
    })
    it('A model class can find a record with an id and update', (done)=>{
        assertName(
            User.findByIdAndUpdate(nasir._id, {name: 'Mubashir'}),
            done 
        )

    })
})
;