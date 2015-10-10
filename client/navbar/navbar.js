Template.navbar.rendered = function() {
    $(".dropdown-button").dropdown({
        hover: false
    });

    $(".button-collapse").sideNav({
        closeOnClick: true
    });
};
