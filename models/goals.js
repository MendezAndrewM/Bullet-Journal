module.exports = function (sequelize, DataTypes) {  
  const Goals = sequelize.define('Goals ', {
    
   user_code: {
      type: DataTypes.STRING,
      required: true
    },
    goal_name: {
      type: DataTypes.STRING,
      required: true
          },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Goals;
};