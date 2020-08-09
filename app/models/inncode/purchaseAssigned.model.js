const mongoose = require('mongoose');

const purchaseAssignedSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String
    },
    isBanned: {
        type: Boolean,
        default: false
    },
    assignedProjects: [{
        packageBoughtBy: {type: String},
        packageManagedBy: {type: String},
        packageManagerId: {type: String},
        packageDeadlineDate: {type: String},
        packageLink:{type: String, default: null},
        updatedOn:{type: Date, default: null}
    }],
    createdOn: {type: Date},
    updatedOn: {type: Date}
})

const PurchaseAssignedModel = module.exports = mongoose.model('PurchaseAssigned', purchaseAssignedSchema);
