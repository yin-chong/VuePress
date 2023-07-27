module.exports = [
    {
        text: '本站指南', link: '/guide/', icon: 'reco-eye'
    },
    {
        text: '前端', link: '/前端/', icon: 'reco-api',
        items: [
            {
				text: 'Vue',
				items: [
					{text: 'Vue2', link: '/前端/Vue/Vue2 Diff算法解析'},
					{text: 'Vue3', link: '/前端/Vue/Vue3 架构搭建'},
				]
			},
            {
				text: 'ES6',
				items: [
					{text: 'promise', link: '/前端/ES6/promise'},
					{text: 'proxy', link: '/前端/ES6/proxy'},
				]
			},
            {
				text: '架构 ',
				items: [
					{text: 'mock', link: '/前端/架构/mock'},
				]
			},
        ]
    },
    {
        text: '其他', link: '/其他/', icon: 'reco-faq',
        items: [
			{text: '技术选型', link: '/其他/技术选型'},
			{text: '问题汇总', link: '/其他/问题汇总'},
			{text: '入职随笔', link: '/其他/入职随笔'},
        ]
    },
	{ text: '时间轴', link: '/timeline/', icon: 'reco-date' }
]