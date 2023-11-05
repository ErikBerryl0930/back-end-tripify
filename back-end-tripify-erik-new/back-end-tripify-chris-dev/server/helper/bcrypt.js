const bcrypt = require('bcrypt')
const saltRound = +process.env.SALT_ROUND || 10;

const encryptPwd = password => {
    return bcrypt.hashSync(String(password), saltRound)
}

const decryptPwd = (password, hashPwd) => {
    return bcrypt.compareSync(String(password), hashPwd)
}

module.exports = {
    encryptPwd, decryptPwd
}