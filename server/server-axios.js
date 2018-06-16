/* eslint no-underscore-dangle: 0 */

const models = require('./model');

module.exports = process.__API__ = {
  get(target, options = {}) {
    // 取最后一个作为modelName
    const modelName = target.split('/').slice(-1);
    const query = options.params || {};
    const model = models[modelName];
    return new Promise((resolve) => {
      queryModel(model, query).then((data) => {
        resolve({ data });
      }); // mongoose uses mpromise who doesn't have a reject method here
    });
  },
};

function queryModel(model, query) {
  let conditions = {};
  let select = {};
  if (query.conditions) {
    conditions = query.conditions;
  }
  let builder = model.find(conditions);
  if (query.select) {
    select = query.select;
    builder = builder.select(select);
  }

  ['limit', 'skip', 'sort', 'count'].forEach((key) => {
    if (query[key]) {
      let arg = query[key];
      if (key === 'limit' || key === 'skip') {
        arg = global.parseInt(arg);
      }
      if (key === 'sort' && typeof arg === 'string') {
        arg = JSON.parse(arg);
      }
      if (key !== 'count') builder[key](arg);
      else builder[key]();
    }
  });
  return builder.exec();
}
