module.exports = (sequelize, DataTypes) => {
  //the datatype must be in the upper case, like  DataTypes.STRING.
  //Keep the variable is the same as the defined name in the quotes. For example, if the name in the quotes is Comment,
  //the variable must be called Comment guiquansun 20230901
  const Comment = sequelize.define("Comment", {
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Comment;
};
