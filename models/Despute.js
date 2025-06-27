// Dispute.js
module.exports = (sequelize, DataTypes) => {
  const Dispute = sequelize.define('Dispute', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    transactionId: DataTypes.UUID,
    userId: DataTypes.UUID,
    reason: DataTypes.STRING,
    status: DataTypes.STRING,
    resolution: DataTypes.TEXT,
  }, {
    paranoid: true,
    timestamps: true,
  });

  Dispute.associate = models => {
    Dispute.belongsTo(models.User);
    Dispute.belongsTo(models.Transaction);
  };

  return Dispute;
};
