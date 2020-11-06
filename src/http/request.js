import axios from "axios";

/**
 * @param {string} url
 */

class Request {
    //给形参url添加""默认值
    get(url = "") {
        if (url === "") {
            return Promise.reject(new Error("url is requied"));
        }
        return axios.get(url);
    }
}

export default new Request(); //直接实例化 用的时候就不用实例化了
