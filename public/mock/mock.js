// commonJs模块化
// json-server配置文件
const swiper = require("./cb-swiper.json");
const hotcat = require("./cb-hotcat.json");
const list = require("./cb-list.json");

// 导出
module.exports = () => ({
    swiper,
    hotcat,
    list,
});
