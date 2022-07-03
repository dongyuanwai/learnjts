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
				text: '教程',
				children: [
					{
					  text: '使用指南',
					  link: '/pages/learnJTs/guide1.md',
					 // 该元素将一直处于激活状态
            			activeMatch: '/pages/learnJTs/guide1.md',
					},
					{
						text: '待定...',
						link: '/pages/other/other.md',
					  },
				  ],
			},
			// 字符串 - 页面文件路径
			'/bar/README.md',
		],
		repo: 'https://gitlab.com/foo/bar',

		// 侧边栏
		sidebar: {
			// 不同子路径下的页面会使用不同的侧边栏
			'/pages/learnJTs/': [
				{
				text: 'Guide',
				children: ['guide1.md', 'guide2.md'],
				},
			],
			'/pages/other/': [
				{
				text: 'other',
				children: ['other.md'],
				},
			],
		},

    }),
})