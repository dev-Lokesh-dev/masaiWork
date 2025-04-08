const express = require('express');
const Form = require('../models/Form');
const Response = require('../models/Response');
const router = express.Router();

// Create Form
router.post('/create-form', async (req, res) => {
  const { fields } = req.body;
  const form = new Form({ fields });
  await form.save();
  res.json({ formId: form._id });
});

// Submit Form Response
router.post('/submit-form/:formId', async (req, res) => {
  const form = await Form.findById(req.params.formId);
  if (!form) return res.status(404).send('Form not found');

  const answers = req.body;
  for (let field of form.fields) {
    const value = answers[field.fieldName];
    if (field.type === 'number' && typeof value !== 'number') {
      return res.status(400).send(`Invalid type for ${field.fieldName}`);
    }
    if (field.type === 'text' && typeof value !== 'string') {
      return res.status(400).send(`Invalid type for ${field.fieldName}`);
    }
    if (field.type === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
      return res.status(400).send(`Invalid email format for ${field.fieldName}`);
    }
  }

  const response = new Response({ formId: form._id, answers });
  await response.save();
  res.send('Response submitted successfully');
});

// Get All Forms
router.get('/all-forms', async (req, res) => {
  const forms = await Form.find();
  res.json(forms);
});

// Get All Responses for a Form
router.get('/all-responses/:formId', async (req, res) => {
  const responses = await Response.find({ formId: req.params.formId });
  res.json(responses);
});

module.exports = router;
