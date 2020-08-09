let PurchaseAssignedModel = require("../../models/inncode/purchaseAssigned.model");
let PurchaseManageModel = require("../../models/inncode/purchaseManage.model");
const purchaseManageModel = require("../../models/inncode/purchaseManage.model");

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
      PurchaseAssignedModel.find(function (err, PurchaseAssigned) {
        if (err) {
          return res.status(500).json({
            message: "Error in fetching items, Please try again",
            error: err,
          });
        }
        return res.json(PurchaseAssigned);
      });
    },
  
    show: function (req, res) {
      var id = req.params.id;
      PurchaseAssignedModel.findOne({ _id: id }, function (
        err,
        PurchaseAssigned
      ) {
        if (err) {
          return res.status(500).json({
            message: "Unable to fetch item, Please try again",
            error: err,
          });
        }
        if (!PurchaseAssigned) {
          return res.status(404).json({
            message: "No such item exists",
          });
        }
        return res.json(PurchaseAssigned);
      });
    },
  
    create: function (req, res) {
      console.log(req);
      let PurchaseAssigned = new PurchaseAssignedModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        isBanned: req.body.isBanned,
        assignedProjects: [{
            packageBoughtBy: req.body.packageBoughtBy,
            packageManagedBy: req.body.packageanager,
            packageManagerId: req.body.packageManagerId,
            packageDeadlineDate: req.body.packageDeadline,
        }],
        createdOn: new Date(Date.now()).toLocaleString(),
        updatedOn: null,
      });
  
      PurchaseAssigned.save(function (err, PurchaseAssigned) {
        if (err) {
          return res.status(500).json({
            message: "Error on creating, Please try again",
            error: err,
          });
        }
        return res.status(201).json(PurchaseAssigned);
      });
    },

    update: async (req, res) =>  {
      let id = req.params.id;

      let updatePurchaseanage = PurchaseManageModel.findOne(
        {_id: req.body.packageManagerId}, function (err, PurchaseManage){
          if(err){
            res.status(500).send();
          } else {
            if(!PurchaseManage){
              res.status(404).send();
            } else {
              if(req.body.packageManagerId){
                PurchaseManage.packagesReceived.packagesManaging[0].isUploaded = true;
              }

              PurchaseManage.save(function (err, UpdatedPurchaseManage){
                if(err){
                  res.status(500).send();
                } else {
                  res.send(UpdatedPurchaseManage);
                }
              })
            }
          }
        }
      )


      PurchaseAssignedModel.findOne(
        {_id: id}, function (err, PurchaseAssigned){
          if(err){
            res.status(500).send();
          } else {
            if(!PurchaseAssigned){
              res.status(404).send();
            } else {
              if(req.body.packageLink){
                PurchaseAssigned.assignedProjects[0].packageLink = req.body.packageLink;
              }

              PurchaseAssigned.save(function (err, UpdatedPurchaseAssigned){
                if(err){
                  res.status(500).send();
                } else {
                  res.send(UpdatedPurchaseAssigned);
                  updatePurchaseanage
                }
              })
            }
          }
        }
      )
      
    },
  
    remove: function (req, res) {
      var id = req.params.id;
      PurchaseAssignedModel.findByIdAndRemove(id, function (
        err,
        PurchaseAssigned
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
  