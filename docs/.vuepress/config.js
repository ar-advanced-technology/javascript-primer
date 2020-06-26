module.exports = {
  title: 'JavaScript 入門',
  themeConfig: {
    // logo: '/ari.png',
    search: false,
    sidebar: [
      '/overview',
      {
        title: '演習問題',
        collapsable: false,
        children: [
          '/practice/startup',
          '/practice/modal',
          '/practice/gallery',
          '/practice/html',
          '/practice/gif',
          '/practice/more',
        ]
      },
    ]
  }
}
