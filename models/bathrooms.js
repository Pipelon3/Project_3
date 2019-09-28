module.exports = function(sequelize, DataTypes) {
    const bathrooms = sequelize.define("bathrooms", {
      bldng_name:   DataTypes.STRING,
      address:      DataTypes.STRING,
      location:     DataTypes.STRING,
      clean_status: DataTypes.INTEGER,
      wait_time:    DataTypes.INTEGER,
      star_rvw:     DataTypes.INTEGER
    });
  
    return bathrooms;
  };
  
  //update table when user submits review based on columns clean_status, wait_time, star_rvw

  //info seems redundant : 
  //waiting to update this table >> bldng_name, address, and location can ref  Locations table 
  //  clean_status, wait_time, star_rvw can ref review submissions 

  //we will need to script this table in a way that will trigger an auto update of bathrooms every 10-15 minutes from location and reviews submissions table.
    //once updated (every 10min) table keys will update on users side >>> possible to update table on refresh??? 
  
  //We think the bathroom information table would be found useful if an admin was tasked to identify specific consumer trends/patterns based on date and time history. 
