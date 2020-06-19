var ProjectsDiscussionModel = require("../../models/inncode/projectDiscussion.model.js");

/**
 * ProjectDiscussionController.js
 *
 * @description :: Server-side logic for managing ProjectDiscussion.
 */
module.exports = {
  /**
   * ProjectDiscussionController.list()
   */
  list: function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    ProjectsDiscussionModel.find(function (err, ProjectDiscussion) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting ProjectDiscussion.",
          error: err,
        });
      }
      return res.json(ProjectDiscussion);
    });
  },

  /**
   * ProjectDiscussionController.show()
   */
  show: function (req, res) {
    var id = req.params.id;
    ProjectsDiscussionModel.findOne({ _id: id }, function (
      err,
      ProjectDiscussion
    ) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting ProjectDiscussion.",
          error: err,
        });
      }
      if (!ProjectDiscussion) {
        return res.status(404).json({
          message: "No such ProjectDiscussion",
        });
      }
      return res.json(ProjectDiscussion);
    });
  },

  /**
   * ProjectDiscussionController.create()
   */
  create: function (req, res) {
    console.log(req);
    var ProjectDiscussion = new ProjectsDiscussionModel({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      project_description: req.body.project_description,
      created_at: new Date(Date.now()).toLocaleString(),
      updated_at: new Date(Date.now()).toLocaleString(),
    });

    ProjectDiscussion.save(function (err, ProjectDiscussion) {
      if (err) {
        return res.status(500).json({
          message: "Error when creating ProjectDiscussion",
          error: err,
        });
      }
      return res.status(201).json(ProjectDiscussion);
    });
  },

  /**
   * ProjectDiscussionController.update()
   */
  //   update: function(req, res) {
  //     var id = req.params.id;
  //     ProjectsDiscussionModel.findOne({ _id: id }, function(err, ProjectDiscussion) {
  //       if (err) {
  //         return res.status(500).json({
  //           message: "Error when getting ProjectDiscussion",
  //           error: err
  //         });
  //       }
  //       if (!ProjectDiscussion) {
  //         return res.status(404).json({
  //           message: "No such ProjectDiscussion"
  //         });
  //       }

  //       ProjectDiscussion.category = req.body.category
  //         ? req.body.category
  //         : ProjectDiscussion.category;
  //       ProjectDiscussion.price = req.body.price ? req.body.price : ProjectDiscussion.price;
  //       ProjectDiscussion.costPrice = req.body.costPrice
  //         ? req.body.costPrice
  //         : ProjectDiscussion.costPrice;
  //       ProjectDiscussion.isAvailable = req.body.isAvailable;
  //       ProjectDiscussion.name = req.body.name ? req.body.name : ProjectDiscussion.name;
  //       ProjectDiscussion.discount = req.body.discount
  //         ? req.body.discount
  //         : ProjectDiscussion.discount;
  //       ProjectDiscussion.created_at = ProjectDiscussion.created_at;
  //       ProjectDiscussion.updated_at = new Date(Date.now()).toLocaleString();
  //       ProjectDiscussion.isPopular = req.body.isPopular;

  //       ProjectDiscussion.image_base = req.body.image_base
  //         ? req.body.image_base
  //         : ProjectDiscussion.image_base;

  //       ProjectDiscussion.save(function(err, ProjectDiscussion) {
  //         if (err) {
  //           return res.status(500).json({
  //             message: "Error when updating ProjectDiscussion.",
  //             error: err
  //           });
  //         }

  //         return res.json(ProjectDiscussion);
  //       });
  //     });
  //   },

  /**
   * ProjectDiscussionController.remove()
   */
  remove: function (req, res) {
    var id = req.params.id;
    ProjectsDiscussionModel.findByIdAndRemove(id, function (
      err,
      ProjectDiscussion
    ) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the ProjectDiscussion.",
          error: err,
        });
      }
      return res.status(204).json({ success: 0 });
    });
  },
};
