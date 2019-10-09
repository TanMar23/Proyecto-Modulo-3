const { Schema, model } = require('mongoose');

const contributionSchema = new Schema(
  {
    quantity: Number,
    unity: {
        type: String
    },

  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Contribution', contributionSchema);