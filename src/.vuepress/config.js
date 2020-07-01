const path = require('path');

module.exports = {
  base: '/javascript-primer/',
  dest: path.join(__dirname, '../../docs'),
  title: 'JavaScript 入門',
  themeConfig: {
    logo: '/ari.png',
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
          '/practice/tab',
          '/practice/password',
          '/practice/html',
          '/practice/gif',
          '/practice/more',
        ]
      },
    ]
  }
}
