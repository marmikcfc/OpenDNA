Template.navbar_menu.events({
    'click .nav-home': function() {
        FlowRouter.go('home');
    }
});

Template.navbar_menu.helpers({
    activeIfNameIs: function(name) {
        if (FlowRouter.getRouteName() === name) {
            return "active";
        }
    }
});
