
module.exports = {
  development: {
    server: {
      port: 3000
    },
    database: {
      client: 'pg',
      connection: {
        host: 'localhost',
        port: 5432,
        user: 'alex',
        password: 'password',
        database: 'tictactoe'
      },
      migrations: {
        tableName: 'migrations',
        directory: './migrations'
      },
      seeds: {
        directory: './seeds'
      }
    }
  }
};
