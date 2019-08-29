const issueController = require("../controllers/issueController");
const appConfig = require("../../config/appConfiguration");
const auth = require('../middlewares/auth');
const validation = require('../middlewares/validation');

let setRouter = (app) => {
  let baseUrl = `${appConfig.apiVersion}/issue`;

  app.post(`${baseUrl}/create`, auth.isAuthorized,  validation.validateCreateIssueRequest, issueController.createIssue);
  /**
     * @apiGroup Issue 
     * @apiVersion 1.0.0
     * @api {post} /api/v1/issue/create Create
     * 
     * @apiParam {string} title Title of issue. (body params)(required)
     * @apiParam {string} status Status of issue. (body params)
     * @apiParam {string} reporterUserId Reporter userId of issue. (body params)
     * @apiParam {string} reporterName Reporter name of issue. (body params)
     * @apiParam {string} priority priority of issue. (body params)
     * @apiParam {string} issueType issueType of issue. (body params)
     * @apiParam {string} estimate estimate of issue. (body params)
     * @apiParam {string} description description of issue. (body params)
     * @apiParam {array} attachments attachments of issue. (body params)
     * @apiParam {string} assigneeUserId assigneeUserId of issue. (body params)
     * @apiParam {string} assigneeName assigneeName of issue. (body params)
     * @apiParam {string} authToken authToken . (query params/body params/header)(required)
     * 
     * 
     * 
     * @apiSuccessExample {object} Success-Response:
     * {
     "error":false,"message":"Issue created","status":200,"data":{"issueId":"rinwEgcOi","title":
     "Implement authentication in API","status":"In-backlog","issueType":"New Feature",
     "description":"Implement authentication - usermanagement in API","priority":"Medium",
     "reporterUserId":"O1pU4GpJS","assigneeUserId":"ZE35LRyJQ","reporterName":"Rinkesh Patel",
     "assigneeName":"Rahul Sahah",
     "attachments":[{"link":"http://localhost:3002/api/v1/file/read/11fbcf69d81ade5b1deba22b4fba8207.pdf",
     "name":"IssueAttachment.pdf","dbFileName":"11fbcf69d81ade5b1deba22b4fba8207.pdf"}],
     "estimate":"2d","createdDate":"2019-07-19T21:40:04.000Z","lastUpdatedDate":null,
     "lastUpdatedBy":"",
     "watchers":[],"comments":[],
     "_id":"5d3238b434b0774034694b62","issueNumber":40,"__v":0}
    }
  }
    */


  app.put(`${baseUrl}/update/:issueId`, auth.isAuthorized, issueController.updateIssue);
  /**
     * @apiGroup Issue 
     * @apiVersion 1.0.0
     * @api {post} /api/v1/issue/update/:issueId Update
     * 
     * @apiParam {string} title Title of issue. (body params)(required)
     * @apiParam {string} status Status of issue. (body params)
     * @apiParam {string} reporterUserId Reporter userId of issue. (body params)
     * @apiParam {string} reporterName Reporter name of issue. (body params)
     * @apiParam {string} priority priority of issue. (body params)
     * @apiParam {string} issueType issueType of issue. (body params)
     * @apiParam {string} estimate estimate of issue. (body params)
     * @apiParam {string} description description of issue. (body params)
     * @apiParam {string} assigneeUserId assigneeUserId of issue. (body params)
     * @apiParam {string} assigneeName assigneeName of issue. (body params)
     * @apiParam {string} lastUpdatedBy user name who has updated the issue. (body params)
     * @apiParam {string} lastUpdatedDate date-time of update (body params)
     * @apiParam {string} authToken authToken . (query params/body params/header)(required)
     * 
     * 
     * 
     * @apiSuccessExample {object} Success-Response:
     * {"error":false,"message":"Issue updated","status":200,"data":{"n":1,"nModified":1,"ok":1}}
  }
    */

  app.get(`${baseUrl}/read`, auth.isAuthorized, issueController.getIssues);
    /**
     * @apiGroup Issue 
     * @apiVersion 1.0.0
     * @api {post} /api/v1/issue/read/ Read
     * 
     * @apiParam {string} authToken authToken . (query params/body params/header)(required)
     * 
     * 
     * 
     * @apiSuccessExample {object} Success-Response:
     * {
      "error":false,"message":"Issue found","status":200,"data":[{"issueId":"rinwEgcOi",
      "title":"Implement authentication in API","status":"In-progress","issueType":"New Feature",
      "description":"Implement authentication - usermanagement in API","priority":"Medium",
      "reporterUserId":"O1pU4GpJS","assigneeUserId":"ZE35LRyJQ","reporterName":"Rinkesh Patel",
      "assigneeName":"Rahul Sahah",
      "attachments":[{"link":"http://localhost:3002/api/v1/file/read/11fbcf69d81ade5b1deba22b4fba8207.pdf",
      "name":"IssueAttachment.pdf","dbFileName":"11fbcf69d81ade5b1deba22b4fba8207.pdf"}],"estimate":"2d",
      "createdDate":"2019-07-19T21:40:04.000Z","lastUpdatedDate":"2019-07-19T21:50:35.151Z",
      "lastUpdatedBy":"Rinkesh Patel","watchers":[],"comments":[],"issueNumber":40}]}
  }
    */

  app.get(`${baseUrl}/read/:issueNumber`, auth.isAuthorized, validation.validateGetIssueByNumberRequest, issueController.getIssueByNumber);
  /**
     * @apiGroup Issue 
     * @apiVersion 1.0.0
     * @api {post} /api/v1/issue/read/:issueNumber Read ByIssueNumber
     * 
     * @apiParam {string} authToken authToken . (query params/body params/header)(required)
     * @apiParam {string} issueNumber issueNumber of the issue. (query params)(required)
     * 
     * 
     * 
     * @apiSuccessExample {object} Success-Response:
     * {
      "error":false,"message":"Issue found","status":200,"data":[{"issueId":"rinwEgcOi",
      "title":"Implement authentication in API","status":"In-progress","issueType":"New Feature",
      "description":"Implement authentication - usermanagement in API","priority":"Medium",
      "reporterUserId":"O1pU4GpJS","assigneeUserId":"ZE35LRyJQ","reporterName":"Rinkesh Patel",
      "assigneeName":"Rahul Sahah",
      "attachments":[{"link":"http://localhost:3002/api/v1/file/read/11fbcf69d81ade5b1deba22b4fba8207.pdf",
      "name":"IssueAttachment.pdf","dbFileName":"11fbcf69d81ade5b1deba22b4fba8207.pdf"}],"estimate":"2d",
      "createdDate":"2019-07-19T21:40:04.000Z","lastUpdatedDate":"2019-07-19T21:50:35.151Z",
      "lastUpdatedBy":"Rinkesh Patel","watchers":[],"comments":[],"issueNumber":40}]}
  }
    */

  app.post(`${baseUrl}/delete`, auth.isAuthorized, issueController.deleteIssue);
   /**
     * @apiGroup Issue 
     * @apiVersion 1.0.0
     * @api {post} /api/v1/issue/delete/ Delete
     * 
     * @apiParam {string} authToken authToken . (query params/body params/header)(required)
     * @apiParam {string} issueNumber issueNumber of the issue. (query params)(required)
     * 
     * 
     * 
     * @apiSuccessExample {object} Success-Response:
     * {
      "error":false,"message":"Issue deleted","status":200,"data":[{"issueId":"rinwEgcOi",
      "title":"Implement authentication in API","status":"In-progress","issueType":"New Feature",
      "description":"Implement authentication - usermanagement in API","priority":"Medium",
      "reporterUserId":"O1pU4GpJS","assigneeUserId":"ZE35LRyJQ","reporterName":"Rinkesh Patel",
      "assigneeName":"Rahul Sahah",
      "attachments":[{"link":"http://localhost:3002/api/v1/file/read/11fbcf69d81ade5b1deba22b4fba8207.pdf",
      "name":"IssueAttachment.pdf","dbFileName":"11fbcf69d81ade5b1deba22b4fba8207.pdf"}],"estimate":"2d",
      "createdDate":"2019-07-19T21:40:04.000Z","lastUpdatedDate":"2019-07-19T21:50:35.151Z",
      "lastUpdatedBy":"Rinkesh Patel","watchers":[],"comments":[],"issueNumber":40}]}
  }
    */

}

module.exports = {
  setRouter: setRouter
}