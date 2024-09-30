import { defineConfig } from 'vitepress';

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

    sidebar: {
      '/src/3.0/grammar-basic/': [
        {
          text: 'Guide',
          items: [
            { text: '基础教程', link: './index' },
            { text: '进阶教程', link: './advanced' },
            
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BSTluo/koishi-plugin-word-core' }
    ]
  }
});
