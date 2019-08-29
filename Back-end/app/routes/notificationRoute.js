const notificationController = require("../controllers/notificationController");
const appConfig = require("../../config/appConfiguration");
const auth = require('../middlewares/auth');
const validation = require('../middlewares/validation');

let setRouter = (app) => {
  let baseUrl = `${appConfig.apiVersion}/notification`;
  app.get(`${baseUrl}/read/:userId`, auth.isAuthorized, validation.validateGetNotificationRequest, notificationController.getNotifications);
   /**
     * @apiGroup Notification 
     * @apiVersion 1.0.0
     * @api {post} /api/v1/notification/read/:userId Read
     * 
     * @apiParam {string} authToken authToken . (query params/body params/header)(required)
     * @apiParam {string} userId userId of the user for whom notification get. (query params)(required)
     * 
     * 
     * 
     * @apiSuccessExample {object} Success-Response:
     * {
      "error":false,"message":"Notification found","status":200,"data":[{"notificationId":"8s9WaVmC0R",
      "notificationIssueId":"E5fJShXtO","receiverUserId":"avGRIuP9d","message":"Issue <b>ID-5</b> 
      updated by <b>Rinkesh Patel</b>","dateTime":"2019-07-14T22:24:14.000Z","notificationIssueNumber":5},
      {"notificationId":"ZCHQH4nXgJ","notificationIssueId":"E5fJShXtO","receiverUserId":"avGRIuP9d",
      "message":"Issue <b>ID-5</b> updated by <b>Kavir Artgallery</b>","dateTime":"2019-07-16T17:15:48.000Z",
      notificationIssueNumber":5},{"notificationId":"ePzGCFTe03","notificationIssueId":"E5fJShXtO",
      "receiverUserId":"avGRIuP9d","message":"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>",
      "dateTime":"2019-07-16T17:15:57.000Z","notificationIssueNumber":5},{"notificationId":"o3waNxCzHA",
      "notificationIssueId":"E5fJShXtO","receiverUserId":"avGRIuP9d","message":"Issue <b>ID-5</b> 
      updated by <b>Rinkesh Patel</b>","dateTime":"2019-07-16T17:18:31.000Z","notificationIssueNumber":5},
      {"notificationId":"oBiRXOcZN6","notificationIssueId":"E5fJShXtO","receiverUserId":"avGRIuP9d",
      "message":"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>","dateTime":"2019-07-16T17:18:36.000Z",
      "notificationIssueNumber":5},{"notificationId":"5UwlurpmGp","notificationIssueId":"E5fJShXtO",
      "receiverUserId":"avGRIuP9d","message":"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>",
      "dateTime":"2019-07-16T17:18:43.000Z","notificationIssueNumber":5},{"notificationId":"4D0J23GvHi",
      "notificationIssueId":"E5fJShXtO","receiverUserId":"avGRIuP9d","message":"Issue <b>ID-5</b> 
      updated by <b>Rinkesh Patel</b>","dateTime":"2019-07-16T17:18:45.000Z","notificationIssueNumber":5},
      {"notificationId":"HPjFj0khbV","notificationIssueId":"E5fJShXtO","receiverUserId":"avGRIuP9d",
      "message":"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>","dateTime":"2019-07-16T18:13:14.000Z",
      "notificationIssueNumber":5},{"notificationId":"eR-w7T19er","notificationIssueId":"E5fJShXtO",
      "receiverUserId":"avGRIuP9d","message":"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>",
      "dateTime":"2019-07-16T18:13:23.000Z","notificationIssueNumber":5},{"notificationId":"A8o7GliNj3",
      "notificationIssueId":"E5fJShXtO","receiverUserId":"avGRIuP9d","message":"Issue <b>ID-5</b> 
      updated by <b>Rinkesh Patel</b>","dateTime":"2019-07-16T18:13:25.000Z","notificationIssueNumber":5},
      {"notificationId":"MM9ilrYkWB","notificationIssueId":"E5fJShXtO","receiverUserId":"avGRIuP9d",
      "message":"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>","dateTime":"2019-07-18T19:09:35.000Z",
      "notificationIssueNumber":5},{"notificationId":"Rc47jZ3Zal","notificationIssueId":"E5fJShXtO",
      "receiverUserId":"avGRIuP9d","message":"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>",
      "dateTime":"2019-07-19T16:02:35.000Z","notificationIssueNumber":5},{"notificationId":"dtV2yxwO-q",
      "notificationIssueId":"E5fJShXtO","receiverUserId":"avGRIuP9d","message":"Issue <b>ID-5</b> 
      updated by <b>Rinkesh Patel</b>","dateTime":"2019-07-19T16:16:30.000Z","notificationIssueNumber":5},
      {"notificationId":"Ztay9Ao1xw","notificationIssueId":"E5fJShXtO","receiverUserId":"avGRIuP9d",
      "message":"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>","dateTime":"2019-07-19T16:16:41.000Z",
      "notificationIssueNumber":5},{"notificationId":"pC7yvTKyNO","notificationIssueId":"E5fJShXtO",
      
      "receiverUserId":"avGRIuP9d","message":"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>",
      "dateTime":"2019-07-19T16:16:43.000Z","notificationIssueNumber":5},{"notificationId":"HEo7NlPXP2",
      "notificationIssueId":"E5fJShXtO","receiverUserId":"avGRIuP9d","message":"Issue <b>ID-5</b> 
      updated by <b>Rinkesh Patel</b>","dateTime":"2019-07-19T16:16:48.000Z","notificationIssueNumber":5},
      {"notificationId":"OX37HZv7lu","notificationIssueId":"E5fJShXtO","receiverUserId":"avGRIuP9d",
      "message":"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>","dateTime":"2019-07-19T16:17:01.000Z",
      "notificationIssueNumber":5},{"notificationId":"-OQSe9Oewe","notificationIssueId":"E5fJShXtO",
      "receiverUserId":"avGRIuP9d","message":"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>",
      "dateTime":"2019-07-19T16:17:29.000Z","notificationIssueNumber":5},{"notificationId":"3wmpmqrlps",
      "notificationIssueId":"E5fJShXtO","receiverUserId":"avGRIuP9d","message":"Issue <b>ID-5</b> 
      updated by <b>Rinkesh Patel</b>","dateTime":"2019-07-19T16:17:33.000Z","notificationIssueNumber":5},
      {"notificationId":"5Z4I4LQ0yT","notificationIssueId":"vjAyMNu3y","receiverUserId":"avGRIuP9d",
      "message":"Issue <b>ID-35</b> updated by <b>Rohit Sharma</b>","dateTime":"2019-07-19T17:24:58.000Z",
      "notificationIssueNumber":35},{"notificationId":"6En8-xlYsF","notificationIssueId":"vjAyMNu3y",
      "receiverUserId":"avGRIuP9d","message":"Issue <b>ID-35</b> updated by <b>t t</b>",
      "dateTime":"2019-07-19T17:27:01.000Z","notificationIssueNumber":35},{"notificationId":"hdHiF7L3Q-","notificationIssueId":"vjAyMNu3y","receiverUserId":"avGRIuP9d",
      "message":"Issue <b>ID-35</b> updated by <b>t t</b>","dateTime":"2019-07-19T17:29:51.000Z","notificationIssueNumber":35},
      {"notificationId":"t2F-_uZ3tQ","notificationIssueId":"_-K4gkSTQ","receiverUserId":"avGRIuP9d",
      "message":"Issue <b>ID-38</b> updated by <b>Sanjay Patel</b>","dateTime":"2019-07-19T20:13:59.000Z","notificationIssueNumber":38}]}
  }
    */
}

module.exports = {
  setRouter: setRouter
}