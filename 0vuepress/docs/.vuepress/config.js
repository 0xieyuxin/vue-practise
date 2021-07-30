module.exports = {
    title: 'notebook',
    base: '/datav-docs/',
    description: '个人记录笔记',
    markdown: {
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2, 3] },
        lineNumbers: true
    },
    head: [

    ],
    themeConfig: {
        lastUpdated: '上次更新',
        // 配置导航条
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: 'React', link: '/react/' },
            { text: 'javaScript', link: '/javascript/' },
            { text: 'Vue', link: '/vue/' },
        ],
        navbar: true,
        // 侧边栏
        sidebar: {
            collapsable: false,
            '/javaScript/': [
                {
                    title: '基础阶段',
                    collapsable: true,
                    children: [
                        'js-base.js/data.md'
                    ]
                },
                // {
                //     title: '基础阶段',
                //     collapsable: true,
                //     children: [
                //         'guide/scene',
                //         'guide/tech',
                //         'guide/canvas',
                //         'guide/svg',
                //         'guide/webgl',
                //         'guide/zrender',
                //         'guide/d3',
                //         'guide/three',
                //         'guide/highcharts',
                //         'guide/antv',
                //         'guide/echarts',
                //         'guide/echarts-basic',
                //         'guide/compare',
                //         'guide/bmap',
                //         'guide/bmap-harder',
                //         'guide/bmap-datav',
                //         'guide/bmap-webpack',
                //         'guide/echarts-map',
                //         'guide/amap',
                //         'guide/amap-harder',
                //         'guide/amap-datav',
                //     ]
                // },ggg
                // {
                //     title: '数据大屏项目',
                //     collapsable: true,
                //     children: [
                //         'screen/vue3',
                //     ]
                // }

            ]
        }
    }
}