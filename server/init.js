Meteor.startup(function () {
	UploadServer.init({
    	tmpDir: process.cwd() + '/uploads/tmp',
    	uploadDir: process.cwd() + '/uploads/',
    	getDirectory: function(fileInfo, formData) {
    		return formData.userName;
    	},
    	checkCreateDirectories: true,
  	});
});