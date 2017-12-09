import React from 'react';
import PreLoadLinkWithRouteConf from '../PreloadLink/preLoadLinkWithRouteConf';
/**
 * 404 page内容页
 */

const Page404 = () => (
  <article className="post">
    <h1 className="title">404 - 什么也没有</h1>
    <p>您要找的东西不存在哦！</p>
    <p>
      请检查URL拼写是否有误，或
      <PreLoadLinkWithRouteConf to="/">点击</PreLoadLinkWithRouteConf>
      查看所有文章
    </p>
  </article>
);

export default Page404;
