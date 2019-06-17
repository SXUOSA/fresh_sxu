# fresh-sxu
山西大学新生入学手册文档生成器

## 使用方法
```
安装gulp
npm install
npm install gulp -g
---------------------------------------
npm run init //安装依赖环境
npm run devpc //运行pc的DEV
npm run devmobile //运行mobile的DEV
gulp buildpc //构建pc的生产环境
gulp buildmobile //构建mobile的生产环境
gulp buildall //同时为pc和mobile构建生产环境
---------------------------------------
安装并配置iview
npm install iview
pc/fresh-sxu-pc-end/src/main.js里加上：
    import iView from 'iview';
    import 'iview/dist/styles/iview.css'
    Vue.use(iView);
根目录node_modules/iview/dist/styles里添加一个名为"postcss.config.js"的文件
里面的内容如下：
    module.exports = {
        plugins: {
            'autoprefixer': { browsers: 'last 5 version' }
        }
    }
---------------------------------------
安装markdown
npm install markdown -s
```