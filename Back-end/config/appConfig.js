let appConfig = {};

appConfig.port = 3002;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
  uri: 'mongodb://127.0.0.1:27017/issueTrackerDB1'
}
appConfig.apiVersion = '/api/v1';
appConfig.emailId = 'dummy.ac.rinkesh@gmail.com';
appConfig.password = 'dummy22#rinkesh22';

module.exports = {
  port: appConfig.port,
  allowedCorsOrigin: appConfig.allowedCorsOrigin,
  environment: appConfig.env,
  db: appConfig.db,
  apiVersion: appConfig.apiVersion,
  emailId: appConfig.emailId,
  password: appConfig.password
};