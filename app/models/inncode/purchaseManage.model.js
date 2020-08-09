const mongoose = require('mongoose');

const purchaseManageSchema = new mongoose.Schema({
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
    packagesReceived : [{
        packageFor: {type: String},
        packagesManaging: [
            {	
            packageDesc: {type: String},
            ispackageApproved: {type: Boolean, default: false},
            isPackageAssigned: {type: Boolean, default: false},
            packageCreatedOn: {type: Date},
            assignee: {type: String, default: null},
            packageDeadiline: {type: String, default: null},
            isUploaded: {type: Boolean, default: false},
        }
        ]
    }],
    createdOn: {type: Date},
    updatedOn: {type: Date}
})

const PurchaseManageModel = module.exports = mongoose.model('PurchaseManage', purchaseManageSchema);
