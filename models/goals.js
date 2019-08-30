module.exports = (sequelize, DataTypes) => {  
  const Goals = sequelize.define('goals', {
    
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