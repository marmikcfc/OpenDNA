FlowRouter.route('/', {
    name: "home",
    action: function() {
        BlazeLayout.render("master_layout", {main: "home"});
    }
});
