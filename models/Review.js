var sequelize = require("sequelize")
var db = require("./index")
module.exports = function (sequelize, DataTypes) {
  const Review = sequelize.define("Review", {
    user_loc: DataTypes.STRING,
    clean_status: DataTypes.INTEGER,
    wait_time: DataTypes.STRING,
    star_rvw: DataTypes.INTEGER,
    user_notes: DataTypes.STRING,
  });

  Review.associate = models => {
    // We're saying that a Review should belong to an User
    // A Review can't be created without an User due to the foreign key constraint
    Review.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Review;
};
