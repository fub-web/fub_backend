let PurchaseManageModel = require("../../models/inncode/purchaseManage.model");

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
      PurchaseManageModel.find(function (err, PurchaseManage) {
        if (err) {
          return res.status(500).json({
            message: "Error in fetching items, Please try again",
            error: err,
          });
        }
        return res.json(PurchaseManage);
      });
    },
  
    show: function (req, res) {
      var id = req.params.id;
      PurchaseManageModel.findOne({ _id: id }, function (
        err,
        PurchaseManage
      ) {
        if (err) {
          return res.status(500).json({
            message: "Unable to fetch item, Please try again",
            error: err,
          });
        }
        if (!PurchaseManage) {
          return res.status(404).json({
            message: "No such item exists",
          });
        }
        return res.json(PurchaseManage);
      });
    },
  
    create: function (req, res) {
      console.log(req);
      var PurchaseManage = new PurchaseManageModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        isBanned: req.body.isBanned,
        packagesReceived : [{
            packageFor: req.body.userId,
            packagesManaging: [
                {	
                packageDesc: req.body.userPackageDesc,
                packageCreatedOn: req.body.userPackageCreatedDate,
            }
            ]
        }],
        createdOn: new Date(Date.now()).toLocaleString(),
        updatedOn: null,
      });
  
      PurchaseManage.save(function (err, PurchaseManage) {
        if (err) {
          return res.status(500).json({
            message: "Error on creating, Please try again",
            error: err,
          });
        }
        return res.status(201).json(PurchaseManage);
      });
    },
  
    remove: function (req, res) {
      var id = req.params.id;
      PurchaseManageModel.findByIdAndRemove(id, function (
        err,
        PurchaseManage
      ) {
        if (err) {
          return res.status(500).json({
            message: "Error in deleting, Please try again",
            error: err,
          });
        }
        return res.status(201).json({ success: 0, message: "Removed Successfully" });
      });
    },
  };
  