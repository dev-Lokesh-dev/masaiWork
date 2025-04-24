const express = require('express');
const router = express.Router();
const Joi = require('joi');
const PDFDocument = require('pdfkit');
const { expenseSchema } = require('../validators/expenseSchema');
const { generatePDFReport } = require('../services/pdfReport');

let expenses = [];

router.post('/', (req, res, next) => {
  const { error } = expenseSchema.validate(req.body);
  if (error) return next({ status: 400, message: error.details[0].message });
  const newExpense = { id: Date.now().toString(), ...req.body };
  expenses.push(newExpense);
  res.status(201).json(newExpense);
});

router.get('/', (req, res) => {
  const { month } = req.query;
  if (month) {
    const filtered = expenses.filter(e => e.date.startsWith(month));
    return res.json(filtered);
  }
  res.json(expenses);
});

router.patch('/:id', (req, res, next) => {
  const expense = expenses.find(e => e.id === req.params.id);
  if (!expense) return next({ status: 404, message: 'Expense not found' });
  Object.assign(expense, req.body);
  res.json(expense);
});

router.delete('/:id', (req, res, next) => {
  const index = expenses.findIndex(e => e.id === req.params.id);
  if (index === -1) return next({ status: 404, message: 'Expense not found' });
  expenses.splice(index, 1);
  res.status(204).end();
});

router.get('/report.pdf', (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="report.pdf"');
  const doc = new PDFDocument();
  doc.pipe(res);
  generatePDFReport(doc, expenses);
  doc.end();
});

module.exports = router;

