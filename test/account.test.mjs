import request from 'supertest';
import { expect } from 'chai';
import app from '../src/index.mjs';
import Account from '../src/models/Account.mjs';

describe('Account API', () => {
    beforeEach(async() => {
        await Account.deleteMany({});
    });

    it('should create a new account', async() => {
        const res = await request(app)
            .post('/api/accounts')
            .send({
                accountNumber: '123456',
                owner: 'John Doe',
                balance: 100,
            });
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('accountNumber', '123456');
    });

});