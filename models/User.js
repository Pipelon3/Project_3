module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    first_name:     DataTypes.STRING,
    last_name:      DataTypes.STRING,
    email_address:  DataTypes.STRING,
    age:            DataTypes.INTEGER,
    gender:         DataTypes.STRING
  });

  User.associate = models => {
    User.hasMany(models.Review);

    User.hasMany(models.Location, {
      as: 'Locations'
    });
  };

  return User;
};

