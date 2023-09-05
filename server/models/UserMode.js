module.exports = (sequelize, DataTypes) => {
  //the datatype must be in the upper case, like  DataTypes.STRING.
  //Keep the variable is the same as the defined name in the quotes. For example, if the name in the quotes is Comment,
  //the variable must be called Comment guiquansun 20230901
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  User.associate = (models) => {
    User.hasMany(models.PostTab, {
      onDelete: "cascade",
    });
  };

  User.associate = (models) => {
    User.hasMany(models.Like, {
      onDelete: "cascade",
    });
  };

  return User;
};
