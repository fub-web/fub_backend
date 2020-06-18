var SupportModel = require("../../models/inncode/support.model.js");

/**
 * SupportController.js
 *
 * @description :: Server-side logic for managing Support.
 */
module.exports = {
  /**
   * SupportController.list()
   */
  list: function(req, res) {
    SupportModel.find(function(err, Support) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Support.",
          error: err
        });
      }
      return res.json(Support);
    });
  },

  /**
   * SupportController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    SupportModel.findOne({ _id: id }, function(err, Support) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Support.",
          error: err
        });
      }
      if (!Support) {
        return res.status(404).json({
          message: "No such Support"
        });
      }
      return res.json(Support);
    });
  },

  /**
   * SupportController.create()
   */
  create: function(req, res) {
    var Support = new SupportModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        company: req.body.company,
        message: req.body.message,
        created_at: new Date(Date.now()).toLocaleString(),
        updated_at: new Date(Date.now()).toLocaleString(),
    });

    Support.save(function(err, Support) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating Support",
          error: err
        });
      }
      return res.status(201).json(Support);
    });
  },

  /**
   * SupportController.update()
   */
//   update: function(req, res) {
//     var id = req.params.id;
//     SupportModel.findOne({ _id: id }, function(err, Support) {
//       if (err) {
//         return res.status(500).json({
//           message: "Error when getting Support",
//           error: err
//         });
//       }
//       if (!Support) {
//         return res.status(404).json({
//           message: "No such Support"
//         });
//       }

//       Support.category = req.body.category
//         ? req.body.category
//         : Support.category;
//       Support.price = req.body.price ? req.body.price : Support.price;
//       Support.costPrice = req.body.costPrice
//         ? req.body.costPrice
//         : Support.costPrice;
//       Support.isAvailable = req.body.isAvailable;
//       Support.name = req.body.name ? req.body.name : Support.name;
//       Support.discount = req.body.discount
//         ? req.body.discount
//         : Support.discount;
//       Support.created_at = Support.created_at;
//       Support.updated_at = new Date(Date.now()).toLocaleString();
//       Support.isPopular = req.body.isPopular;

//       Support.image_base = req.body.image_base
//         ? req.body.image_base
//         : Support.image_base;

//       Support.save(function(err, Support) {
//         if (err) {
//           return res.status(500).json({
//             message: "Error when updating Support.",
//             error: err
//           });
//         }

//         return res.json(Support);
//       });
//     });
//   },

  /**
   * SupportController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    SupportModel.findByIdAndRemove(id, function(err, Support) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Support.",
          error: err
        });
      }
      return res.status(204).json({ success: 0 });
    });
  },
};
