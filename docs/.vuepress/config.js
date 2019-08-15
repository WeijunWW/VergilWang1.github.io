module.exports = {
    base: '/blog/blog',
    title: 'blog',
    description: 'Vuepress blog',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/VergilWang1/VergilWang1.github.io',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Check', link: '/blog/check.md' }
        ]
    }
}