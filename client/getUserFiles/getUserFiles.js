

Template.getUserFiles.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      Meteor.call('getUserFiles', function(err, result){
			$('.listUserFiles').empty();
			var arr = result.split("\n");
			for(var i in arr) {
				if(arr[i].indexOf('json') == -1) {
					var div = "<div class='input-field'>";
					div += "<label for='file_"+i+"'>" + arr[i] + "</label>";
					div += "<input name='dnaFile' id='file_"+i+"' type='radio' value='"+arr[i]+"' / > </div>";
					$('.listUserFiles').append(div);
				}
				
			}
		});
    }
}
