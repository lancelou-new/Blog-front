/* eslint no-cond-assign: 0,
  no-return-assign: 0,
  no-mixed-operators: 0,
  prefer-const: 0,
  no-plusplus: 0,
  no-param-reassign: 0 */

/**
 * 加载进度条
 *
 * 这边为什么需要带生命周期的组件:
 *  使用这种Class组件无非两点:
 *    -> 内部有state，state改变，组件重绘
 *    -> 各种生命周期钩子
 *
 * 是否能够更具componentWillReceiveProps的次数判断
 * 本组件被有意触发的次数 ->
 *  (是否会误判，应为有可能也会是父组件的重渲染造成子组件的重渲染)
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Style from './index.scss';

class Loading extends React.Component {
  static ANIMATE_END_PERCENT = 92
  static ANIMATE_START_PERCENT = 0
  static ANIMATE_PROGRESS_PERCENT = 5
  static ANIMATE_TERMINATE_PROGRESS_PERCENT = 40
  static ANIMATE_TIME_INTERVAL = 200

  static propTypes = {
    loading: PropTypes.bool
  }

  constructor(props) {
    super(props);

    this.animationStartDate = null;
    this.animateTime = null;

    this.state = {
      percent: 0,
      visibility: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.shouldStart(nextProps)) {
      this.launch();
    } else if (this.shouldStop(nextProps)) {
      this.stopAnimate();
    }
  }

  getAnimateFunc = (change, end, interval, percent, timeFunc, finishCb) => {
    const self = this;

    function animationFunc() {
      console.log(percent);
      console.log(timeFunc(change, percent));

      percent += timeFunc(change, percent);

      if (percent >= end) {
        window.clearTimeout(self.animateTime);
        self.animateTime = null;
        finishCb && finishCb();
        return;
      }

      self.animateTime = window.setTimeout(animationFunc, interval);

      self.setState({
        percent
      });
    }

    return animationFunc;
  }

  shouldStop = nextProps => nextProps.loading !== this.props.loading
  && !nextProps.loading

  shouldStart = nextProps => nextProps.loading !== this.props.loading
    && nextProps.loading

  stopAnimate = () => {
    const change = Loading.ANIMATE_TERMINATE_PROGRESS_PERCENT;
    const end = 103;
    const interval = Loading.ANIMATE_TIME_INTERVAL;
    let percent = this.state.percent;

    window.clearTimeout(this.animateTime);
    this.animateTime = null;

    this.animateTime =
    window.setTimeout(this.getAnimateFunc(
      change, end, interval, percent,
      lchange => lchange,
      () => this.setState({
        visibility: false,
      })
    ), interval);
  }

  launch = () => {
    const change = Loading.ANIMATE_PROGRESS_PERCENT;
    const end = Loading.ANIMATE_END_PERCENT;
    const interval = Loading.ANIMATE_TIME_INTERVAL;
    let percent = Loading.ANIMATE_START_PERCENT;

    console.log('lauch function call');

    this.animateTime =
      window.setTimeout(this.getAnimateFunc(
        change, end, interval, percent,
        (lchange, lpercent) => lchange * Math.cos(lpercent * (Math.PI / 2 / 100)),
      ), interval);

    this.setState({
      visibility: true,
      percent
    });
  }

  render() {
    const { percent, visibility } = this.state;
    const style = {
      width: visibility ? `${percent}%` : '0',
      visibility: visibility ? 'visible' : 'hidden'
    };
    return (
      <div className={Style.loadingBar_container}>
        <div className={Style.loadingBar_progress} style={style} />
      </div>
    );
  }
}

const mapStateToLoadingProps = state => ({
  loading: state.loading,
});

const LoadingWithRedux = connect(mapStateToLoadingProps)(Loading);

export default LoadingWithRedux;
