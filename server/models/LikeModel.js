module.exports = (sequelize, DataTypes) => {
  //the datatype must be in the upper case, like  DataTypes.STRING.
  //Keep the variable is the same as the defined name in the quotes. For example, if the name in the quotes is Like,
  //the variable must be called Like guiquansun 20230904
  const Like = sequelize.define("Like", {
    // username: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  });

  return Like;
};
