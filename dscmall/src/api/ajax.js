import Axios from "axios";

export default function ajax(url = "", params = {}, type = "get") {
    let promise = null;
    return new Promise((resolve, reject) => {
        if (type === "get") {
            let paramsStr = "";
            Object.keys(params).forEach((key) => {
                paramsStr += key + "=" + params[key] + "&"
            });
            if (paramsStr != "") {
                paramsStr = paramsStr.slice(0, -1);
                url = url + "?" + paramsStr;
            }
            // console.log(url);
            promise = Axios.get(url)
        } else if (type === "post") {
            promise = Axios.post(url, params)
        }
        promise.then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err)
        })
    })
}