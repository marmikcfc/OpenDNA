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

DNA.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  },
  'update' : function () {
    return true;
  }
});
