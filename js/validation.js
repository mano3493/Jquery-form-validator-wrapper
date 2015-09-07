$(document).ready(function() {
	$.validator.setDefaults({
     errorClass: 'errorField',
     errorElement: 'div',
     errorPlacement: function(error, element) {
       error.addClass("ui red pointing above ui label error")
       			.appendTo( element.closest('div.form-group') );
     },  
   });
})

function validation(form) {

	var _rules = {}, 
			data_elements =[],
			required_fields = {},
			newrules = {},
			inputs = $(form).find('.form-group').find('input, textarea, select, button');

	for (var i = 0; i < inputs.length; i++) {
		if($(inputs[i]).data('validate-id')) {
			data_elements.push(inputs[i]);
		}
	};

	for (var i = 0; i < data_elements.length; i++) {

		for(var key in $(data_elements[i]).data()) {
			
			var newkey = key.substring(8).toLowerCase();
			var value = $(data_elements[i]).data()[key];
			if(newkey != 'id') {
				required_fields[newkey] = value;
			}
		}

		_rules[$(data_elements[i]).attr('name')]= required_fields;
		required_fields = {};
	};
 
	newrules.rules = _rules;

 	$(form).validate(newrules);
}