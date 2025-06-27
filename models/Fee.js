// Fee.js
module.exports = (sequelize, DataTypes) => {
  const Fee = sequelize.define('Fee', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    providerId: DataTypes.UUID,
    type: DataTypes.STRING,
    fixed: DataTypes.FLOAT,
    percent: DataTypes.FLOAT,
  }, {
    timestamps: true,
  });

  Fee.associate = models => {
    Fee.belongsTo(models.Provider);
  };

  return Fee;
};