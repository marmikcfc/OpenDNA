Meteor.startup(function() {
  Uploader.finished = function(index, fileInfo, templateContext) {
    //console.log("Code executed");
    $('.card').css('display', 'block');
    console.log(typeof fileInfo.name);
    var filename= fileInfo.name.substring(0, fileInfo.name.length - 4);
    console.log(filename);
    Meteor.call('txt2json',filename,function (err, response) {  
    console.log(response);
	});

	//Meteor.call('dnaAnalysis',filename);


    console.log(templateContext);
    Meteor.call('txt2json',filename, function(result, err) {
      var t =0;
      setTimeout(function(){
        $('.card-message').text('Processed Successfully');
      },20000); 
      setInterval(function() {
        $('.determinate').attr('style','width:'+t+'%');
        t = t + 5;
      }, 1000);
      
    }); 
//     Meteor.call('txt2json',fileInfo.name);
 
};
  //  
    //console.log(fileInfo.name);
  });

Template.uploadDNA.helpers({
	userData: function() {
		return { "userName": Meteor.userId() };
	}
});
