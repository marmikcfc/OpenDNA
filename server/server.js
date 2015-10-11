var norovirus = Meteor.npmRequire('genoset-norovirus');

var path = Meteor.npmRequire('path');



var dna = Meteor.npmRequire(path.join(__meteor_bootstrap__.serverDir, "../web.browser/app")+"/dna.json");

//var dna=HTTP.get(Meteor.absoluteUrl("./dna.json")).data;
var data = norovirus(dna);
//console.log(" Dir Name "+__dirname);
console.log("Data and shit     "+data.immune); // true or false 