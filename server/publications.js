Meteor.publish('dnaAnalysis', function () {
    "use strict";
    return Analysis.find().fetch();
});

Meteor.publish('risks', function () {
    "use strict";
    return Risks.find().fetch();
});
