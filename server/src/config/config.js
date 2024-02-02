// give this file the port number at which the server runs
module.exports = {
  port: process.env.PORT || 8081,
  // declare a db attribute that contains different args declared in sequelize obj in the indexjs file
  db: {
    database: process.env.DB_NAME || 'tabtracker', // load some env vars and fall back to the tabtarcker, the db name
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    options: {
      // dialect tells sqlite the dialect method specifies the db type
      dialect: process.env.DIALECT || 'sqlite',
      // host tells sqlite the location of db to conn to
      host: process.env.HOST || 'localhost',
      // storage tells sqlite where to store files
      storage: './tabtracker.sqlite'
    }
  }
}
