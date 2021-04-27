const Sequelize = require('sequelize');


const sequelize = new Sequelize('clase3', 'root', '', {
  host: 'localhost',
  port: '3307',
  dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



class Cars extends Model {}
Cars.init({
  firstName: STRING,
  lastName:STRING
}, { sequelize, modelName: 'users' });


/* crea usuario*/
sequelize.sync()
  .then(() => Cars.create({
    firstName: 'Pedro',
    lastName: 'Rodriguez'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });




