
var loginPattern = /(?=.*\d)(?=.*[a-zA-Z]).{2,}/;
var passwordPattern = /(?=.*\d)(?=.*[a-zA-Z]).{6,}/;

$(document).ready(function() {
	bind('loginInputId', 'blur', loginLostFocus);
	bind('passwordInputId', 'blur', passwordLostFocus);
});

function loginLostFocus(input) {
	var div = document.getElementById('loginPId');
	div.removeAttribute('class');
	validateWrap(loginPattern, input, div);
}
function passwordLostFocus(input) {
	var div = document.getElementById('passwordPId');
	div.removeAttribute('class');
	validateWrap(passwordPattern, input, div);
}

function validateWrap(pattern, input, div){
	var validated = validate(pattern, input);
	if(validated['invalid']){
		alert(validated['validationMessage']);
		div.setAttribute("class", "invalidP");
	}
	
}
function validate(pattern, input){
	if(input.value.length == 0){
		return { invalid : true, 
				 valid : false, 
				 validationMessage : "This field is required and cannot be empty"};
	}else if(!pattern.test(input.value)){
		return { invalid : true, 
			valid : false, 
			validationMessage : "This field must have at least one letter and one number"};
	}else{
		return { invalid : false, 
			valid : true}; 
	}
}

function bind(objectId, eventName, listener) {
	var object = document.getElementById(objectId);
	if (object.addEventListener) {
		object.addEventListener(eventName, apl(listener, object));
	} else {
		object.attachEvent(eventName, apl(listener, object));
	}
}
function apl(func, object) {
	return function() {
		return func(object);
	};
}
