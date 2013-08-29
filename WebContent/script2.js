
var loginPattern = /(?=.*\d)(?=.*[a-zA-Z]).{2,}/;
var passwordPattern = /(?=.*\d)(?=.*[a-zA-Z]).{6,}/;

$(document).ready(function() {
	bind('loginInputId', 'blur', loginLostFocus);
	bind('passwordInputId', 'blur', passwordLostFocus);
});

function loginLostFocus(input) {
	var validated = validate(loginPattern, input);
	if(validated['invalid']){
		alert(validated['validationMessage']);
	}
}
function part(func, obj){
	return function(){
		
	}
}
function passwordLostFocus(input) {

}

function validate(pattern, input){
	if(input.length == 0){
		return { invalid : true, 
				 valid : false, 
				 validationMessage : "This field is required and cannot be empty"};
	}else if(!pattern.text(input.value)){
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
