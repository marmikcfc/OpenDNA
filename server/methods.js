Meteor.methods({
  'txt2json': function (filename) {
    var cdPath ='/uploads/' + Meteor.userId() + '/';
    var inPath=cdPath+filename+".txt";
    var outPath=cdPath+filename+".json" 
    var outPath=cdPath+filename+".json"

    shell.exec('dna2json '+inPath+" "+outPath, function(code, output) {
  	 console.log(output);
    });
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

    var riskGroupAnalysis = new Object();
    riskGroupAnalysis["userid"]=Meteor.userId();

    var eachRiskGroupAnalysis = new Object();
    _.each(result, function(res){

      var exactArray=new Array();

      for (var key in res.DNARiskValues) {
        if (res.DNARiskValues.hasOwnProperty(key) && res.DNARiskValues[key]!="") {
          exactArray.push(gql.exact(key,res.DNARiskValues[key]));
        }
      }
      var query = gql.or(exactArray);
      var isMatch = query(dna);
      eachRiskGroupAnalysis[res.riskFactorName]=isMatch;
    });
    riskGroupAnalysis['eachRiskGroupAnalysis']= eachRiskGroupAnalysis;
    Analysis.insert(riskGroupAnalysis);
    console.log(Analysis.find().fetch());
  }
});