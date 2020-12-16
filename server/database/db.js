const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'localhost',  // 域名或者ip地址
    user: 'root',   // mysql数据库名字
    password: '',   //mysql数据库密码
    database: 'shop',   // 连接的数据库  
})


// console.log(connection);

// const userSql = "select * from th_users"

// connection.query(userSql, (err, data) => {
//     if (!err) {
//         console.log(data);
//     }
// });

// 封装查询方法,给不同的sql查询对应的数据

function requsetQuery(sql, sqlArr) {
    return new Promise((resolve, reject) => {
        connection.query(sql, sqlArr, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}


// 暴露
module.exports = {
    connection,
    requsetQuery
}