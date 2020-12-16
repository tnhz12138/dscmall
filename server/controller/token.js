const jwt = require("jsonwebtoken");

const str = "tnhz";

// 创建token的方法
function createToken(obj) {
    console.log(obj);
    obj.time = Date.now()

    return jwt.sign(obj, str, { expiresIn: 60 * 60 })
}

// 验证token
function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, str, (err, data) => {
            if (err) {
                reject("token失效")
            } else {
                resolve(data)
            }
        })
    })
}

module.exports = {
    createToken,
    verifyToken
}