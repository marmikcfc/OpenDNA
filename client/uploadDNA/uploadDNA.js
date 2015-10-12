Meteor.startup(function() {
  Uploader.finished = function(index, fileInfo, templateContext) {
    $('.card').css('display', 'block');
    $('.card-message').text('Processing your DNA...This may take a while ');
    $('.card-title').text("Processing");
    console.log(typeof fileInfo.name);
    var filename= fileInfo.name.substring(0, fileInfo.name.length - 4);

    Meteor.call('txt2json',filename, function(result, err) {
      var t =0;
      var progressTimer = null;
      setTimeout(function(){
        $('.card-message').text('Processed Successfully');
        $('.card-title').text("Success!");
        $('.determinate').attr('style','width:0%');
        clearInterval(progressTimer);
        t = 0;
      },20000); 
      progressTimer = setInterval(function() {
        $('.determinate').attr('style','width:'+t+'%');
        t = t + 5;
      }, 1000);
      
    }); 
  };
});

Template.uploadDNA.helpers({
	userData: function() {
		return { "userName": Meteor.userId() };
	}
});

Template.uploadDNA.events({
  'click .jqUploadclass': function(event) {
    $('.card').css('display','none');
  }
});
