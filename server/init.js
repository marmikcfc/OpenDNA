Meteor.startup(function () {
  UploadServer.init({
    tmpDir: process.cwd() + '/uploads/tmp',
    uploadDir: process.cwd() + '/uploads/',
    checkCreateDirectories: true //create the directories for you
  });
});