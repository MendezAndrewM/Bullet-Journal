module.exports = (sequelize, DataTypes) => {  
    const Users = sequelize.define('users', {
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