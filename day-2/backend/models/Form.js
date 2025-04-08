const mongoose = require('mongoose');

const FieldSchema = new mongoose.Schema({
  fieldName: String,
  type: {
    type: String,
    enum: ['text', 'number', 'email', 'date']
  }
});

const FormSchema = new mongoose.Schema({
  fields: [FieldSchema]
});

module.exports = mongoose.model('Form', FormSchema);
