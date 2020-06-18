module.exports = (app) => {
    const Inncode = require('../../controllers/inncode/support.controller.js');
    app.post('/contactSupport', Inncode.create);
    app.get('/getAllSupport', Inncode.list);
}  