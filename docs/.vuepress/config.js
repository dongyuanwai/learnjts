module.exports = {
    title: 'LearJTs', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'js工具库', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', 
            { rel: 'icon', href: '/logo.jpg' }
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],  
    ],
}