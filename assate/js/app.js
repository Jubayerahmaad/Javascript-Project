// All Class & Id Grap
const form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');



// check required field

const checkRequiredField = (inputArr) => {
    inputArr.forEach((input) => {
        if(input.value === ''){
            showError(input , `${getFieldName(massage)} cannot be empty`);
        }else{
            successError(input);
        }
    })
}

// show error 
const showError = (input , massage) => {
        let formControl = input.parentElement;
        formControl.className = 'form-control error';
        formControl.querySelector("small").innerHTML = massage;
}

// Get Field Name 
const getFieldName = (input) => {
    return input.id[0].toUpperCase() + input.id.slice(1);
}

// Get Length 
const checkLength = (input) => {
    if(input.value.length){
        showError(input)
    }
}

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

    // check length 
    checkLength([username]);
});
