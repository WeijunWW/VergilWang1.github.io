module.exports = {
    base: '/dist',
    title: 'blog',
    description: 'Vuepress blog',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/VergilWang1/VergilWang1.github.io',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        // nav: [
        //     { text: 'Home', link: '/blog/check.md' }
        // ],
        sidebar: [
            // ['/', '首页'],
            ['/blog/check.md', '测试']
        ]
    }
}