// AuthToken.js
module.exports = (sequelize, DataTypes) => {
  const AuthToken = sequelize.define('AuthToken', {
    token: { type: DataTypes.STRING, primaryKey: true },
    userId: DataTypes.UUID,
    ipAddress: DataTypes.STRING,
    userAgent: DataTypes.STRING,
    expiresAt: DataTypes.DATE,
  }, {
    timestamps: true,
  });

  AuthToken.associate = models => {
    AuthToken.belongsTo(models.User);
  };

  return AuthToken;
};