Meteor.users.allow({
    insert: function (userId, doc) {
        return (userId === doc._id);
    },
    update: function (userId, doc, fields, modifier) {
        return userId === doc._id;
    }
});

Risks.allow({
    insert: function(userId, doc){
        return true;
    },
    remove: function(userId, doc){
        return true;
    },
    update: function(userId, doc, fields, modifier){
        return true;
    }
});
