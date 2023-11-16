module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
      userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      gender: {
        type: DataTypes.STRING
      },
      birthdate: {
        type: DataTypes.DATE
      }
    });
  
    return User;
  };
  