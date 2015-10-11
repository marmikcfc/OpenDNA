Meteor.startup(function() {
  Uploader.finished = function(index, fileInfo, templateContext) {
    //console.log("Code executed");
    console.log(fileInfo.name);
    Meteor.call('txt2json',fileInfo.name);

  }
})