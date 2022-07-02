import { defineUserConfig,defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'LearnJTs',
  description: 'JS工具类方法,手写常用js方法汇总',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  theme: defaultTheme({
    // tab栏的图标; 图片 / 会自动去public文件夹里找图片
      logo: 'https://vuejs.org/images/logo.png',
	
	  // 顶部导航条   
	  navbar: [
			{
				text: '介绍',
				link: '/pages/test1.md',
			},
			// NavbarGroup
			{
				text: 'Group',
				children: ['/group/foo.md', '/group/bar.md'],
			},
			// 字符串 - 页面文件路径
			'/bar/README.md',
		],
		repo: 'https://gitlab.com/foo/bar',
    }),

})