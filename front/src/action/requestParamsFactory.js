const generateFetchPageParams = ({ params }) => (
  {
    model: 'post',
    query: {
      conditions: { pathName: params[0], isPublic: true, type: 'page' },
      select: {
        title: 1,
        createdAt: 1,
        content: 1,
        toc: 1,
        updatedAt: 1,
        pathName: 1,
        allowComment: 1,
        type: 1,
      },
    },
  }
);

const generateFetchItemsParams = ({ params }) => {
  const itemLenPerPage = 10;
  const curPage = (params && params.page) || 1;
  return {
    model: 'post',
    query: {
      conditions: { type: 'post', isPublic: true },
      select: {
        _id: 0, title: 1, summary: 1, createdAt: 1, updatedAt: 1, pathName: 1,
      },
      limit: itemLenPerPage,
      skip: (curPage - 1) * itemLenPerPage,
      sort: { createdAt: -1 },
    },
  };
};

const generateFetchTagsParams = () => ({
  model: 'post',
  query: {
    conditions: {
      type: 'post',
      isPublic: true,
    },
    select: {
      _id: 0,
      tags: 1,
    },
  },
});

const generateFetchTagPageParams = ({ params }) => {
  const itemLenPerPage = 20;
  const curPage = (params && params.page) || 1;
  return {
    model: 'post',
    query: {
      conditions: {
        tags: params.tagName,
        type: 'post',
        isPublic: true,
      },
      select: {
        _id: 0, tags: 1, title: 1, summary: 1, createdAt: 1, updatedAt: 1, pathName: 1,
      },
      limit: itemLenPerPage,
      skip: (curPage - 1) * itemLenPerPage,
      sort: { updatedAt: -1 },
    },
  };
};

const generateFetchBlogsParams = ({ params }) => ({
  model: 'post',
  query: {
    conditions: { pathName: params.postName, isPublic: true, type: 'post' },
    select: {
      title: 1,
      createdAt: 1,
      content: 1,
      toc: 1,
      updatedAt: 1,
      pathName: 1,
      allowComment: 1,
      tags: 1,
      category: 1,
    },
  },
});

const generateFetchAchieveParams = () => ({
  model: 'post',
  query: {
    conditions: { type: 'post', isPublic: true },
    select: {
      _id: 0, title: 1, createdAt: 1, pathName: 1,
    },
    sort: { createdAt: -1 },
  }
});

const PathToParamsGeneratorMap = {
  '/': generateFetchItemsParams,
  '/achieve': generateFetchAchieveParams,
  '/tag': generateFetchTagsParams,
  '/tag/:tagName/:page(\\d+)?': generateFetchTagPageParams,
  '/post/:postName': generateFetchBlogsParams,
  '/page=:page(\\d+)': generateFetchItemsParams,
  '/^\\/(?!(?:tag|achieve|page=[\\d]+)\\/?$)([\\w\\d-]+)\\/?$/': generateFetchPageParams,
};

const generateParams = match =>
  (PathToParamsGeneratorMap[match.path] ? PathToParamsGeneratorMap[match.path](match) : null);

export default generateParams;
