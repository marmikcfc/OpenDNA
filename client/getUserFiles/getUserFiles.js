Meteor.methods({
	'getUserFiles': function(userId) {
		console.log(userId);
		console.log("gettinggg");
		console.log(DNA,find({}));
	}
});

Template.getUserFiles.events({
	'click .getFiles' : function(event) {
		Meteor.call('getUserFiles', Meteor.userId());
	}
})