Meteor.methods({
  'txt2json': function () {

var dna = Meteor.npmRequire('dna2json');
var fs = Meteor.npmRequire('fs');
var path = Meteor.npmRequire('path');

var JSONStream = Meteor.npmRequire('JSONStream');
console.log(path.join(__meteor_bootstrap__.serverDir,'../web.browser/app')); 
fs.createReadStream(path.join(__meteor_bootstrap__.serverDir, "../web.browser/app")+"/dna.txt").pipe(dna.createParser()).pipe(JSONStream.stringify()).pipe(fs.createWriteStream(path.join(__meteor_bootstrap__.serverDir,'dna1.json'));

}

});