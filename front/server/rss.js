/* eslint no-param-reassign: 0 */

const getUpdatedDate = date => `    <lastBuildDate>${date}</lastBuildDate>\r\n`;
const tail = `  </channel>
</rss>`;

const api = 'http://localhost:3000/api/post';
const params = {
  conditions: {
    type: 'post',
    isPublic: true
  },
  select: {
    pathName: 1,
    updatedAt: 1,
    content: 1,
    title: 1
  },
  sort: {
    updatedAt: -1
  },
  limit: 10
};

const getRssBodyFromBody = (result, config) => {
  const head = `<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${config.title}</title>
    <link>${config.siteUrl}</link>
    <description>${config.description}</description>
    <atom:link href="${config.siteUrl}/rss.xml" rel="self"/>
    <language>zh-cn</language>\r\n`;
  const body = result.data.reduce((prev, curr) => {
    const date = new Date(curr.updatedAt).toUTCString();
    const content = curr.content.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
    prev += '    <item>\r\n';
    prev += `      <title>${curr.title}</title>\r\n`;
    prev += `      <link>${config.siteUrl}/post/${curr.pathName}</link>\r\n`;
    prev += `      <description>${content}</description>\r\n`;
    prev += `      <pubDate>${date}</pubDate>\r\n`;
    prev += `      <guid>${config.siteUrl}/post/${curr.pathName}</guid>\r\n`;
    prev += '    </item>\r\n';
    return prev;
  }, '');
  return head + getUpdatedDate(new Date().toUTCString()) + body + tail;
};

module.exports = {
  api,
  params,
  getRssBodyFromBody
};
