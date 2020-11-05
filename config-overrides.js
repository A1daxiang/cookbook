const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    adjustWorkbox,
} = require("customize-cra"); //自定义webpack配置 要这个包就要先装react-app-rewired包
const path = require("path");

module.exports = override(
    // 在webpack中禁用eslint
    disableEsLint(),

    // 添加webpack别名
    addWebpackAlias({
        ["@"]: path.resolve("./src"),
    })
);
