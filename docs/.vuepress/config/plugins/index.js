module.exports = {
  flowchart: {},
  "@vuepress/pwa": {
    serviceWorker: true,
    updatePopup: {
      message: "有新的内容更新",
      buttonText: "刷新",
    },
  },
  "vuepress-plugin-auto-sidebar": {
    // collapsable: true,
    // titleMode: "titlecase",
  },
  "vuepress-plugin-baidu-autopush": {},
  sitemap: {
    hostname: "https://www.xxx.com",
  },
  copyright: {
    noCopy: true, // 选中的文字将无法被复制
    minLength: 100, // 如果长度超过 100 个字符
  },
  "@vuepress/medium-zoom": {
    selector: "img",
    // medium-zoom options here
    // See: https://github.com/francoischalifour/medium-zoom#options
    options: {
      margin: 16,
    },
  },
  // "dynamic-title": {
  //   showIcon: "/favicon.ico",
  //   showText: "(/≧▽≦/)欢迎回来！",
  //   hideIcon: "/favicon.ico",
  //   hideText: "(●—●)哦吼,不要走,给个收藏吧！",
  //   recoverTime: 2000,
  // },
  "@vuepress/nprogress": {},
  "vuepress-plugin-smooth-scroll": {},
  // '@vuepress-reco/vuepress-plugin-rss':{
  // 	site_url: "https://it235.com", //网站地址
  //       copyright: "君哥聊编程", //版权署名
  // },
  "reading-progress": {
    //阅读进度条
  },
  "vuepress-plugin-code-copy": {
    //一键复制代码
  },
  "@vuepress-reco/vuepress-plugin-bgm-player": {
    autoShrink: {
      type: true,
    },
    audios: [
      {
        name: "可惜我是水瓶座",
        artist: "杨千嬅",
        url: "https://music.163.com/song/media/outer/url?id=316654.mp3",
        cover:
          "https://p2.music.126.net/qOOTIykbSLw9RHB0vI83GA==/737772302281958.jpg",
      },
      {
        name: "大城小事",
        artist: "杨千嬅",
        url: "https://music.163.com/song/media/outer/url?id=316756.mp3",
        cover:
          "https://p2.music.126.net/qOOTIykbSLw9RHB0vI83GA==/737772302281958.jpg",
      },
      {
        name: "勇",
        artist: "杨千嬅",
        url: "https://music.163.com/song/media/outer/url?id=316498.mp3",
        cover:
          "https://p1.music.126.net/Gxv6d9W4Yd9q9WNHPpi8rw==/1379887104073348.jpg",
      },
      {
        name: "野孩子",
        artist: "杨千嬅",
        url: "https://music.163.com/song/media/outer/url?id=316486.mp3",
        cover:
          "https://p2.music.126.net/4TnTRyHqa3-D2H1UnOa00w==/109951163666994621.jpg",
      },
    ],
  },
  // "social-share": //分享插件
  //     {
  // 	title               : '234',
  //     description         : '123',
  // 	sites               : ['qzone', 'qq', 'weibo','wechat', 'douban'], // 启用的站点
  //       networks: ['qzone',"qq", "weibo", "wechat", "douban", "email"], //分享类型
  //       email: "nobug@mail.com", //email地址
  // 	wechatQrcodeTitle : '微信扫一扫：分享', // 微信二维码提示文字
  //     },
};
