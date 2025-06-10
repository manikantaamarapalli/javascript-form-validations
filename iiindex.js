 function firstname(){
 var first=document.getElementById('first');
 var firsterror=document.getElementById('firsterror');
 var regexpr=/^[a-zA-Z]{3,}$/;
 if(regexpr.test(first.value)){
 	first.style.border="2px solid green";
 	firsterror.textContent="";
 }
 else{
 	first.style.border="2px solid red";
 	firsterror.textContent="invalid firstname.try again!.";
     setTimeout(() => {
            firsterror.textContent = "";
        }, 3000);
 }
}
function middlename(){
	var middle=document.getElementById('middle');
	var middleerror=document.getElementById('middleerror');
	var regexpr=/^[a-zA-Z]+$/;
	if(regexpr.test(middle.value)){
		middle.style.border="2px solid green";
		middleerror.textContent="";
	}
	else{
		middle.style.border="2px solid red";
		middleerror.textContent="dont use special characters and numbers.";
         setTimeout(() => {
            middleerror.textContent = "";
        }, 3000);
	}
}
function lastname(){
 var last=document.getElementById('last');
 var lasterror=document.getElementById('lasterror');
 var regexpr=/^[a-zA-Z]{3,}$/;
 if(regexpr.test(last.value)){
 	last.style.border="2px solid green";
 	lasterror.textContent="";
 }
 else{
 	last.style.border="2px solid red";
 	lasterror.textContent="invalid lastname.try again!.";
     setTimeout(() => {
            lasterror.textContent = "";
        }, 3000);
 }
}
function valphone(){
	var phone = document.getElementById('phone');
    var country = document.getElementById('country').value;
    var phoneerror = document.getElementById('phoneerror');
    var indiaregexpr=/^[0-9]{10}$/;
    var usaregexpr=/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (country=== "India") {
        if (indiaregexpr.test(phone.value)) {
            phone.style.border = "2px solid green";
            phoneerror.textContent = "";
        } else {
            phone.style.border = "2px solid red";
            phoneerror.textContent = "Enter 10-digit number for India (no hyphens)";
             setTimeout(() => {
             phoneerror.textContent = "";
        }, 3000);
        }
    } else if (country=== "USA") {
        if (usaregexpr.test(phone.value)) {
            phone.style.border = "2px solid green";
            phoneerror.textContent = "";
        } else {
            phone.style.border = "2px solid red";
            phoneerror.textContent = "Enter in format XXX-XXX-XXXX for USA";
             setTimeout(() => {
            phoneerror.textContent = "";
        }, 3000);
        }
    }
}
function validemail(){
    var emailinput=document.getElementById('email');
    var email=emailinput.value;
    var emailerror=document.getElementById('emailerror');
    var emregexpr=/^[a-zA-Z0-9._+]+@gmail\.(com|co|edu|in|org)$/
    if(emregexpr.test(email)){
        emailinput.style.border="2px solid green";
        emailerror.textContent="";
    }
    else{
        emailinput.style.border="2px solid red";
        emailerror.textContent="invalid email.Try Again!.";
         setTimeout(() => {
            emailerror.textContent = "";
        }, 3000);
    }
}
function validpass(){
    var passinput=document.getElementById('password');
    var password=passinput.value;
    var paregexpr=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    var passerror=document.getElementById('passerror');
    if(paregexpr.test(password)){
        passinput.style.border="2px solid green";
        passerror.textContent=""
    }
    else{
        passinput.style.border="2px solid red";
        passerror.textContent="try a valid strong password.Secured one!..";
         setTimeout(() => {
            passerror.textContent = "";
        }, 3000);
    }
}

function togglePassword() {
  var password = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
function hobbies(){
    var hobbies=document.querySelectorAll('.hobby');
    var count=0;

    hobbies.forEach(function(hobby){
        if(hobby.checked){
            count++;
        }
    });
    var hobbyerror=document.getElementById('hobbyerror');
    if(count>=2){
        hobbyerror.textContent="";
        return true;
    }
    else{
        hobbyerror.textContent="atleast two hobbies should clicked.";
         setTimeout(() => {
            hobbyerror.textContent = "";
        }, 3000);
        return false;
    }
}
function validateFileSize() {
    var fileInput = document.getElementById('file');
    var fileError = document.getElementById('fileerror');

    if (fileInput.files.length === 0){
        fileError.textContent = "Please upload a passport size photo.";
         setTimeout(() => {
            fileError.textContent = "";
        }, 3000);
        return false;
    }
    var file = fileInput.files[0];
    var maxSize = 50 * 1024;
    if (file.size > maxSize) {
        fileError.textContent = "File size must be less than 50 KB.";
         setTimeout(() => {
            fileError.textContent = "";
        }, 3000);
        return false;
    } else {
        fileError.textContent = "";
        return true;
    }
}
function resetform() {
    if (confirm("Are you sure you want to reset?")) {
        document.querySelector("form").reset();
        document.querySelectorAll("input, textarea, select").forEach(function(el) {
            el.style.border = "";
        });
        document.querySelectorAll("span").forEach(function(span) {
            span.textContent = "";
        });
    }
}
function showage() {
    var dob = document.getElementById('dob').value;
    if (!dob) return;

    var birthDate = new Date(dob);
    var today = new Date();

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    alert("Your age is: " + age);
}
function addresscheck(){
    var addressinput=document.getElementById('address');
    var address=addressinput.value.replace(/[0-9]/g,'');
    if(addressinput.value !== address){
        addressinput.value=address;
    }
}
function termscheck(){
    var terms=document.getElementById('terms');
    var termserror=document.getElementById('termserror');
    if(terms.checked){
        termserror.textContent="";
        return true;
    }
    else{
        termserror.textContent="please click this on!.."
        return false;
    }
}
function confirmsubmit(){
    if (confirm("Are you sure you want to submit the form?")) {
        return true;
    }
    else{
        return false;
    }
}
function validateForm() {
    showage();
  return hobbies() && validateFileSize() && termscheck() && confirmsubmit();
}