const mongoose = require('mongoose');
const shortid = require('shortid');
const moment = require('moment');
const responseLib = require('../libs/responseLib');
const emailLib = require('../libs/emailLib');
const checkLib = require('../libs/checkLib');
const NotificationModel = mongoose.model('Notification');
const UserModel = mongoose.model('User');
const loggerLib = require('../libs/loggerLib');

/*----- GET METHOD START -----*/
let getNotifications = (req, res) => {
    /* Method to create and save notification in to DB */
    try {
        NotificationModel.find({ receiverUserId: req.params.userId })
            .select('-_id -__v')
            .lean()
            .exec((err, result) => {
                if (err) {
                    let response = responseLib.generate(true, 'Internal server error, get notification failed', 500, null);
                    res.send(response);
                } else if (checkLib.isEmpty(result)) {
                    let response = responseLib.generate(true, 'No notifications found for selected user', 404, null);
                    res.send(response);
                } else {
                    let response = responseLib.generate(false, 'Notification found', 200, result);
                    res.send(response);
                }
            })
    } catch (err) {
        loggerLib.error(err, 'notoficationController:getNotifications()');
        let response = responseLib.generate(true, 'Failed to get notification', 500, null);
        res.send(response);
    }
}
/*----- GET METHOD END -----*/

/*---------CREATE METHOD START----------------*/
let createNotification = (req) => {
    /* API internal Method to create and save notification in to DB, This method is called intrnally only */
    let newNotification = new NotificationModel({
        notificationId: shortid.generate(),
        notificationIssueId: req.notificationIssueId,
        notificationIssueNumber: req.notificationIssueNumber,
        receiverUserId: req.receiverUserId,
        message: req.message,
        dateTime: moment.utc().format()
    });
    try {
        newNotification.save((err, result) => {
            if (err) {
                loggerLib.error(err, 'notoficationController:createNotifications()');
            } else {
                let createdNotification = result.toObject();
                sendNotificationEmail(createdNotification);
                loggerLib.info('Notification created', 'notoficationController:createNotifications()');
            }
        })
    } catch (err) {
        loggerLib.error(err, 'notoficationController:createNotifications()');
    }
};
/*---------CREATE METHOD END----------------*/

/*---------PRIVATE METHODS START----------------*/
let getUser = (userId) => {
    /* Private method to get user detais (email) from DB to send notifications*/
    return new Promise((resolve, reject) => {
        try {
            UserModel.findOne({ 'userId': userId })
                .select('-password -__v -_id')
                .lean()
                .exec((err, result) => {
                    if (err) {
                        loggerLib.error(err, 'notoficationController:getUser()');
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
        } catch (err) {
            loggerLib.error(err, 'notoficationController:getUser()');
            reject(err);
        }
    })
}
let sendNotificationEmail = (createdNotification) => {
    /* Private method to call emailLib library method to send notification email*/
    getUser(createdNotification.receiverUserId).then(user => {
        if (user && user.email) {
            emailLib.sendEmail(user.email, 'Notification',
                `Dear user, <br/><br/> A new notification for you:<br/> 
                 ${createdNotification.message} 
                 <br/> <br/> Cheers, <br/> Issue Tracking Tool.`);
        }
    })
}
/*---------PRIVATE METHODS END----------------*/


module.exports = {
    getNotifications: getNotifications,
    createNotification: createNotification
}