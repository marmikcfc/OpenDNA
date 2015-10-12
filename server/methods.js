Meteor.methods({
  'txt2json': function (filename) {
/*  	var sys = Meteor.npmRequire('sys');
	var exec = Meteor.npmRequire('child_process').exec;
*/	
    var cdPath ='/uploads/' + Meteor.userId() + '/';
    var inPath=cdPath+filename+".txt";
    var outPath=cdPath+filename+".json" 
    var outPath=cdPath+filename+".json"

    shell.exec('dna2json '+inPath+" "+outPath, function(code, output) {
  	 console.log(output);
    });






/*var dna = Meteor.npmRequire('dna2json');
var fs = Meteor.npmRequire('fs');
var path = Meteor.npmRequire('path');

var JSONStream = Meteor.npmRequire('JSONStream');*/
//console.log(path.join(__meteor_bootstrap__.serverDir,'../web.browser/app')); 





//fs.createReadStream(process.cwd()+'/uploads/'+filename+".txt").pipe(dna.createParser()).pipe(JSONStream.stringify()).pipe(fs.createWriteStream(process.cwd()+'/uploads/'+filename+".json"));





//       var t2j = Async.runSync(function(done) {

//       	var txt = fs.readFileSync(path.join(__meteor_bootstrap__.serverDir, '../web.browser/app/dna1.txt'), 'utf8');
// //console.log(typeof txt);
// dna.parse(txt, function(err, snps){
//   fs.writeFileSync(path.join(__meteor_bootstrap__.serverDir, '../web.browser/app/dna1.json'), JSON.stringify(snps, null, 2));
//         var justForReturning=1;
//       }, function(err, snps){

//       	done(null, snps);
//       });
// });


/*var fs = Meteor.npmRequire('fs');
var path = Meteor.npmRequire('path');

//var inpath=path.join(__meteor_bootstrap__.serverDir, '../web.browser/app/dna1.txt');
//var outpath=path.join(__meteor_bootstrap__.serverDir, '../web.browser/app/dna1.json');
var sys = Meteor.npmRequire('sys');
var exec = Meteor.npmRequire('child_process').exec;

var cdPath = process.cwd()+'/uploads/'

function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("cd "+cdPath, puts);
exec("dna2json "+filename+".txt "+filename+".json", puts);*/

// console.log(t2j.result)
// return t2j.result;


/*var sys = Meteor.npmRequire('sys');
var exec = Meteor.npmRequire('child_process').exec;
var fs = Meteor.npmRequire('fs');
var path = Meteor.npmRequire('path');
var JSONStream = Meteor.npmRequire('JSONStream');

var dna = Meteor.npmRequire('dna2json');
    
      this.unblock();

      Future = Npm.require('fibers/future');
      var future = new Future();

      var cdPath = process.cwd()+'/uploads/' + Meteor.userId() + '/';
      var inPath=cdPath+filename+".txt";
      var outPath=cdPath+filename+".json"*/




/*      var txt = fs.readFile(inPath, 'utf8',  function (err, data) {
  if (err) throw err;
  console.log("DONE");
});
		dna.parse(txt, function(err, snps){
  	  if (err) {
    		return console.error('Error parsing file:', err.message);
  		}
  		fs.writeFile(outPath, JSON.stringify(snps, null, 2), function (err, data) {
  		if (err) throw err;
  		console.log("Done");
	});
  	


	
  		future.return(console.log('All done! Your file is at', outPath));
		});
*/
  //	fs.createReadStream(inPath).pipe(dna.createParser()).pipe(JSONStream.stringify()).pipe(fs.createWriteStream(outPath));


/*      var command="cd "+cdPath+" && dna2json "+filename+".txt "+filename+".json";
      exec(command,function(error,stdout,stderr){
          if(error){
              console.log(error);
              throw new Meteor.Error(500,command+" failed");
          }
          future.return(stdout.toString());
      });
*/
//      this.unblock();

/*
      var command2="dna2json "+filename+".txt "+filename+".json";
      exec(command2,function(error,stdout,stderr){
          if(error){
              console.log(error);
              throw new Meteor.Error(500,command2+" failed");
          }
          future.return(stdout.toString());
      });
*/
   //   return future.wait();


},
'getUserFiles' : function() {
    var cdPath = process.cwd() +  '/uploads/' + Meteor.userId() + '/';
    var result = shell.exec('ls '+cdPath);
    return result.output;
},

'dnaAnalysis': function (filename){

var path = Meteor.npmRequire('path');
var gql = Meteor.npmRequire('gql');
var cdPath = process.cwd() +'/uploads/' + Meteor.userId() + '/';
var outPath=cdPath+filename+".json";
var dna = Meteor.npmRequire(outPath);

var result= Risks.find().fetch();

console.log(result);

var riskGroupAnalysis = new Object();
riskGroupAnalysis["userid"]=Meteor.userId();

var eachRiskGroupAnalysis = new Object();
_.each(result, function(res){

var exactArray=new Array();

for (var key in res.DNARiskValues) {
  if (res.DNARiskValues.hasOwnProperty(key) && res.DNARiskValues[key]!="") {
      //console.log("key   "+key+"value  "+result.DNARiskValues[key]);

      exactArray.push(gql.exact(key,res.DNARiskValues[key]));

  }
}

//var abc=gql.exact('rs334', 'TT');
//var pqr= gql.exact('i3003137', 'AA');

var query = gql.or(exactArray);

var isMatch = query(dna);
console.log(isMatch);


eachRiskGroupAnalysis[res.riskFactorName]=isMatch;



});
riskGroupAnalysis['eachRiskGroupAnalysis']= eachRiskGroupAnalysis;
Analysis.insert(riskGroupAnalysis);
console.log(Analysis.find().fetch());
//console.log("DNARiskValues     " + result);



}

});