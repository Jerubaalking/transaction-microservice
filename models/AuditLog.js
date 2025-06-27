// AuditLog.js
module.exports = (sequelize, DataTypes) => {
  const AuditLog = sequelize.define('AuditLog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    actorId: DataTypes.UUID,
    action: DataTypes.STRING,
    targetType: DataTypes.STRING,
    targetId: DataTypes.UUID,
    metadata: DataTypes.JSONB,
  }, {
    timestamps: true,
  });

  AuditLog.associate = models => {
    AuditLog.belongsTo(models.User, { foreignKey: 'actorId' });
  };

  return AuditLog;
};