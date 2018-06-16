
module.exports = source => source.replace(/\/\/ module[\w\W]*(\/\/ exports)/, '$1');
