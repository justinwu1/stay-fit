const crypto = require('crypto');
const util = require('util');
const scrypt = util.promisify(crypto.scrypt);
const User = require('../users/user');

module.exports = {
    getError(errors, prop) {
        try {
            return errors.mapped()[prop].msg;
        } catch (err) {
            return '';
        }
    },
    async comparePasswords(saved, supplied){
        const [hashed, salt] = saved.split('.');
        const hashedSupplied = await scrypt(supplied, salt, 64);
        return hashed === hashedSupplied.toString('hex');
    }
};


