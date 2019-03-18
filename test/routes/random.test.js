require('dotenv').config();
// require('../lib/utils/connect')();

const request = require('supertest');
const app = require('../../lib/app');


describe('get random quote', () => {
    it('can get a random quote', () => {
        return request(app)
            .get('/random')
            .then(res => res.body)
            .then(random => {
                console.log(random);
                expect(random).toBeEqual('random');
            });
    });  
});
