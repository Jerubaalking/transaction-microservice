// ExchangeRate.js
module.exports = (sequelize, DataTypes) => {
  const ExchangeRate = sequelize.define('ExchangeRate', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    baseCurrency: DataTypes.STRING,
    quoteCurrency: DataTypes.STRING,
    rate: DataTypes.FLOAT,
    source: DataTypes.STRING,
    timestamp: DataTypes.DATE,
  }, {
    timestamps: true,
  });

  return ExchangeRate;
};