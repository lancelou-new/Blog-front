import Router, { Achieve, ItemListContainer, Page, Tag, HeaderItemListContainer } from 'create-route';
import action from '../action';

const config = [
  {
    path: '/',
    exact: true,
    component: ItemListContainer,
    loadData: action.fetchItems,
  },
  {
    path: '/achieve',
    exact: true,
    component: Achieve,
    loadData: action.fetchAchieve,
    componentPromise: () => import(/* webpackChunkName: "Achieve" */ '../components/Achieve')
  },
  {
    path: '/tag',
    exact: true,
    component: Tag,
    loadData: action.fetchTags,
    componentPromise: () => import(/* webpackChunkName: "Tag" */ '../components/Tags')
  },
  {
    path: '/tag/:tagName/:page(\\d+)?',
    exact: true,
    component: HeaderItemListContainer,
    loadData: action.fetchTagPager,
    componentPromise: () => import(/* webpackChunkName: "HeaderItemListContainer" */ '../components/HeaderItemListContainer')
  },
  {
    path: '/post/:postName',
    exact: true,
    component: Page,
    loadData: action.fetchBlogs,
    componentPromise: () => import(/* webpackChunkName: "Page" */ '../components/Page')
  },
  {
    path: '/page=:page(\\d+)',
    exact: true,
    component: ItemListContainer,
    loadData: action.fetchItems,
    componentPromise: () => import(/* webpackChunkName: "ItemListContainer" */ '../components/ItemListContainer')
  },
  {
    path: /^\/(?!(?:tag|achieve|page=[\d]+)\/?$)([\w\d-]+)\/?$/,
    exact: true,
    component: Page,
    loadData: action.fetchPage,
    componentPromise: () => import(/* webpackChunkName: "Page" */ '../components/Page')
  },
];

// action.fetchOptions
export const mustSSRLoad = [action.fetchTheme, action.fetchOptions];
export const routerConfig = config;
export default Router;
