const Sequelize = require('sequelize');

const sequelize = new Sequelize('sqlite:database.sqlite', {
  define: {
    freezeTableName: true,
  },
});

const Pedestrian = sequelize.define('pedestrian', {
  inOut: Sequelize.BOOLEAN,
  adultYouth: Sequelize.BOOLEAN,
  datetime: Sequelize.DATE
});

sequelize.sync()
.then(() => Pedestrian.create({
  inOut: true,
  adultYouth: false,
  datetime: new Date(1980, 6, 20)
}))
.then(jane => {
  console.log(jane.get({
    plain: true
  }));
});

module.exports = Pedestrian;
