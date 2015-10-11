Meteor.startup(function() {
  Uploader.finished = function(index, fileInfo, templateContext) {
    //console.log("Code executed");
<<<<<<< HEAD
    console.log(typeof fileInfo.name);
    var filename= fileInfo.name.substring(0, fileInfo.name.length - 4);
    console.log(filename);
    Meteor.call('txt2json',filename,function (err, response) {
  console.log(response);
});
  //  Meteor.call('dnaAnalysis',filename);
=======
    console.log(fileInfo.name);
    Meteor.call('txt2json',fileInfo.name);
>>>>>>> 09688afe781917845e1883069eb71face1b8ae72
  }
})

Template.uploadDNA.helpers({
	userData: function() {
		return { "userName": Meteor.userId() };
	}
});