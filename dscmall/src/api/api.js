import ajax from "./ajax";


const Base_URL = "/api";
const Base_URL2 = "http://localhost:3000/adminapi";


export const getHomeList = (url, params) => {
    if (params != null) {
        return ajax(Base_URL + url, params);

    }
    return ajax(Base_URL + url)
}


export const getCategoryData = (url, params, type) => {
    return ajax(Base_URL + url, params, type)
}

export const getDetail = (url, params, type) => {
    return ajax(Base_URL + url, params, type)
}


// 获取验证码
export const getPhoneCode = (url, params, type) => ajax(Base_URL2 + url, params, type)

// 短信登陆
export const getPhoneLogin = (url, params, type) => ajax(Base_URL2 + url, params, type)

// 账号登陆

export const getLogin = (url, params, type) => ajax(Base_URL2 + url, params, type)
