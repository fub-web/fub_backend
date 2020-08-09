module.exports = (app) => {
    const PurchaseManage = require('../../controllers/inncode/purchaseManage.controller');
    app.post('/createpurchasemanage', PurchaseManage.create);
    app.get('/purchasemanagelist', PurchaseManage.list);
    app.delete('/deletepurchasemanage/:id', PurchaseManage.remove);
    app.get('/purchasemanagelist/:id', PurchaseManage.show);
  }