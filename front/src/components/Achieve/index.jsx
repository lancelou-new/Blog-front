/**
 * 归档组件，内嵌于pageContainer
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { Helmet } from 'react-helmet';
import EventEmit from '../../utils/eventCenter';
import Style from './index.scss';
import PreLoadLinkWithRouteConf from '../PreloadLink/preLoadLinkWithRouteConf';

const cx = classNames.bind(Style);

class Achieve extends React.Component {
  static propTypes = {
    achieves: PropTypes.shape({}),
    siteTitle: PropTypes.string
  }

  componentDidMount() {
    EventEmit.emit('backToTop');
  }

  render() {
    const { achieves, siteTitle } = this.props;
    const achievesArr = Object.keys(achieves).sort((dateStr1, dateStr2) => (
      dateStr2.localeCompare(dateStr1)
    )).map(achieveName => ({
      name: achieveName,
      list: achieves[achieveName]
    }));
    const className = cx({
      post: true,
      achieve: true,
      achieve_con: true
    });
    return (
      <article className={className}>
        <Helmet>
          <title>归档 - {siteTitle}</title>
        </Helmet>
        <h1 className="title">归档</h1>
        <div className="entry-content">
          {
            achievesArr.map(achieve => (
              <AchieveItem achieve={achieve} key={achieve.name} />
            ))
          }
        </div>
      </article>
    );
  }
}

Achieve.propTypes = {
  achieves: PropTypes.shape({}),
  siteTitle: PropTypes.string
};

const AchieveItem = (props) => {
  const { achieve } = props;
  return (
    <div className="entry-content">
      <h3>{achieve.name}</h3>
      <ul>
        {achieve.list.map(post => (
          <li key={post.pathName}>
            <PreLoadLinkWithRouteConf to={`/post/${post.pathName}`}>
              {post.title}
            </PreLoadLinkWithRouteConf>
            <span className="date">{post.createdAt.slice(0, post.createdAt.lastIndexOf(' '))}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

AchieveItem.propTypes = {
  achieve: PropTypes.shape({
    name: PropTypes.string
  })
};

const mapStateToAchieveProps = state => ({
  achieves: state.achieves,
  siteTitle: state.options.title
});

const AchieveWithRedux = connect(mapStateToAchieveProps, null)(Achieve);

export default AchieveWithRedux;
