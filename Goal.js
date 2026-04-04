const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Goal name is required'],
      trim: true,
      maxlength: [100, 'Goal name cannot exceed 100 characters'],
    },
    targetAmount: {
      type: Number,
      required: [true, 'Target amount is required'],
      min: [1, 'Target amount must be at least 1'],
    },
    icon: {
      type: String,
      default: null,
    },
    savedAmount: {
      type: Number,
      default: 0,
    },
    attachedFile: {
      filename: { type: String, default: null },
      originalName: { type: String, default: null },
      mimetype: { type: String, default: null },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Goal', goalSchema);
