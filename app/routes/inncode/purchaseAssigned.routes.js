module.exports = (app) => {
    const PurchaseAssigned = require('../../controllers/inncode/purchaseAssigned.controller');
    app.post('/assignpurchase', PurchaseAssigned.create);
    app.get('/assignedpurchaselist', PurchaseAssigned.list);
    app.delete('/assignedpurchasedelete/:id', PurchaseAssigned.remove);
    app.get('/assignedpurchaselist/:id', PurchaseAssigned.show);
    app.put('/assignedpurchaseupdate/:id', PurchaseAssigned.update);
  }