// Wallet.js (Optional)
module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define('Wallet', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: DataTypes.UUID,
    currency: DataTypes.STRING,
    balance: DataTypes.FLOAT,
  }, {
    timestamps: true,
  });

  Wallet.associate = models => {
    Wallet.belongsTo(models.User);
  };

  return Wallet;
};