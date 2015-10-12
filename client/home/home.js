Template.home.onRendered(function() {
    $('.modal-trigger').leanModal();
//    Meteor.call('txt2json',"dna3.txt");
});



Template.home.events({
	'submit .dnaAnalysis' : function(event) {
		event.preventDefault();
		var file;
		for(var input in event.target) {
			if(event.target[input].checked == true) {
				file = event.target[input].value;
				break;
			}
		}
		file = file.substring(0,file.lastIndexOf("."));
		console.log(file);
		Meteor.call('dnaAnalysis', file);
	}
});
