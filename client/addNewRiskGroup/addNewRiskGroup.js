if(Meteor.isClient) {
	var curr = 1;
	Template.addNewRiskGroup.events({
		'click .addMore' : function(event) {
			event.preventDefault();
			$(".seqVal").append("<input type='text' name='seq'  placeholder='DNA sequence'/>");
			$(".seqVal").append("<input type='text' name='val'  placeholder='Sequence value'/>");
		},
		'click .submit' : function(event) {
			var sequences = new Array();
			var sequenceValues = new Array();
			var riskFactorName;
			var accuracy;
			event.preventDefault();
			var forms = event.target.form;
			for(var form in forms) {
				if(forms[form] != null) {
					if(forms[form].type == 'text' || forms[form].type == 'number') {
						if(forms[form].name == 'seq') {
							sequences.push(forms[form].value);
						}else if(forms[form].name == 'val') {
							sequenceValues.push(forms[form].value);
						}else if(forms[form].name == 'riskFactorName') {
							riskFactorName = forms[form].value;
						}else if(forms[form].name == 'riskFactorAccuracy') {
							accuracy = forms[form].value;
						}
					}
				}
				
			}
			var sequencesValuesJSON = "{";
			for(var i in sequences) {
				sequencesValuesJSON += " \"" + sequences[i] + "\" :  \"" + sequenceValues[i] + "\" ,";  
			}
			sequencesValuesJSON = sequencesValuesJSON.substring(0, sequencesValuesJSON.length -1);
			sequencesValuesJSON += "}";
			//console.log(sequencesValuesJSON);
			var riskGroupJSON = new Object();
			riskGroupJSON['riskFactorName']	= riskFactorName;
			riskGroupJSON['accuracy'] = accuracy;
			riskGroupJSON['date'] = new Date();
			riskGroupJSON['DNARiskValues'] = JSON.parse(sequencesValuesJSON);
			console.log(riskGroupJSON);
			Risks.insert(riskGroupJSON);
		}
	});
}