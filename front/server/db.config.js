const { env } = process;

module.exports = {
  ssrPort: env.ssrPort || 8899,

  mongoHost: env.mongoHost || 'localhost',
  mongoDatabase: env.mongoDatabase || 'blog',
  mongoPort: env.mongoPort || 32768,

  serverPort: env.serverPort || 3000,
  enableServerSideGA: env.enableServerSideGA || false,

  redisHost: env.redisHost || 'localhost',
  redisPort: env.redisPort || 32769,
  redisPassword: env.redisPassword || '',
};
