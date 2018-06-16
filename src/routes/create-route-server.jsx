import StaticRouter from 'react-router-dom/StaticRouter';

import iAchieve from '../components/Achieve';
import iTag from '../components/Tags';
import iPage from '../components/Page';
import iItemListContainer from '../components/ItemListContainer';
import iHeaderItemListContainer from '../components/HeaderItemListContainer';

/**
 * chunkName 声明挂载: 方便服务端按需推入客服端
 */
iAchieve.chunkName = 'Achieve';
iTag.chunkName = 'Tag';
iPage.chunkName = 'Page';
iItemListContainer.chunkName = 'ItemListContainer';
iHeaderItemListContainer.chunkName = 'HeaderItemListContainer';

export const Achieve = iAchieve;
export const Tag = iTag;
export const Page = iPage;
export const ItemListContainer = iItemListContainer;
export const HeaderItemListContainer = iHeaderItemListContainer;

export default StaticRouter;
