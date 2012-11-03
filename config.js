/**
 * config
 */

var path = require('path');

exports.config = {
  debug: false,
  name: '小web前端资源网',
  description: '小web前端资源网-提供前端的各种经验文章，前端电子书籍，前端文档PPT，前端特效代码，前端组件实例，前端优秀项目，前端圈子资源。',
  version: '0.2.2',

  // site settings
  site_headers: [
    '<meta name="author" content="xiaoweb" />',
  ],
  host: 'www.xiaoweb.com',
  site_logo: '小web前端资源网', // default is `name`
  site_navs: [
    // [ path, title, [target=''] ]
   // [ '/about', '关于' ],
  ],
  site_static_host: '', // 静态文件存储域名
  site_enable_search_preview: false, // 开启google search preview
  site_google_search_domain:  '',  // google search preview中要搜索的域名

  upload_dir: path.join(__dirname, 'public', 'user_data', 'images'),

  db: 'mongodb://127.0.0.1:27017/xiaoweb',
  session_secret: 'xiaoweb',
  auth_cookie_name: 'xiaoweb',
  port: 117,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // RSS
  rss: {
    title: '小web前端资源网',
    link: 'http://www.xiaoweb.com/rss',
    language: 'zh-cn',
    description: '小web前端资源网-提供前端的各种经验文章，前端电子书籍，前端文档PPT，前端特效代码，前端组件实例，前端优秀项目，前端圈子资源。',

    //最多获取的RSS Item数量
    max_rss_items: 50
  },
 
  // site links
  site_links: [
    {
      'text': 'Node 官方网站',
      'url': 'http://nodejs.org/'
    }
  ],

  // sidebar ads
  side_ads: [
    {
      'url': 'http://wenku.baidu.com',
      'image': 'http://img.baidu.com/img/iknow/docshare/img/logo-wk-137-46.png',
      'text': ''
    }
  ],

  // mail SMTP
  mail_port: 25,
  mail_user: 'club',
  mail_pass: 'club',
  mail_host: 'smtp.126.com',
  mail_sender: 'club@126.com',
  mail_use_authentication: false,
  
  //weibo app key
  weibo_key: 10000000,

  // admin 可删除话题，编辑标签，设某人为达人
  admins: { xiaoweb: true },

  // [ { name: 'plugin_name', options: { ... }, ... ]
  plugins: [
    // { name: 'onehost', options: { host: 'localhost.cnodejs.org' } },
    // { name: 'wordpress_redirect', options: {} }
  ]
};
