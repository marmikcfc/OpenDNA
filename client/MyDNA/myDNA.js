Template.myDNA.events({
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
		Meteor.call('dnaAnalysis', file);
	}
});