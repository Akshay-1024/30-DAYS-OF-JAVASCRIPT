const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpass = document.getElementById('cpass');

// input error messages

function showError(input,message){
	const formcontrol = input.parentElement;
	formcontrol.className = 'formcontrol error';
	const small = formcontrol.querySelector('small');
	small.innerText = message;
}

//show green
function showSuccess(input){
	const formcontrol = input.parentElement;
	formcontrol.className = 'formcontrol success';

}

// IS EMAIL VALID
function validEmail(email){
	 const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


//Event listeners
form.addEventListener('submit',function(e){
e.preventDefault();

if(username.value===''){
	showError(username,'username is required');
}else
showSuccess(username);

if(email.value===''){
	showError(email,'Email is required');
}
else if(!validEmail(email.value)){
	shoeError(email,'not a valid email');
}
else
showSuccess(email);

if(password.value===''){
	showError(password,'password is required');
}else
showSuccess(password);

if(cpass!=password){
	showError(cpass,'passwords doesnt match');
	showError(password,'passwords doesnt match');
}else{
showSuccess(cpass);
showSuccess(password);
}
});