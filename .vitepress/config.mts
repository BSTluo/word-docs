import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Reifuu-Docs",
  description: "Reifuu-Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '3.0', link: '/src/3.0/index' },
      { text: '2.0', link: '/src/2.0/index' }
    ],

    // sidebar: [
    //   {
    //     text: '索引',
    //     items: [
    //       { text: '3.0', link: '/src/3.0/index' },
    //       { text: '2.0', link: '/src/2.0/index' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BSTluo/koishi-plugin-word-core' }
    ]
  }
})
