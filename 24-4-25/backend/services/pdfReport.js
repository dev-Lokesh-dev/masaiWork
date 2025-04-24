function generatePDFReport(doc, expenses) {
    doc.fontSize(18).text('Expense Report', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text('Title           Amount           Date');
    doc.moveDown();
  
    let totalsByMonth = {};
  
    expenses.forEach(e => {
      doc.text(`${e.title}     ₹${e.amount}        ${e.date}`);
      const month = e.date.slice(0, 7);
      totalsByMonth[month] = (totalsByMonth[month] || 0) + Number(e.amount);
    });
  
    doc.moveDown().text('Monthly Totals:', { underline: true });
    for (const [month, total] of Object.entries(totalsByMonth)) {
      doc.text(`${month}: ₹${total}`);
    }
  }
  
  module.exports = { generatePDFReport };