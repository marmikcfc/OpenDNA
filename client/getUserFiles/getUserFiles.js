Template.getUserFiles.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      Meteor.call('getUserFiles', function(err, result){
			$('.listUserFiles').empty();
			var arr = result.split("\n");
			var isEmpty = true;
			for(var i in arr) {
				if(arr[i].indexOf('json') == -1 && arr[i].indexOf('ls') == -1 && arr[i].trim().length != 0) {
					isEmpty = false;
					var div = "<div>";
					div += "<input name='dnaFile' id='file_"+i+"' type='radio' value='"+arr[i]+"' / > ";
					div += "<label for='file_"+i+"'>" + arr[i] + "</label></div>";
					$('.listUserFiles').append(div);
				}
			}
			if(isEmpty) {
				$('.listUserFiles').append("<p> Sorry you have no uploaded DNAs. </p>");
			}
		});
    }
}
