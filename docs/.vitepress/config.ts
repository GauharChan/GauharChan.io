import { DefaultTheme, defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  lang: 'zh-Hans',
  title: "gauhar's blog",
  description: 'just a blog',
  head: [
    [
      'link',
      {
        rel: 'icon', href: '/favicon.ico'
      }
    ],
  ], 
  themeConfig: {
    i18nRouting: false,
    logo: '/assets/logo.jpg',
    lastUpdatedText: '最后修改时间',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    outline: 'deep',
    outlineTitle: '页面导航',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: {
      prev: '前一篇',
      next: '下一篇',
    },
    search: {
      provider: 'algolia',
      options: {
        indexName: 'gauharchanio',
        appId: '0RCW80M362',
        apiKey: '5eab7b5934320ea31c01a784d870c42e',
        locales: getSearchLocales()
      }
    },
    nav: [
      {
        text: '其他版本博客', 
        items: [
          { text: 'vuepress版', link: 'https://gauharchan.github.io/blog/' },
          { text: '某node资源', link: 'https://gauhar.gitee.io/vuepress_node/' },
          { text: 'hexo版(不维护)', link: 'https://gauhar.gitee.io/' },
        ]
      },
      // { text: '码云', link: 'https://gitee.com/gauhar' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GauharChan' },
      { icon: 'twitter', link: 'https://twitter.com/GauharChen' },
      { icon: 'facebook', link: 'https://www.facebook.com/gauhar.chan.779' },
      { 
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24"><path fill="currentColor" d="m12 14.316l7.454-5.88l-2.022-1.625L12 11.1l-.004.003l-5.432-4.288l-2.02 1.624l7.452 5.88Zm0-7.247l2.89-2.298L12 2.453l-.004-.005l-2.884 2.318l2.884 2.3Zm0 11.266l-.005.002l-9.975-7.87L0 12.088l.194.156l11.803 9.308l7.463-5.885L24 12.085l-2.023-1.624Z"/></svg>'
        }, 
        link: 'https://juejin.cn/user/3913917126681735/posts',
        ariaLabel: '掘金'
      },
    ],
    sidebar: sidebarGuide()
  }
})

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '插件',
      items: [
        { text: 'vite插件-shared', link: '/vite-plugin-shared' },
      ],
      collapsed: false,
    },
    {
      text: '框架',
      items: [
        { text: 'vue3', link: '/vue3' },
        { text: 'react', link: '/react笔记' },
        { text: 'vue3源码', link: '/vue3源码' },
        { text: 'vue2笔记', link: '/vue笔记' },
        { text: 'Vue.js设计与实现-阅读笔记', link: '/Vue.js设计与实现-阅读笔记' },
      ],
      collapsed: false,
    },
    {
      text: '小程序',
      items: [
        { text: 'Taro3.x', link: '/Taro开发中的坑' },
        { text: 'taro1.x', link: '/taro' },
        { text: 'uniapp', link: '/uniapp' },
      ],
      collapsed: false,
    },
    {
      text: '工作积累',
      items: [
        // { text: '面试题', link: '/问题' },
        { text: '常用代码', link: '/常用代码' },
        { text: '工作常用代码', link: '/工作常用代码' },
        { text: '工作上遇到的坑', link: '/工作上遇到的坑' },
        { text: '那些坑', link: '/那些坑' },
      ],
      collapsed: false,
    },
    {
      text: '工具库',
      items: [
        { text: 'antv', link: '/antv' },
        { text: 'webpack', link: '/webpack' },
      ],
      collapsed: false,
    },
    {
      text: 'js相关',
      items: [
        { text: 'typeScript', link: '/typeScript' },
        { text: 'es6笔记', link: '/es6笔记' },
        { text: 'js学习笔记', link: '/js学习笔记' },
        { text: '正则表达式', link: '/正则表达式' },
        { text: 'js笔记', link: '/js笔记' },
        { text: 'note', link: '/note' },
      ],
      collapsed: false,
    },
  ]
}

export function getSearchLocales(): DefaultTheme.AlgoliaSearchOptions['locales'] {
  return {
    root: {
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索提供者'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈'
          }
        }
      }
    }
  }
}
