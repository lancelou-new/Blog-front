import common from 'create-api';

const api = {};
const prefix = `${common.host}/api`;

api.fetch = (model, query) => {
  const target = `${prefix}/${model}`;
  return common.axios.get(target, { params: query }).then((response) => {
    const result = response.data;
    return result;
  });
};

export default api;
