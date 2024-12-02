// All Class & Id Grap
const form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');



// check required field

const checkRequiredField = (inputArr) => {
    inputArr.forEach((input) => {
        if(username.value === ''){
            showError(input);
        }else{
            successError(input);
        }
    })
}

// show error 
const showError = (input) => {
        let formControl = input.parentElement;
        formControl.className = 'form-control error';
        formControl.querySelector("small").innerHTML = 'msg';
}

// get

// success error
const successError = (input) => {
    let formControl = input.parentElement;
    formControl.className = 'form-control success';

}
// Event Listener
form.addEventListener('submit',function(event){
    event.preventDefault();

    // check required 
    checkRequiredField([username, email, password, confirmPassword]);
});
