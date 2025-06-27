module.exports = (sequelize, DataTypes) => {
  const ApiUsageLog = sequelize.define('ApiUsageLog', {
    apiClientId: { type: DataTypes.INTEGER, allowNull: false },
    endpoint: { type: DataTypes.STRING },
    method: { type: DataTypes.STRING },
    timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  });

  ApiUsageLog.associate = (models) => {
    ApiUsageLog.belongsTo(models.ApiClient, { foreignKey: 'apiClientId' });
  };

  return ApiUsageLog;
};
