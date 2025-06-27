// KYC.js
module.exports = (sequelize, DataTypes) => {
  const KYC = sequelize.define('KYC', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: DataTypes.UUID,
    documentType: DataTypes.STRING,
    documentUrl: DataTypes.STRING,
    status: DataTypes.STRING,
    verifiedAt: DataTypes.DATE,
  }, {
    paranoid: true,
    timestamps: true,
  });

  KYC.associate = models => {
    KYC.belongsTo(models.User);
  };

  return KYC;
};
