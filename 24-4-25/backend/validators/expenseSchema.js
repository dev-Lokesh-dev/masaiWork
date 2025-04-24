const Joi = require('joi');

const expenseSchema = Joi.object({
  title: Joi.string().required(),
  amount: Joi.number().positive().required(),
  date: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).required(),
});

module.exports = { expenseSchema };