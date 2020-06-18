module.exports = (app) => {
    const Inncode = require('../../controllers/inncode/projectDiscussion.controller.js');
    app.post('/postProject', Inncode.create);
    app.get('/getProjects', Inncode.list);
}  