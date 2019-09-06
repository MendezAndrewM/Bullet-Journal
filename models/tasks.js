module.exports = function (sequelize, DataTypes) {  
    const Tasks = sequelize.define('Tasks', {
  
      user_code: {
        type: DataTypes.STRING,
        required: true
            },
      tasks: {
        type: DataTypes.STRING,
        required: true
      },
      task_frequency: {
        type: DataTypes.STRING,
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Tasks;
  };
