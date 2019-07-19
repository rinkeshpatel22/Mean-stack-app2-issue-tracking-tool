const loggerLib = require('../libs/loggerLib');

let uploadFile = (req, res) => {
  return res.status(200).json(global.uploadedFileInfo);
}

let getFile = (req, res) => {
  try {
    global.gridFS.files.findOne({ filename: req.params.filename }, (err, file) => {
      if (err) {
        loggerLib.error(err, 'fileController:getFile()');
        return res.status(500).json({ err: 'Internal server error' });
      }
      if (!file || file.length === 0) {
        return res.status(404).json({ err: 'No file exists' });
      }
      const readstream = global.gridFS.createReadStream(file.filename);
      readstream.pipe(res);
    });
  } catch (err) {
    loggerLib.error(err, 'fileController:getFile()');
    return res.status(500).json({ err: 'Internal server error' });
  }
}

let deleteFile = (req, res) => {
  try {
    global.gridFS.remove({ filename: req.params.filename, root: 'uploads' }, (err) => {
      if (err) {
        return res.status(404).json({ err: err });
      }
      return res.status(200).json({ message: 'File deleted' });
    });
  } catch (err) {
    loggerLib.error(err, 'fileController:deleteFile()');
    return res.status(500).json({ err: 'Internal server error' });
  }
}

module.exports = {
  uploadFile: uploadFile,
  getFile: getFile,
  deleteFile: deleteFile
}