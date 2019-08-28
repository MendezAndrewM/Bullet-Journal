module.exports = (sequelize, DataTypes) => {  
  const Goals = sequelize.define('goals', {
    

    id: {
      type: DataTypes.INTERGER,
      required: true
    },
    user_code: {
      type: DataTypes.VARCHAR,
      required: true
    },
    goal_name: {
      type: DataTypes.VARCHAR,
      required: true
          },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }   
  });
  return Goals;
};