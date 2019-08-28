module.exports = (sequelize, DataTypes) => {  
    const Users = sequelize.define('users', {
      
      id: {
        type: DataTypes.INTERGER,
        required: true
      },
      user_code: {
        type: DataTypes.VARCHAR,
        required: true
            },
      tasks: {
        type: DataTypes.VARCHAR,
        required: true
      },
      task_frequency: {
        type: DataTypes.VARCHAR,
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Users;
  };
