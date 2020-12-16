const { requsetQuery, connection } = require("../database/db");
const moment = require("moment");
const { connect } = require("../routers/users");

const stringRandom = require("string-random")
// 加密模块
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const svgCaptcha = require("svg-captcha")


const JWT = require("./token");

// 定义一个变量来临时存储手机号
var tempPhone = null;
// 定义一个变量来临时存储手机验证码
var tempCode = null;
// 定义一个变量来存储随机验证码
var tempCaptcha = null;


// 获取用户列表
exports.UserList = async (req, res) => {

    let page = req.query.page || 1;
    let size = req.query.size || 10;

    let countSql = "SELECT COUNT(*) from th_users WHERE is_show=1"
    const totalSql = await requsetQuery(countSql);
    const total = totalSql[0]['COUNT(*)']

    let nowPage = (page - 1) * size


    let pageTotal = Math.ceil(total / size)

    const userSql = `select * from th_users where is_show=1 ORDER BY age DESC LIMIT ${nowPage},${size}`;
    const userList = await requsetQuery(userSql)
    res.json({
        total,
        page: Number(page),
        size: Number(size),
        pageTotal,
        data: userList
    })
}

// 修改用户
exports.Edituser = async (req, res) => {
    console.log(req.body);
    let editSql = `UPDATE th_users SET user_name="${req.body.user_name}" WHERE user_id=${req.body.user_id}`
    let resultEdit = await requsetQuery(editSql);
    if (resultEdit.changedRows == 1) {
        res.json({
            msg: "用户修改成功",
            status: 200,
            data: resultEdit
        })
    }

}

exports.UserRegister = (req, res) => {
    // 需要POST发送数据
    console.log(req.body);
    let user_name = req.body.user_name;
    let login_password = req.body.login_password;
    let phone = req.body.phone;

    let sql_name = "select user_name from th_users where user_name=? and is_show=1"
    let nowDate = moment().format('YYYY-MM-DD hh:mm:ss')

    connection.query(sql_name, user_name, (err, result_name) => {
        if (err) {
            return res.json({
                msg: "用户注册失败",
                status: 1001,
                data: err
            })
        }

        if (result_name == "") {
            let sql_phone = "select phone from th_users where phone=? and is_show=1"

            connection.query(sql_phone, phone, (err, result_phone) => {
                if (err) {
                    return res.json({
                        msg: "用户注册失败",
                        status: 1002,
                        data: err
                    })
                }

                if (result_phone == "") {
                    let sql_add = `insert into th_users set user_name=?,login_password=?,phone=?,is_show=1,create_time="${nowDate}"`
                    let hashPassword = bcrypt.hashSync(login_password, salt);

                    connection.query(sql_add, [user_name, hashPassword, phone], (err, result) => {
                        if (err) {
                            return res.json({
                                msg: "用户注册失败",
                                status: 1003,
                                data: err
                            })
                        }
                        if (result.affectedRows == 1) {
                            return res.json({
                                msg: "恭喜您注册成功，可以去登陆了",
                                status: 200,
                                data: result
                            })
                        } else {
                            return res.json({
                                msg: "用户注册失败",
                                status: 1004,
                            })
                        }
                    })
                } else {
                    return res.json({
                        msg: "该手机号已存在，请更换手机号",
                        status: 3001,
                    })
                }
            })
        } else {
            return res.json({
                msg: "该用户名已存在，请更换用户名",
                status: 3002,
            })
        }
    })
}


// 账号登陆
exports.UserLogin = async (req, res) => {
    // 需要POST发送数据
    console.log(req.body.user_name);
    const user_name = req.body.user_name;
    const captcha = req.body.captcha;
    var pd = new RegExp(tempCaptcha, "gi")
    var test = pd.test(captcha)

    if (!test) {
        return res.json({
            msg: "验证码输入错误",
            status: 1010
        })
    }

    const sql = "select user_name,login_password from th_users where user_name=? and is_show=1"
    connection.query(sql, user_name, (err, result) => {
        if (err) {
            return res.json({
                msg: "数据库查询失败",
                status: 1011
            })
        }
        if (result == "") {
            return res.json({
                msg: "该用户不存在,快去注册一个呗",
                status: 1012
            })
        } else {
            const login_password = bcrypt.compareSync(req.body.login_password, result[0].login_password)
            console.log(login_password);
            if (login_password !== true) {
                return res.status(1013).json({
                    msg: "密码错误,请重新输入"
                })
            } else {

                let token = JWT.createToken({
                    login: true,
                    user_name
                })
                return res.json({
                    msg: "登陆成功",
                    status: 200,
                    data: result,
                    token
                })
            }
        }
    })
}


// 获取验证码的接口
exports.GetIdentifyingCode = async (req, res) => {
    // 第一步,输入正确的手机号
    // 第二步,点击获取验证码,发送请求
    // 第三步,短信内容+随机验证码
    var phone = req.body.phone;
    tempPhone = req.body.phone; // 给临时手机号赋值
    var identCode = ("0000" + Math.floor(Math.random() * 999999)).slice(-6)
    tempCode = identCode
    res.json({
        msg: "发送成功",
        status: 200,
        data: identCode
    })
}

// 短信登陆
exports.PhoneLogin = async (req, res) => {
    var phone = req.body.phone;
    var code = req.body.code;
    var captcha = req.body.captcha;

    var pd = new RegExp(tempCaptcha, "gi")
    var test = pd.test(captcha)

    if (!test) {
        return res.json({
            msg: "验证码不匹配",
            status: 1101
        })
    } else if (phone != tempPhone) {
        return res.json({
            msg: "手机号不匹配",
            status: 1102
        })
    } else if (code != tempCode) {
        return res.json({
            msg: "短信验证码错误",
            status: 1103
        })
    } else {
        // 判断手机号是否存在
        // 1 如果手机号不存在,要将输入的手机号注册
        const sql_phone = "SELECT * from th_users WHERE phone=? AND is_show=1"
        console.log("这错了111");
        const result_phone = await requsetQuery(sql_phone, phone)
        console.log("这错了222");

        console.log(result_phone);
        if (result_phone == 0) {
            const user_name = "th_" + stringRandom(10);
            let nowDate = moment().format('YYYY-MM-DD hh:mm:ss');
            let sql_register = `insert into th_users  (user_name,phone,is_show,create_time) values ("${user_name}","${phone}","1","${nowDate}")`
            let phoneRegister = await requsetQuery(sql_register)
            let result = await requsetQuery(sql_phone, phone)
            if (phoneRegister.affectedRows == 1) {  //注册成功
                let token = JWT.createToken({
                    login: true,
                    phone: result[0].phone
                })
                return res.json({
                    status: 200,
                    msg: "登陆成功",
                    data: result,
                    token
                })
            } else {
                return res.json({
                    status: 500,
                    msg: "服务器发生错误"
                })
            }
        } else {// 2 如果手机号存在,直接登录

            let token = JWT.createToken({
                login: true,
                phone: result_phone[0].phone
            })
            return res.json({
                status: 200,
                msg: "登陆成功",
                data: result_phone,
                token
            })
        }

    }

}


exports.SvgCaptcha = async (req, res) => {
    const captcha = svgCaptcha.create({
        size: 4,//随机字符串的大小
        ignoreChars: '0o1i',//过滤掉一些字符，例如0o1i
        noise: 2,//噪声线数
        color: true,//字符将具有不同的颜色而不是灰色，如果设置了背景选项，则为true
        background: '#fff'// SVG图片的背景颜色
    });
    tempCaptcha = captcha.text
    res.type('svg');
    res.send(captcha.data)

}