const Sequelize = require('sequelize');

const sequelize = new Sequelize('sqlite:database.sqlite', {
  define: {
    freezeTableName: true,
  },
});

const Pedestrian = sequelize.define('pedestrian', {
  inOut: Sequelize.BOOLEAN,
  adultChild: Sequelize.BOOLEAN,
  imageUrl: Sequelize.STRING,
  datetime: Sequelize.DATE
});

sequelize.sync()
.then(() => Pedestrian.create({
  inOut: false,
  adultChild: true,
  imageUrl: '1.jpg',
  datetime: new Date(1980, 6, 20)
}))
.then(jane => {
  console.log(jane.get({
    plain: true
  }));
});

module.exports = Pedestrian;
