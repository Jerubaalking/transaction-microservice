// Account.js
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: DataTypes.UUID,
    providerId: DataTypes.UUID,
    accountNumber: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    paranoid: true,
    timestamps: true,
  });

  Account.associate = models => {
    Account.belongsTo(models.User);
    Account.belongsTo(models.Provider);
  };

  return Account;
};