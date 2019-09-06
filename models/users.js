module.exports = function (sequelize, DataTypes) {  
    const Users = sequelize.define('Users', {
        user_code: {
        type: DataTypes.STRING,
        required: true
            },
      pass_code: {
        type: DataTypes.STRING,
        required: true
      }   
    });
    return Users;
  };