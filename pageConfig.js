var pageConfig = {
    home: {
        partialCss: ["./src/util/css/common.less"],
        partialJs: ["./src/pages/common/header.js","./src/pages/common/footer.js","./src/util/js/one.js", "./src/util/js/util.js"]
    },
    user: {}
}
//需要额外处理的第三方 的 js  和 css 下面的文件会加入监控 打包 但是不会出现在 html 的引用里面
var utilLocation = {
    js: [],
    css: []
}
module.exports = { pageConfig ,utilLocation};