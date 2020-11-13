// commonJs模块化
// json-server配置文件
const swiper = require("./cb-swiper.json");
const hotcate = require("./cb-hotcate.json");
const detail = require("./cb-detail.json");
const category = require("./cb-category.json");

// 导出
module.exports = () => ({
    swiper,
    hotcate,
    detail,
    category,
});
