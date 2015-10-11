var norovirus = Meteor.npmRequire('genoset-norovirus');

var path = Meteor.npmRequire('path');
var gql = Meteor.npmRequire('gql');


//var result= Risks.findOne({});

var dna = Meteor.npmRequire(path.join(__meteor_bootstrap__.serverDir,'../web.browser/app/dna.json'));

//console.log(result['DNARiskValues']);
// var query = gql.query();
//   	query.needs(0);
//   	query.and(query.exact('rs6025', 'A'), query.exact('rs1800595', 'C'));


//var dna=HTTP.get(Meteor.absoluteUrl("./dna.json")).data;
var data = norovirus(dna);
//console.log(" Dir Name "+__dirname);
console.log("Data and shit     "+data.immune); // true or false 