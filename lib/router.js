FlowRouter.route('/', {
    name: "home",
    action: function() {
        BlazeLayout.render("master_layout", {main: "home"});
    }
});

FlowRouter.route('/addNewRiskGroup', {
    name: "addNewRiskGroup",
    action: function() {
    	if(Meteor.user() != null ) {
    		BlazeLayout.render("master_layout", {main: "addNewRiskGroup"});
    	}
    }
});

FlowRouter.route('/uploadDNA', {
    name: "uploadDNA",
    action: function() {
    	if(Meteor.user() != null) {
    		BlazeLayout.render("master_layout", {main: "uploadDNA"});
    	}
    }
});