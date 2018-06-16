/**
 * 主页的ItemList Container，不包含主标题
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import EventEmit from '../../utils/eventCenter';
import GaSubmit from '../GaSubmit';
import Item from '../Item';
import Pagination from './pagination';

class ItemListContainer extends React.Component {
  static propTypes = {
    itemList: PropTypes.arrayOf(PropTypes.shape({
      createdAt: PropTypes.string,
      summary: PropTypes.string
    })),
    pagination: PropTypes.shape({
      pageSize: PropTypes.number,
      totalPage: PropTypes.number
    }),
    withoutPagination: PropTypes.bool,
  }

  componentDidMount() {
    EventEmit.emit('backToTop');
  }

  render() {
    const {
      itemList, pagination, withoutPagination, siteTitle
    } = this.props;
    return (
      <section>
        <Helmet defer={false}>
          <title>首页 - {siteTitle}</title>
        </Helmet>
        {itemList.map(itemVo => (
          <Item vo={itemVo} key={itemVo.createdAt} />
        ))}
        <Pagination pagination={withoutPagination ? {} : pagination} />
      </section>
    );
  }
}

ItemListContainer.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.shape({
    createdAt: PropTypes.string,
    summary: PropTypes.string
  })),
  pagination: PropTypes.shape({
    pageSize: PropTypes.number,
    totalPage: PropTypes.number
  }),
  withoutPagination: PropTypes.bool,
  siteTitle: PropTypes.string
};

const mapStateToItemListProps = state => ({
  itemList: state.items,
  pagination: state.pagination,
  siteTitle: state.options.title,
});

const ItemListContainerWithRedux = connect(
  mapStateToItemListProps,
  null,
)(ItemListContainer);

const ItemListContainerReduxWithGaSubmit = GaSubmit(ItemListContainerWithRedux);

export default ItemListContainerReduxWithGaSubmit;
