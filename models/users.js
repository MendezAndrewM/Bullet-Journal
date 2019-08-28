module.exports = (sequelize, DataTypes) => {  
    const Users = sequelize.define('users', {
      
      user_id: {
        type: DataTypes.INTERGER,
        required: true
      },
      user_code: {
        type: DataTypes.VARCHAR,
        required: true
            },
      pass_code: {
        type: DataTypes.VARCHAR,
        required: true
      }   
    });
    return Users;
  };