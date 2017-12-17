/**
 * MJ12bot: seo监测蜘蛛
 * EtaoSpider: 一淘网蜘蛛
 * EasouSpider: 宜搜蜘蛛
 * YisouSpider: 一搜蜘蛛(神马搜索)
 */
module.exports = config =>
  `User-agent: *
Allow: /
Sitemap: ${config.siteUrl}/sitemap.xml

User-agent: YisouSpider
Disallow: /
User-agent: EasouSpider
Disallow: /
User-agent: EtaoSpider
Disallow: /
User-agent: MJ12bot
Disallow: /`;
