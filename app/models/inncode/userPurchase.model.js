const mongoose = require('mongoose');

const userPurchaseSchema = new mongoose.Schema({
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
    userPackage: [{
        packageServices: [String],
        paymentsHistory: [{
            date: {type: String},
            amount: {type: String},
            mode: {type: String, default: "NA"},
            updatedOn: {type: String, default: null},
            status: {type: String, default: null},
            validity: {type: String},
        }]
    }],
    messages: [{
        msg: {type: String},
        createdOn: {type: Date},
    }],
    servicesHistory: [{
        serviceDescription:{type: String},
        serviceDeliveredOn:{type: Date},
        serviceLinks:[String]
    }],

    // packagesReceived : [{
    //     packageFor: {type: String},
    //     packagesManaging: [
    //         {	
    //         packageDesc: {type: String},
    //         ispackageApproved: {type: Boolean, default: false},
    //         isPackageAssigned: {type: Boolean, default: false},
    //         packageCreatedOn: {type: Date},
    //         assignee: {type: String, default: null},
    //         packageDeadiline: {type: String, default: null},
    //         isUploaded: {type: Boolean, default: false},
    //     }
    //     ]
    // }],

    // assignedProjects: [{
    //     packageBoughtBy: {type: String},
    //     packageManagedBy: {type: String},
    //     packageManagerId: {type: String},
    //     packageDeadlineDate: {type: String},
    //     packageLink:{type: String, default: null},
    //     updatedOn:{type: Date, default: null}
    // }],
    createdOn: {type: Date},
    updatedOn: {type: Date}
})

const UserPurchaseModel = module.exports = mongoose.model('UserPurchase', userPurchaseSchema);
