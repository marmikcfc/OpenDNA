Meteor.startup(function() {
  Uploader.finished = function(index, fileInfo, templateContext) {
    //console.log("Code executed");
    console.log(typeof fileInfo.name);
    var filename= fileInfo.name.substring(0, fileInfo.name.length - 4);
    console.log(filename);
    Meteor.call('txt2json',filename,function (err, response) {
  console.log(response);
});
  //  Meteor.call('dnaAnalysis',filename);
  }
})