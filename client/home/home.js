Template.home.onRendered(function() {
    $('.modal-trigger').leanModal();
//    Meteor.call('txt2json',"dna3.txt");
});



Template.home.events({
	'click .dnaAnalysis' : function(event) {

		console.log(Meteor.user());

		//Meteor.call('getUserFiles', Meteor.userId());
	}
});
