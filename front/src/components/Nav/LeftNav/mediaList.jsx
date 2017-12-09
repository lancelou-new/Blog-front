import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Style from './index.scss';

/**
 * 相关媒体列表组件，eg: github，weibo，ssr，搜索
 */

const MediaList = (props) => {
  const { weiboUrl, githubUrl } = props.config;
  const mediaConfList = [
    {
      icon: 'icon-rss-v',
      title: 'RSS',
      isBlank: true,
      href: '/rss.xml',
    },
    {
      icon: 'icon-search',
      title: 'Search',
      isBlank: true,
      href: 'https://www.google.com/webhp#newwindow=1&safe=strict&q=site:https://blog.lancelou.me',
    }
  ];
  weiboUrl && mediaConfList.unshift({
    icon: 'icon-twitter-v',
    title: 'Twitter',
    isBlank: true,
    href: weiboUrl,
  });
  githubUrl && mediaConfList.unshift({
    icon: 'icon-github-v',
    title: 'GitHub',
    isBlank: true,
    href: `https://github.com/${githubUrl}`,
  });
  return (
    <ul className={Style.left_mediaMenu}>
      <li className={Style.left_menuItem}>
        {mediaConfList.map(conf => (
          <a href={conf.href} title={conf.title} key={conf.href}>
            <i className={classNames('iconfont', conf.icon)} />
          </a>
        ))}
      </li>
    </ul>
  );
};

MediaList.propTypes = {
  config: PropTypes.shape({
    logoUrl: PropTypes.string,
    title: PropTypes.string
  })
};

export default MediaList;

