const mongoose = require('mongoose');
const shortid = require('shortid');
const moment = require('moment');
const responseLib = require('../libs/responseLib');
const checkLib = require('../libs/checkLib');
const notificationController = require("../controllers/notificationController");
const IssueModel = mongoose.model('Issue');
const loggerLib = require('../libs/loggerLib');

/*---------CREATE ISSUE START----------------*/
let createIssue = (req, res) => {

    try {
        let newIssue = new IssueModel({
            issueId: shortid.generate(),
            issueType: req.body.issueType,
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            status : req.body.status,
            reporterUserId: req.body.reporterUserId,
            assigneeUserId: req.body.assigneeUserId,
            reporterName: req.body.reporterName,
            assigneeName: req.body.assigneeName,
            attachments: req.body.attachments,
            estimate: req.body.estimate,
            watchers: req.body.watchers,
            comments: req.body.comments,
            createdDate: moment.utc().format()
        });
        newIssue.save((err, createdIssue) => {
            if (err) {
                let response = responseLib.generate(true, 'Internal server error, falied to create issue.', 500, null);
                res.send(response);
            } else {
                // createdIssue = result.toObject();
                generateNotification(createdIssue, 'created');
                let response = responseLib.generate(false, 'Issue created', 200, createdIssue);
                res.send(response);
            }
        })
    } catch (err) {
        loggerLib.error(err, 'issueController:createIssue()');
        let response = responseLib.generate(true, 'Internal server error, failed to create issue', 500, null);
        res.send(response);
    }
};
/*---------CREATE ISSUE END----------------*/

/*---------UPDATE ISSUE START----------------*/
let updateIssue = (req, res) => {
    let findIssues = () => {
        return new Promise((resolve, reject) => {
            try {
                IssueModel.findOne({ issueId: req.params.issueId }, (err, findIssueResult) => {
                    if (err) {
                        loggerLib.error(err, 'issueController:updateIssue()');
                        let response = responseLib.generate(true, 'Internal server error, failed to find issue', 500, null);
                        reject(response)
                    } else if (checkLib.isEmpty(findIssueResult)) {
                        let response = responseLib.generate(true, 'Issue not found', 404, null);
                        reject(response);
                    } else {
                        resolve(findIssueResult);
                    }
                })
            } catch (err) {
                loggerLib.error(err, 'issueController:updateIssue()');
                let response = responseLib.generate(true, 'Internal server error, failed to update issue', 500, null);
                reject(response);
            }
        })
    }
    let update = (findIssueResult) => {
        return new Promise((resolve, reject) => {
            let options = req.body
            try {
                IssueModel.update({ issueId: req.params.issueId }, options, (err, updatedIssue) => {
                    if (err) {
                        let response = responseLib.generate(true, 'Internal server error', 500, null);
                        reject(response);
                    } else if (checkLib.isEmpty(updatedIssue)) {
                        let response = responseLib.generate(true, 'Failed to update issue', 404, null);
                        reject(response);
                    } else {
                        findIssueResult.lastUpdatedBy = options.lastUpdatedBy;
                        findIssueResult.lastUpdatedDate = options.lastUpdatedDate;
                        generateNotification(findIssueResult, 'updated');
                        resolve(updatedIssue);
                    }
                });
            } catch (err) {
                loggerLib.error(err, 'issueController:updateIssue()');
                let response = responseLib.generate(true, 'Internal server error, failed to update issue', 500, null);
                reject(response);
            }
        })
    }
    findIssues()
        .then(update)
        .then((resolve) => {
            let response = responseLib.generate(false, 'Issue updated', 200, resolve);
            res.send(response)
        }).catch((err) => {
            let response = responseLib.generate(true, 'Internal server error', 500, err);
            res.send(response);
        });
}
/*---------UPDATE ISSUE END----------------*/

/*---------DELETE ISSUE START----------------*/
let deleteIssue = (req, res) => {
    let findIssue = () => {
        return new Promise((resolve, reject) => {
            try {
                IssueModel.findOne({ issueId: req.body.issueId }, (err, result) => {
                    if (err) {
                        let response = responseLib.generate(true, 'Internal server error, falied to find issue', 500, null);
                        reject(response);
                    } else if (checkLib.isEmpty(result)) {
                        let response = responseLib.generate(true, 'Issue not found', 404, null);
                        reject(response);
                    } else {
                        resolve(result);
                    }
                });
            } catch (err) {
                loggerLib.error(err, 'issueController:deleteIssue()');
                let response = responseLib.generate(true, 'Internal server error, failed to delete issue', 500, null);
                reject(response);
            }
        })
    }
    let deleteThisIssue = () => {
        return new Promise((resolve, reject) => {
            try {
                IssueModel.findOneAndRemove({ issueId: req.body.issueId }, (err, deleteResult) => {
                    if (err) {
                        let response = responseLib.generate(true, 'Internal server error, failed to delete issue', 500, null);
                        reject(response);
                    } else if (checkLib.isEmpty(deleteResult)) {
                        let response = responseLib.generate(true, 'Issue not found', 404, null);
                        reject(response);
                    } else {
                        resolve(deleteResult);
                    }
                })
            } catch (err) {
                loggerLib.error(err, 'issueController:deleteIssue()');
                let response = responseLib.generate(true, 'Internal server error, failed to delete issue', 500, null);
                reject(response);
            }
        })
    }
    findIssue()
        .then(deleteThisIssue)
        .then((resolve) => {
            let response = responseLib.generate(false, 'Issue deleted', 200, resolve);
            res.send(response);
        }).catch((err) => {
            let response = responseLib.generate(true, 'Internal server error', 500, err);
            res.send(response);
        });
}
/*---------DELETE ISSUE END----------------*/

/*---------GET ISSUES START----------------*/
let getIssues = (req, res) => {

    try {
        IssueModel.find()
            .select('-_id -__v')
            .lean()
            .exec((err, result) => {
                if (err) {
                    let response = responseLib.generate(true, 'Internal server error, failed to get issues', 500, null);
                    res.send(response);
                } else if (checkLib.isEmpty(result)) {
                    let response = responseLib.generate(true, 'No issues found', 404, null);
                    res.send(response);
                } else {
                    let response = responseLib.generate(false, 'Issue found', 200, result);
                    res.send(response);
                }
            });
    } catch (err) {
        loggerLib.error(err, 'issueController:getIssues()');
        let response = responseLib.generate(true, 'Internal server error, failed to get issues', 500, null);
        res.send(response);
    }
}
/*---------GET ISSUES END----------------*/

/*---------GET ISSUE BY issueNumber START----------------*/
let getIssueByNumber = (req, res) => {

    try {
        IssueModel.find({ issueNumber: req.params.issueNumber })
            .select('-_id -__v')
            .lean()
            .exec((err, result) => {
                if (err) {
                    let response = responseLib.generate(true, 'Internal server error while finding issue for selected user', 500, null);
                    res.send(response);
                } else if (checkLib.isEmpty(result)) {
                    let response = responseLib.generate(true, 'No issues found', 404, null);
                    res.send(response);
                } else {
                    let response = responseLib.generate(false, 'Issue found', 200, result);
                    res.send(response);
                }
            });
    } catch (err) {
        loggerLib.error(err, 'issueController:getIssueByNumber()');
        let response = responseLib.generate(true, 'Internal server error, failed to get issue', 500, null);
        res.send(response);
    }
}
/*---------GET ISSUE BY issueNumber END----------------*/

/*---------PRIVATE METHODS START----------------*/
let getNotificationReceiversList = (issueObject) => {
    let notificationReceivers = [];
    notificationReceivers.push(issueObject.assigneeUserId);
    notificationReceivers.push(issueObject.reporterUserId);
    if (issueObject.watchers && issueObject.watchers.length > 0) {
        issueObject.watchers.forEach(watcher => notificationReceivers.push(watcher));
    }
    // return unique userId elements.
    return [...new Set(notificationReceivers)];
}
let generateNotification = (issueObject, action) => {
    let notificationReceivers = getNotificationReceiversList(issueObject);
    notificationReceivers.forEach(receiver => {
        if (receiver) {
            let notification = {
                notificationIssueId: issueObject.issueId,
                notificationIssueNumber: issueObject.issueNumber,
                receiverUserId: receiver,
                message: `Below issue ${action} by <b>${issueObject.lastUpdatedBy ? issueObject.lastUpdatedBy : issueObject.reporterName}</b> on 
                 ${issueObject.lastUpdatedDate? issueObject.lastUpdatedDate : issueObject.createdDate} <br/> <b>ID-${issueObject.issueNumber}</b>: ${issueObject.title}`
            }
            notificationController.createNotification(notification);
        }
    });
}
/*---------PRIVATE METHODS END----------------*/

module.exports = {
    createIssue: createIssue,
    updateIssue: updateIssue,
    deleteIssue: deleteIssue,
    getIssues: getIssues,
    getIssueByNumber: getIssueByNumber
}