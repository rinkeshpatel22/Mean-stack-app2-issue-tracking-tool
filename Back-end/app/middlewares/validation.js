const responseLib = require('../libs/responseLib');
const validationLib = require('../libs/validationLib');
const checkLib = require('../libs/checkLib');

let validateSignupRequest = (req, res, next) => {
    if (req.body.email && req.body.password && req.body.userName) {
        if (!validationLib.validateEmail(req.body.email)) {
            let response = responseLib.generate(true, 'Invalid email id', 400, null);
            res.send(response);
        } else if (!validationLib.validatePassword(req.body.password)) {
            let response = responseLib.generate(true, 'Password length must be minimum 8 characters', 400, null);
            res.send(response);
        } else {
            next();
        }
    } else {
        let response = responseLib.generate(true, 'Bad request, some required parameter missing', 400, null);
        res.send(response);
    }
}

let validateForgotPasswordRequest = (req, res, next) => {
    if (checkLib.isEmpty(req.body.email)) {
        let response = responseLib.generate(true, 'Bad request, email is missing', 400, null);
        res.send(response);
    } else {
        next();
    }
}

let validateGetNotificationRequest = (req, res, next) => {
    if (checkLib.isEmpty(req.params.userId)) {
        let response = responseLib.generate(true, 'parameter missing', 400, null);
        res.send(response);
    } else {
        next();
    }
}

let validateCreateIssueRequest = (req, res, next) => {
    if (req.body.issueType && req.body.title && req.body.priority) {
        next();
    } else {
        let response = responseLib.generate(true, 'Bad request, Some required fields of issue are missing.', 400, null);
        res.send(response);
    }
}

let validateGetIssueByNumberRequest = (req, res, next) => {
    if (checkLib.isEmpty(req.params.issueNumber)) {
        let response = responseLib.generate(true, 'parameters missing', 400, null);
        res.send(response);
    } else {
        next();
    }
}

module.exports = {
    validateSignupRequest: validateSignupRequest,
    validateForgotPasswordRequest: validateForgotPasswordRequest,
    validateGetNotificationRequest: validateGetNotificationRequest,
    validateCreateIssueRequest: validateCreateIssueRequest,
    validateGetIssueByNumberRequest: validateGetIssueByNumberRequest
};