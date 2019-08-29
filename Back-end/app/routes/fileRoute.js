const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const fileController = require("../controllers/fileController");
const appConfig = require("../../config/appConfiguration");
const fileStorage = require('../middlewares/fileStorage');

const connection = mongoose.createConnection(appConfig.db.uri);
connection.once('open', () => {
  global.gridFS = Grid(connection.db, mongoose.mongo);
  global.gridFS.collection('uploads');
});

let setRouter = (app) => {
  let baseUrl = `${appConfig.apiVersion}/file`;

  // POST /upload
  app.post(`${baseUrl}/upload`, fileStorage.upload.single('file'), fileController.uploadFile);
   /**
     * @apiGroup File 
     * @apiVersion 1.0.0
     * @api {post} /api/v1/file/upload Read
     * 
     * @apiParam {binary} file file to be uploaded. (body params)(required)
     * 
     * 
     * 
     * @apiSuccessExample {object} Success-Response:
     * {
      "filename":"fa100f9d77d0da498133f0ea57369aac.pdf","bucketName":"uploads",
      "originalFileName":"IssueAttachment.pdf"}
  }
    */
  
  // GET /files/:filename
  app.get(`${baseUrl}/read/:filename`, fileController.getFile );
   /**
     * @apiGroup File 
     * @apiVersion 1.0.0
     * @api {post} /api/v1/file/read/:filename Read
     * 
     * @apiParam {string} filename filename of file. (query params)(required)
     * 
     * 
     * 
     * @apiSuccessExample {object} Success-Response:
     * {
      "filename":"fa100f9d77d0da498133f0ea57369aac.pdf","bucketName":"uploads",
      "originalFileName":"IssueAttachment.pdf"}
  }
    */
  
  // DELETE /files/:id
  app.delete(`${baseUrl}/delete/:filename`, fileController.deleteFile);
   /**
     * @apiGroup File 
     * @apiVersion 1.0.0
     * @api {post} /api/v1/file/read/:filename Delete
     * 
     * @apiParam {string} filename filename of file. (query params)(required)
     * 
     * 
     * 
     * @apiSuccessExample {object} Success-Response:
     * {"message":"File deleted"}
  }
    */
}

module.exports = {
  setRouter: setRouter
}