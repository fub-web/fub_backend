let UserPurchaseModel = require("../../models/inncode/userPurchase.model");

module.exports = {
    list: function (req, res) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
      );
      res.setHeader("Access-Control-Allow-Credentials", true);
      UserPurchaseModel.find(function (err, UserPurchase) {
        if (err) {
          return res.status(500).json({
            message: "Error when getting UserPurchase.",
            error: err,
          });
        }
        return res.json(UserPurchase);
      });
    },
  
    show: function (req, res) {
      var id = req.params.id;
      UserPurchaseModel.findOne({ _id: id }, function (
        err,
        UserPurchase
      ) {
        if (err) {
          return res.status(500).json({
            message: "Unable to fetch purchase items, Please try again later.",
            error: err,
          });
        }
        if (!UserPurchase) {
          return res.status(404).json({
            message: "No such purchase exists",
          });
        }
        return res.json(UserPurchase);
      });
    },

    create: function (req, res) {
      console.log(req);
      var UserPurchase = new UserPurchaseModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        isBanned: req.body.isBanned,
        userPackage: [{
            packageServices: [...req.body.package.services],
            paymentsHistory: [{
                date: new Date(Date.now()).toLocaleString(),
                amount: req.body.package.amount,
                validity: req.body.package.validity
            }]
        }],
        createdOn: new Date(Date.now()).toLocaleString(),
        updatedOn: null,
      });
  
      UserPurchase.save(function (err, UserPurchase) {
        if (err) {
          return res.status(500).json({
            message: "Error when creating ProjectDiscussion",
            error: err,
          });
        }
        return res.status(201).json(UserPurchase);
      });
    },

    remove: function (req, res) {
      var id = req.params.id;
      UserPurchaseModel.findByIdAndRemove(id, function (
        err,
        UserPurchase
      ) {
        if (err) {
          return res.status(500).json({
            message: "Error when deleting the UserPerchase.",
            error: err,
          });
        }
        return res.status(204).json({ success: 0 });
      });
    },
  };
  