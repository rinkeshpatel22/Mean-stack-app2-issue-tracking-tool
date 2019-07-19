/* library for online issue updates and notifications via socket.io */
const loggerLib = require('../libs/loggerLib');

let setServer = (server) => {
  const io = require('socket.io')(server);
  /* on connect */
  io.on('connection', (socket) => {
    loggerLib.info('Socket connected successfully');
    socket.on('issue-notifications', (data) => {
      /* emit notofication to each receiver */
     data.notificationReceivers.forEach(receiver => {
        io.emit(receiver, data);
      });
    });
    /* on disconnect */
    socket.on('disconnect', () => {
      loggerLib.info('Socket disconnected');
    });
  });
}

module.exports = { setServer: setServer }