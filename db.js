const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
})

// const db = new Sequelize("postgresql://postgres:password@localhost/newMovieDb");

module.exports = db;