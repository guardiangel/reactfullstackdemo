module.exports = (sequelize, DataTypes) => {
  //the datatype must be in the upper case, like  DataTypes.STRING.
  //Keep the variable is the same as the defined name in the quotes. For example, if the name in the quotes is PostTab,
  //the variable must be called PostTab guiquansun20230830
  const PostTab = sequelize.define("PostTab", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return PostTab;
};
