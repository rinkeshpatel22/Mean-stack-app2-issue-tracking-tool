const userController = require('../controllers/userController');
const appConfig = require('./../../config/appConfiguration');
const auth = require('../middlewares/auth');
const validation = require('../middlewares/validation');

let setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/users`;

    app.post(`${baseUrl}/signup`, validation.validateSignupRequest, userController.signUp);
    /**
     * @apiGroup User 
     * @apiVersion 1.0.0
     * @api {post} /api/v1/users/signup Signup
     * 
     * @apiParam {string} firstName First name of user. (body params)(required)
     * @apiParam {string} lastName Last name of user. (body params)(required)
     * @apiParam {string} email Email of user. (body params)(required)
     * @apiParam {string} password Password of user. (body params)(required)
     * 
     * 
     * 
     * @apiSuccessExample {object} Success-Response:
     * {
      "error": false,
      "message": "User created",
      "status": 200,
      "data": {
          "userId":"SmlBIt5LP",
          "firstName":"Rinkesh",
          "lastName":"Patel",
          "_id":"5d1040176198f60554fed037",
          "email":"rinkeshpatel@gmail.com",
          "__v":0
      }
  }
    */

    app.post(`${baseUrl}/login`, userController.login);
    /**
    * @apiGroup User 
    * @apiVersion 1.0.0
    * @api {post} /api/v1/users/login  Login
    * 
    * @apiParam {string} email Email of the user. (body params)(required)
    * @apiParam {string} password Password of the user. (body params)(required)
    * 
    * 
    * 
    * @apiSuccessExample {object} Success-Response:
    * {
     "error": false,
     "message": "Login Successful",
     "status": 200,
     "data": {
         "authToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IlJ2TVdxc3FYRyIsImlhdCI6MTU2MTM0NzM3Mjc4MSwiZXhwIjoxNTYxNDMzNzcyLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJtZWV0aW5nUGxhbm5lciIsImRhdGEiOnsidXNlcklkIjoiU21sSFl0MkpLIiwidXNlck5hbWUiOiJha2FzaHAtYWRtaW4iLCJmaXJzdE5hbWUiOiJBa2FzaCIsImxhc3ROYW1lIjoiUGF0ZWwiLCJtb2JpbGVOdW1iZXIiOjkwMzMyODk1NzEsImNvdW50cnlDb2RlIjoiOTEiLCJpc0FkbWluIjp0cnVlLCJlbWFpbCI6ImFwYXRlbEBnbWFpbC5jb20ifX0.OFNC4qRPKbpCT6SZbCctYYO5T4XSzRIKs4GppxlQqdM",
         "userDetails":{
             "userId":"SmlBIt5LP",
             "userName":"Rinkesh Patel",
             "email":"apatel@gmail.com"
           }
     }
 }
    * @apiErrorExample {json} Error-Response:
    * {
       "error": true,
       "message": "Invalid Password",
       "status": 400,
       "data": null
      }
    * @apiErrorExample {json} Error-Response:
	* {
	    "error": true,
	    "message": "User not found with this email id",
	    "status": 404,
	    "data": null
	   }
    */


    app.post(`${baseUrl}/logout/:userId`, auth.isAuthorized, userController.logout);
    /**
     * @apiGroup User 
     * @apiVersion 1.0.0
     * @api {post} /api/v1/users/logout/:userId  Logout
     * 
     * @apiParam {string} userId User ID of the user (body params)(required)
     * @apiParam {string} authToken Authorization Token of user (body params)(required) 
     * 
     * 
     * 
     * @apiSuccessExample {object} Success-Response:
     * {
        "error":false,
        "message":"Logged out",
        "status":200,
        "data":null
        }
     */

    app.post(`${baseUrl}/forgotPassword`, validation.validateForgotPasswordRequest, userController.forgotPassword);
    /**
    * @apiGroup User 
    * @apiVersion 1.0.0
    * @api {post} /api/v1/users/forgotPassword Forgot Password
    * 
    * @apiParam {string} email Email of the user (body params)(required)
    * 
    * 
    * 
    * @apiSuccessExample {object} Success-Response:
    * {
       "error":false,
       "message":"email send successfully for password reset",
       "status":200,
       "data":{
           "error":false,
           "message":"Email sent successfully to reset the password",
           "status":200,
           "data":"email sent"
       }
       }
    * @apiErrorExample {json} Error-Response:
    * {
       "error": true,
       "message": "User not found with this email",
       "status": 404,
       "data": null
      }
    */

    app.post(`${baseUrl}/resetPassword`, userController.resetPassword);
    /**
    * @apiGroup User 
    * @apiVersion 1.0.0
    * @api {post} /api/v1/users/resetPassword Reset Password 
    * 
    * @apiParam {string} password Password of the user (body params)(required)
    * @apiParam {userId} userId User Id of the user (body params)(required)
    * 
    * 
    * 
    * @apiSuccessExample {object} Success-Response:
    * {
       "error":false,
       "message":"Pasword changed",
       "status":200,
       "data":{
           "error":false,
           "message":"Password changed",
           "status":200,
           "data":null
       }
   }
    */

    app.get(baseUrl, userController.getUsers);
    /**
         * @apiGroup User 
         * @apiVersion 1.0.0
         * @api {get} /api/v1/users  Get all users
         * 
         * @apiParam {string} authToken authToken of the user. (query params/body params/header)(required)
         * 
         * 
         * 
         * @apiSuccessExample {object} Success-Response:
         * {
          "error": false,
          "message": "User found",
          "status": 200,
          "data": [
              {
                  "userId":"ux-XfMpDy",
                  "userName":"Rinkesh Patel",
                  "password":"$2a$10$/Jq3uKS..MhpcLZ3jPTxGuIurGbLiGQTqQw6gjwYM2CKXQTT3AmvO",
                  "email":"rinkeshpatel@gmail.com"
                },
              {
                  "userId":"SmlBIt5LP",
                  "userName":"Rahul Shah",
                  "password":"$2a$10$DLRLPP4UVON/yZ3uVIB2.u7jR3AD2SKuto12aFYXOcyg.9rOmHiF2",
                  "email":"rshah@gmail.com"
                },
          ]
      }
    * @apiErrorExample {json} Error-Response:
    * {
       "error": true,
       "message": "User not found",
       "status": 404,
       "data": null
      }
         */

    app.get(`${baseUrl}/:userId`, auth.isAuthorized, userController.getUserById);
    /**
    * @apiGroup User 
    * @api {get} /api/v1/users/:userId Get user by userId
    * @apiVersion 0.0.1
    *
    *
    * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
    * @apiParam {String} userId The userId should be passed as the URL parameter
    *
    *  @apiSuccessExample {json} Success-Response:
    *  {
       "error": false,
       "message": "User found",
       "status": 200,
       "data": {
                  "userId":"SmlBIt5LP",
                  "userName":"Rinkesh Patel",
                  "password":"$2a$10$DLRLPP4UVON/yZ3uVIB2.u7jR3AD2SKuto12aFYXOcyg.9rOmHiF2",
                  "email":"rinkeshpatel@gmail.com"
               }
           }
       }
   }
     
    * @apiErrorExample {json} Error-Response:
    * {
       "error": true,
       "message": "User not found",
       "status": 404,
       "data": null
      }
    */
}

module.exports = {
    setRouter: setRouter
}