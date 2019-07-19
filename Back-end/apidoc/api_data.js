define({ "api": [
  {
    "group": "File",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/file/read/:filename",
    "title": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "filename",
            "description": "<p>filename of file. (query params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"message\":\"File deleted\"}\n  }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/fileRoute.js",
    "groupTitle": "File",
    "name": "PostApiV1FileReadFilename"
  },
  {
    "group": "File",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/file/read/:filename",
    "title": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "filename",
            "description": "<p>filename of file. (query params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"filename\":\"fa100f9d77d0da498133f0ea57369aac.pdf\",\"bucketName\":\"uploads\",\n      \"originalFileName\":\"IssueAttachment.pdf\"}\n  }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/fileRoute.js",
    "groupTitle": "File",
    "name": "PostApiV1FileReadFilename"
  },
  {
    "group": "File",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/file/upload",
    "title": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "binary",
            "optional": false,
            "field": "file",
            "description": "<p>file to be uploaded. (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"filename\":\"fa100f9d77d0da498133f0ea57369aac.pdf\",\"bucketName\":\"uploads\",\n      \"originalFileName\":\"IssueAttachment.pdf\"}\n  }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/fileRoute.js",
    "groupTitle": "File",
    "name": "PostApiV1FileUpload"
  },
  {
    "group": "Issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue/create",
    "title": "Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title of issue. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Status of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporterUserId",
            "description": "<p>Reporter userId of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporterName",
            "description": "<p>Reporter name of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "priority",
            "description": "<p>priority of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueType",
            "description": "<p>issueType of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "estimate",
            "description": "<p>estimate of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "attachments",
            "description": "<p>attachments of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assigneeUserId",
            "description": "<p>assigneeUserId of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assigneeName",
            "description": "<p>assigneeName of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken . (query params/body params/header)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\":false,\"message\":\"Issue created\",\"status\":200,\"data\":{\"issueId\":\"rinwEgcOi\",\"title\":\n     \"Implement authentication in API\",\"status\":\"In-backlog\",\"issueType\":\"New Feature\",\n     \"description\":\"Implement authentication - usermanagement in API\",\"priority\":\"Medium\",\n     \"reporterUserId\":\"O1pU4GpJS\",\"assigneeUserId\":\"ZE35LRyJQ\",\"reporterName\":\"Rinkesh Patel\",\n     \"assigneeName\":\"Rahul Sahah\",\n     \"attachments\":[{\"link\":\"http://localhost:3002/api/v1/file/read/11fbcf69d81ade5b1deba22b4fba8207.pdf\",\n     \"name\":\"IssueAttachment.pdf\",\"dbFileName\":\"11fbcf69d81ade5b1deba22b4fba8207.pdf\"}],\n     \"estimate\":\"2d\",\"createdDate\":\"2019-07-19T21:40:04.000Z\",\"lastUpdatedDate\":null,\n     \"lastUpdatedBy\":\"\",\n     \"watchers\":[],\"comments\":[],\n     \"_id\":\"5d3238b434b0774034694b62\",\"issueNumber\":40,\"__v\":0}\n    }\n  }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "Issue",
    "name": "PostApiV1IssueCreate"
  },
  {
    "group": "Issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue/delete/",
    "title": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken . (query params/body params/header)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueNumber",
            "description": "<p>issueNumber of the issue. (query params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\":false,\"message\":\"Issue deleted\",\"status\":200,\"data\":[{\"issueId\":\"rinwEgcOi\",\n      \"title\":\"Implement authentication in API\",\"status\":\"In-progress\",\"issueType\":\"New Feature\",\n      \"description\":\"Implement authentication - usermanagement in API\",\"priority\":\"Medium\",\n      \"reporterUserId\":\"O1pU4GpJS\",\"assigneeUserId\":\"ZE35LRyJQ\",\"reporterName\":\"Rinkesh Patel\",\n      \"assigneeName\":\"Rahul Sahah\",\n      \"attachments\":[{\"link\":\"http://localhost:3002/api/v1/file/read/11fbcf69d81ade5b1deba22b4fba8207.pdf\",\n      \"name\":\"IssueAttachment.pdf\",\"dbFileName\":\"11fbcf69d81ade5b1deba22b4fba8207.pdf\"}],\"estimate\":\"2d\",\n      \"createdDate\":\"2019-07-19T21:40:04.000Z\",\"lastUpdatedDate\":\"2019-07-19T21:50:35.151Z\",\n      \"lastUpdatedBy\":\"Rinkesh Patel\",\"watchers\":[],\"comments\":[],\"issueNumber\":40}]}\n  }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "Issue",
    "name": "PostApiV1IssueDelete"
  },
  {
    "group": "Issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue/read/",
    "title": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken . (query params/body params/header)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\":false,\"message\":\"Issue found\",\"status\":200,\"data\":[{\"issueId\":\"rinwEgcOi\",\n      \"title\":\"Implement authentication in API\",\"status\":\"In-progress\",\"issueType\":\"New Feature\",\n      \"description\":\"Implement authentication - usermanagement in API\",\"priority\":\"Medium\",\n      \"reporterUserId\":\"O1pU4GpJS\",\"assigneeUserId\":\"ZE35LRyJQ\",\"reporterName\":\"Rinkesh Patel\",\n      \"assigneeName\":\"Rahul Sahah\",\n      \"attachments\":[{\"link\":\"http://localhost:3002/api/v1/file/read/11fbcf69d81ade5b1deba22b4fba8207.pdf\",\n      \"name\":\"IssueAttachment.pdf\",\"dbFileName\":\"11fbcf69d81ade5b1deba22b4fba8207.pdf\"}],\"estimate\":\"2d\",\n      \"createdDate\":\"2019-07-19T21:40:04.000Z\",\"lastUpdatedDate\":\"2019-07-19T21:50:35.151Z\",\n      \"lastUpdatedBy\":\"Rinkesh Patel\",\"watchers\":[],\"comments\":[],\"issueNumber\":40}]}\n  }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "Issue",
    "name": "PostApiV1IssueRead"
  },
  {
    "group": "Issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue/read/:issueNumber",
    "title": "Read ByIssueNumber",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken . (query params/body params/header)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueNumber",
            "description": "<p>issueNumber of the issue. (query params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\":false,\"message\":\"Issue found\",\"status\":200,\"data\":[{\"issueId\":\"rinwEgcOi\",\n      \"title\":\"Implement authentication in API\",\"status\":\"In-progress\",\"issueType\":\"New Feature\",\n      \"description\":\"Implement authentication - usermanagement in API\",\"priority\":\"Medium\",\n      \"reporterUserId\":\"O1pU4GpJS\",\"assigneeUserId\":\"ZE35LRyJQ\",\"reporterName\":\"Rinkesh Patel\",\n      \"assigneeName\":\"Rahul Sahah\",\n      \"attachments\":[{\"link\":\"http://localhost:3002/api/v1/file/read/11fbcf69d81ade5b1deba22b4fba8207.pdf\",\n      \"name\":\"IssueAttachment.pdf\",\"dbFileName\":\"11fbcf69d81ade5b1deba22b4fba8207.pdf\"}],\"estimate\":\"2d\",\n      \"createdDate\":\"2019-07-19T21:40:04.000Z\",\"lastUpdatedDate\":\"2019-07-19T21:50:35.151Z\",\n      \"lastUpdatedBy\":\"Rinkesh Patel\",\"watchers\":[],\"comments\":[],\"issueNumber\":40}]}\n  }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "Issue",
    "name": "PostApiV1IssueReadIssuenumber"
  },
  {
    "group": "Issue",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/issue/update/:issueId",
    "title": "Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title of issue. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Status of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporterUserId",
            "description": "<p>Reporter userId of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reporterName",
            "description": "<p>Reporter name of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "priority",
            "description": "<p>priority of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueType",
            "description": "<p>issueType of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "estimate",
            "description": "<p>estimate of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assigneeUserId",
            "description": "<p>assigneeUserId of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "assigneeName",
            "description": "<p>assigneeName of issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastUpdatedBy",
            "description": "<p>user name who has updated the issue. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastUpdatedDate",
            "description": "<p>date-time of update (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken . (query params/body params/header)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"error\":false,\"message\":\"Issue updated\",\"status\":200,\"data\":{\"n\":1,\"nModified\":1,\"ok\":1}}\n  }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/issueRoute.js",
    "groupTitle": "Issue",
    "name": "PostApiV1IssueUpdateIssueid"
  },
  {
    "group": "Notification",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/notification/read/:userId",
    "title": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken . (query params/body params/header)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user for whom notification get. (query params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\":false,\"message\":\"Notification found\",\"status\":200,\"data\":[{\"notificationId\":\"8s9WaVmC0R\",\n      \"notificationIssueId\":\"E5fJShXtO\",\"receiverUserId\":\"avGRIuP9d\",\"message\":\"Issue <b>ID-5</b> \n      updated by <b>Rinkesh Patel</b>\",\"dateTime\":\"2019-07-14T22:24:14.000Z\",\"notificationIssueNumber\":5},\n      {\"notificationId\":\"ZCHQH4nXgJ\",\"notificationIssueId\":\"E5fJShXtO\",\"receiverUserId\":\"avGRIuP9d\",\n      \"message\":\"Issue <b>ID-5</b> updated by <b>Kavir Artgallery</b>\",\"dateTime\":\"2019-07-16T17:15:48.000Z\",\n      notificationIssueNumber\":5},{\"notificationId\":\"ePzGCFTe03\",\"notificationIssueId\":\"E5fJShXtO\",\n      \"receiverUserId\":\"avGRIuP9d\",\"message\":\"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>\",\n      \"dateTime\":\"2019-07-16T17:15:57.000Z\",\"notificationIssueNumber\":5},{\"notificationId\":\"o3waNxCzHA\",\n      \"notificationIssueId\":\"E5fJShXtO\",\"receiverUserId\":\"avGRIuP9d\",\"message\":\"Issue <b>ID-5</b> \n      updated by <b>Rinkesh Patel</b>\",\"dateTime\":\"2019-07-16T17:18:31.000Z\",\"notificationIssueNumber\":5},\n      {\"notificationId\":\"oBiRXOcZN6\",\"notificationIssueId\":\"E5fJShXtO\",\"receiverUserId\":\"avGRIuP9d\",\n      \"message\":\"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>\",\"dateTime\":\"2019-07-16T17:18:36.000Z\",\n      \"notificationIssueNumber\":5},{\"notificationId\":\"5UwlurpmGp\",\"notificationIssueId\":\"E5fJShXtO\",\n      \"receiverUserId\":\"avGRIuP9d\",\"message\":\"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>\",\n      \"dateTime\":\"2019-07-16T17:18:43.000Z\",\"notificationIssueNumber\":5},{\"notificationId\":\"4D0J23GvHi\",\n      \"notificationIssueId\":\"E5fJShXtO\",\"receiverUserId\":\"avGRIuP9d\",\"message\":\"Issue <b>ID-5</b> \n      updated by <b>Rinkesh Patel</b>\",\"dateTime\":\"2019-07-16T17:18:45.000Z\",\"notificationIssueNumber\":5},\n      {\"notificationId\":\"HPjFj0khbV\",\"notificationIssueId\":\"E5fJShXtO\",\"receiverUserId\":\"avGRIuP9d\",\n      \"message\":\"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>\",\"dateTime\":\"2019-07-16T18:13:14.000Z\",\n      \"notificationIssueNumber\":5},{\"notificationId\":\"eR-w7T19er\",\"notificationIssueId\":\"E5fJShXtO\",\n      \"receiverUserId\":\"avGRIuP9d\",\"message\":\"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>\",\n      \"dateTime\":\"2019-07-16T18:13:23.000Z\",\"notificationIssueNumber\":5},{\"notificationId\":\"A8o7GliNj3\",\n      \"notificationIssueId\":\"E5fJShXtO\",\"receiverUserId\":\"avGRIuP9d\",\"message\":\"Issue <b>ID-5</b> \n      updated by <b>Rinkesh Patel</b>\",\"dateTime\":\"2019-07-16T18:13:25.000Z\",\"notificationIssueNumber\":5},\n      {\"notificationId\":\"MM9ilrYkWB\",\"notificationIssueId\":\"E5fJShXtO\",\"receiverUserId\":\"avGRIuP9d\",\n      \"message\":\"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>\",\"dateTime\":\"2019-07-18T19:09:35.000Z\",\n      \"notificationIssueNumber\":5},{\"notificationId\":\"Rc47jZ3Zal\",\"notificationIssueId\":\"E5fJShXtO\",\n      \"receiverUserId\":\"avGRIuP9d\",\"message\":\"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>\",\n      \"dateTime\":\"2019-07-19T16:02:35.000Z\",\"notificationIssueNumber\":5},{\"notificationId\":\"dtV2yxwO-q\",\n      \"notificationIssueId\":\"E5fJShXtO\",\"receiverUserId\":\"avGRIuP9d\",\"message\":\"Issue <b>ID-5</b> \n      updated by <b>Rinkesh Patel</b>\",\"dateTime\":\"2019-07-19T16:16:30.000Z\",\"notificationIssueNumber\":5},\n      {\"notificationId\":\"Ztay9Ao1xw\",\"notificationIssueId\":\"E5fJShXtO\",\"receiverUserId\":\"avGRIuP9d\",\n      \"message\":\"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>\",\"dateTime\":\"2019-07-19T16:16:41.000Z\",\n      \"notificationIssueNumber\":5},{\"notificationId\":\"pC7yvTKyNO\",\"notificationIssueId\":\"E5fJShXtO\",\n      \n      \"receiverUserId\":\"avGRIuP9d\",\"message\":\"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>\",\n      \"dateTime\":\"2019-07-19T16:16:43.000Z\",\"notificationIssueNumber\":5},{\"notificationId\":\"HEo7NlPXP2\",\n      \"notificationIssueId\":\"E5fJShXtO\",\"receiverUserId\":\"avGRIuP9d\",\"message\":\"Issue <b>ID-5</b> \n      updated by <b>Rinkesh Patel</b>\",\"dateTime\":\"2019-07-19T16:16:48.000Z\",\"notificationIssueNumber\":5},\n      {\"notificationId\":\"OX37HZv7lu\",\"notificationIssueId\":\"E5fJShXtO\",\"receiverUserId\":\"avGRIuP9d\",\n      \"message\":\"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>\",\"dateTime\":\"2019-07-19T16:17:01.000Z\",\n      \"notificationIssueNumber\":5},{\"notificationId\":\"-OQSe9Oewe\",\"notificationIssueId\":\"E5fJShXtO\",\n      \"receiverUserId\":\"avGRIuP9d\",\"message\":\"Issue <b>ID-5</b> updated by <b>Rinkesh Patel</b>\",\n      \"dateTime\":\"2019-07-19T16:17:29.000Z\",\"notificationIssueNumber\":5},{\"notificationId\":\"3wmpmqrlps\",\n      \"notificationIssueId\":\"E5fJShXtO\",\"receiverUserId\":\"avGRIuP9d\",\"message\":\"Issue <b>ID-5</b> \n      updated by <b>Rinkesh Patel</b>\",\"dateTime\":\"2019-07-19T16:17:33.000Z\",\"notificationIssueNumber\":5},\n      {\"notificationId\":\"5Z4I4LQ0yT\",\"notificationIssueId\":\"vjAyMNu3y\",\"receiverUserId\":\"avGRIuP9d\",\n      \"message\":\"Issue <b>ID-35</b> updated by <b>Rohit Sharma</b>\",\"dateTime\":\"2019-07-19T17:24:58.000Z\",\n      \"notificationIssueNumber\":35},{\"notificationId\":\"6En8-xlYsF\",\"notificationIssueId\":\"vjAyMNu3y\",\n      \"receiverUserId\":\"avGRIuP9d\",\"message\":\"Issue <b>ID-35</b> updated by <b>t t</b>\",\n      \"dateTime\":\"2019-07-19T17:27:01.000Z\",\"notificationIssueNumber\":35},{\"notificationId\":\"hdHiF7L3Q-\",\"notificationIssueId\":\"vjAyMNu3y\",\"receiverUserId\":\"avGRIuP9d\",\n      \"message\":\"Issue <b>ID-35</b> updated by <b>t t</b>\",\"dateTime\":\"2019-07-19T17:29:51.000Z\",\"notificationIssueNumber\":35},\n      {\"notificationId\":\"t2F-_uZ3tQ\",\"notificationIssueId\":\"_-K4gkSTQ\",\"receiverUserId\":\"avGRIuP9d\",\n      \"message\":\"Issue <b>ID-38</b> updated by <b>Sanjay Patel</b>\",\"dateTime\":\"2019-07-19T20:13:59.000Z\",\"notificationIssueNumber\":38}]}\n  }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/notificationRoute.js",
    "groupTitle": "Notification",
    "name": "PostApiV1NotificationReadUserid"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users",
    "title": "Get all users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query params/body params/header)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n          \"error\": false,\n          \"message\": \"User found\",\n          \"status\": 200,\n          \"data\": [\n              {\n                  \"userId\":\"ux-XfMpDy\",\n                  \"userName\":\"Rinkesh Patel\",\n                  \"password\":\"$2a$10$/Jq3uKS..MhpcLZ3jPTxGuIurGbLiGQTqQw6gjwYM2CKXQTT3AmvO\",\n                  \"email\":\"rinkeshpatel@gmail.com\"\n                },\n              {\n                  \"userId\":\"SmlBIt5LP\",\n                  \"userName\":\"Rahul Shah\",\n                  \"password\":\"$2a$10$DLRLPP4UVON/yZ3uVIB2.u7jR3AD2SKuto12aFYXOcyg.9rOmHiF2\",\n                  \"email\":\"rshah@gmail.com\"\n                },\n          ]\n      }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n       \"error\": true,\n       \"message\": \"User not found\",\n       \"status\": 404,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoute.js",
    "groupTitle": "User",
    "name": "GetApiV1Users"
  },
  {
    "group": "User",
    "type": "get",
    "url": "/api/v1/users/:userId",
    "title": "Get user by userId",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"User found\",\n      \"status\": 200,\n      \"data\": {\n                 \"userId\":\"SmlBIt5LP\",\n                 \"userName\":\"Rinkesh Patel\",\n                 \"password\":\"$2a$10$DLRLPP4UVON/yZ3uVIB2.u7jR3AD2SKuto12aFYXOcyg.9rOmHiF2\",\n                 \"email\":\"rinkeshpatel@gmail.com\"\n              }\n          }\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n       \"error\": true,\n       \"message\": \"User not found\",\n       \"status\": 404,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoute.js",
    "groupTitle": "User",
    "name": "GetApiV1UsersUserid"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/forgotPassword",
    "title": "Forgot Password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\":false,\n       \"message\":\"email send successfully for password reset\",\n       \"status\":200,\n       \"data\":{\n           \"error\":false,\n           \"message\":\"Email sent successfully to reset the password\",\n           \"status\":200,\n           \"data\":\"email sent\"\n       }\n       }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n       \"error\": true,\n       \"message\": \"User not found with this email\",\n       \"status\": 404,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoute.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersForgotpassword"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user. (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"Login Successful\",\n     \"status\": 200,\n     \"data\": {\n         \"authToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IlJ2TVdxc3FYRyIsImlhdCI6MTU2MTM0NzM3Mjc4MSwiZXhwIjoxNTYxNDMzNzcyLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJtZWV0aW5nUGxhbm5lciIsImRhdGEiOnsidXNlcklkIjoiU21sSFl0MkpLIiwidXNlck5hbWUiOiJha2FzaHAtYWRtaW4iLCJmaXJzdE5hbWUiOiJBa2FzaCIsImxhc3ROYW1lIjoiUGF0ZWwiLCJtb2JpbGVOdW1iZXIiOjkwMzMyODk1NzEsImNvdW50cnlDb2RlIjoiOTEiLCJpc0FkbWluIjp0cnVlLCJlbWFpbCI6ImFwYXRlbEBnbWFpbC5jb20ifX0.OFNC4qRPKbpCT6SZbCctYYO5T4XSzRIKs4GppxlQqdM\",\n         \"userDetails\":{\n             \"userId\":\"SmlBIt5LP\",\n             \"userName\":\"Rinkesh Patel\",\n             \"email\":\"apatel@gmail.com\"\n           }\n     }\n }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n       \"error\": true,\n       \"message\": \"Invalid Password\",\n       \"status\": 400,\n       \"data\": null\n      }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "{\n\t    \"error\": true,\n\t    \"message\": \"User not found with this email id\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoute.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout/:userId",
    "title": "Logout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID of the user (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authorization Token of user (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\":false,\n        \"message\":\"Logged out\",\n        \"status\":200,\n        \"data\":null\n        }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoute.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersLogoutUserid"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetPassword",
    "title": "Reset Password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "userId",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id of the user (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n       \"error\":false,\n       \"message\":\"Pasword changed\",\n       \"status\":200,\n       \"data\":{\n           \"error\":false,\n           \"message\":\"Password changed\",\n           \"status\":200,\n           \"data\":null\n       }\n   }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoute.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "Signup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of user. (body params)(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of user. (body params)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"User created\",\n      \"status\": 200,\n      \"data\": {\n          \"userId\":\"SmlBIt5LP\",\n          \"firstName\":\"Rinkesh\",\n          \"lastName\":\"Patel\",\n          \"_id\":\"5d1040176198f60554fed037\",\n          \"email\":\"rinkeshpatel@gmail.com\",\n          \"__v\":0\n      }\n  }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoute.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersSignup"
  }
] });
