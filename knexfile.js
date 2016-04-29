module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/mapper'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
