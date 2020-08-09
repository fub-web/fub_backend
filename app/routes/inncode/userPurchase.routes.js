module.exports = (app) => {
  const UserPurchase = require('../../controllers/inncode/userPurchase.controller');
  app.post('/userpurchase', UserPurchase.create);
  app.get('/userpurchaselist', UserPurchase.list);
  app.delete('/deleteuserpurchase/:id', UserPurchase.remove);
  app.get('/userpurchaselist/:id', UserPurchase.show);
}