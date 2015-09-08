# Jquery-form-validator-wrapper


Jquery form validator wrapper helps you to write the form validation in modular way 
using the jquery validator.
You can keep the validation Js as a common validation script and just pass the 'Form'
which you need to validate from the page. This wrapper will take care of rest.

## Getting Started

Before starting you have to add the Jquery and Jquery-Validator plugin to your project,
you can find the CDN at https://cdnjs.com/#q=jquery and https://cdnjs.com/#q=jquery+validator

## Quick example
```
<form id="test-form">
	<div class="form-group">
		<input type="text" class="mano" data-validate-id="true" name="firstname" data-validate-required="true">
	</div>
	<div class="form-group">
		<input type="text" class="mano" data-validate-id="true" name="lastname" data-validate-required="true">
	</div>
	<div class="form-group">
		<input type="text" class="mano" name="email" data-validate-id="true" data-validate-required="true" data-validate-email="true" >
	</div>
	<div class="form-group">
		<input type="text" class="mano" data-validate-id="true" name="number" data-validate-required="true" data-validate-number="true">
	</div>
	<input type="submit" value="submit">
</form>
```

1) Your form should contain the ```<div class="form-group"></div>``` as a parent of all your form fields.

2) You have to give the data attribute data-validate-id as "true" like  ```<div class="form-group" data-validate-id="true"></div>```.

3) Then you can give appropriate data attributes to validate

##For example
```
<!-- Number validation -->
<div class="form-group">
		<input type="text" class="mano" data-validate-id="true" name="mobille" 
		data-validate-required="true"
		data-validate-number="true"
		data-validate-minlength="10"
		>
</div>
<!-- Email Validation -->
<div class="form-group">
		<input type="text" class="mano" data-validate-id="true" name="mobille" 
		data-validate-required="true"
		data-validate-email="true"
		>
</div>
```


Once you are done with your forms, you have to pass the form to our validation.js for validation. (Eg: form 
variable is passed to validation in the snippet below)

##Javascript
```
<script type="text/javascript">
	$(document).ready(function() {
		var form = $('#test-form');
		validation(form);
	})
</script>
```

##For Error Messages

Add the Validator message.js file after your validation.js file (validator_message.js snippet below)

```
<script type="text/javascript">
	jQuery.extend(jQuery.validator.messages, {
    required: "This field cannot be blank.",
    remote: "Please fix this field.",
    email: "Please enter a valid email address.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});
</script>
```

You can edit the message as of your need.


Thanks, Take a pull and contribute :) :) 



Live Demo Here: https://jsfiddle.net/mano_bharathi/xq05sqre/


