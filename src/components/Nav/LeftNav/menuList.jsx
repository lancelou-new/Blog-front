import React from 'react';
import PropTypes from 'prop-types';
import ClassName from 'classnames';
import PreLoadLinkWithRouteConf from '../../PreloadLink/preLoadLinkWithRouteConf';
import Style from './index.scss';

const MenuList = (props) => {
  const { config } = props;
  return (
    <ul>
      {config.map(menuConf => (
        <Menu config={menuConf} key={menuConf.url} />
      ))}
    </ul>
  );
};

MenuList.propTypes = {
  config: PropTypes.arrayOf(PropTypes.shape())
};

const Menu = (props) => {
  const { config } = props;
  const classname = ClassName({ iconfont: true, [config.icon]: true });

  return (
    <li className={Style.left_menuItem}>
      <PreLoadLinkWithRouteConf to={config.url} isNeedPreComponent >
        <i className={classname} />
        <span>{config.label}</span>
      </PreLoadLinkWithRouteConf>
    </li>
  );
};

Menu.propTypes = {
  config: PropTypes.shape(),
};

export default MenuList;
