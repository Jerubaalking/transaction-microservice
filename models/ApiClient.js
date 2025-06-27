// Sequelize model for API clients
module.exports = (sequelize, DataTypes) => {
  const ApiClient = sequelize.define('ApiClient', {
    name: { type: DataTypes.STRING, allowNull: false },
    apiKey: { type: DataTypes.STRING, allowNull: false, unique: true },
    usageLimit: { type: DataTypes.INTEGER, defaultValue: 1000 }, // monthly limit
    isActive: { type: DataTypes.BOOLEAN, defaultValue: true }
  });

  ApiClient.associate = (models) => {
    ApiClient.hasMany(models.ApiUsageLog, { foreignKey: 'apiClientId' });
  };

  return ApiClient;
};
