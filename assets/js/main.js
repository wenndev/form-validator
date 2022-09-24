const form = document.querySelector('#form');
const username = form.querySelector('#username');
const email = form.querySelector('#email');
const password = form.querySelector('#password');
const passwordConfirm = form.querySelector('#password-confirmation');

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    checkInputs();
})

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmValue = passwordConfirm.value;

    usernameValue === '' ? setErrorFor(username,'O nome de usuário é obrigatório') : setSucessFor(username);
    emailValue === '' ?  setErrorFor(email,'O nome email é obrigatório') : setSucessFor(email);
    
    if (usernameValue === ''){
        setErrorFor(username,'O nome de usuário é obrigatório');
    } else {
        setSucessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email,'O email é obrigatório.');
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, 'Por favor, insira um email válido.');
    } else {
        setSucessFor(email);
    } 

    if (passwordValue === '') {
        setErrorFor(password, 'A senha é obrigatória.');
    } else if (passwordValue.length < 7) {
        setErrorFor(password, 'A senha precisa ter no minimo 7 caracteres.');
    } else {
        setSucessFor(password);
    }
    
    if(passwordConfirmValue === '') {
        setErrorFor(passwordConfirm, 'A confirmação de senha é obrigatória.');
    } else if (passwordConfirmValue !== passwordValue){
        setErrorFor(passwordConfirm, 'As senha não conferem.');   
    } else {
        setErrorFor(passwordConfirm);
    }

    const formControls = form.querySelectorAll('.form-control');

    
    const formIsValid = [...formControls].every(formControl => {
        return formControl.className === 'form-control sucess';
    });

    if(formIsValid){
        console.log('O formulário é válido');
    }
    
}


function setErrorFor(input,message){
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');
    // Adicionando a mensagem de error
    small.innerText = message;
    // Adicionando a classe de error
    formControl.className ='form-control error'
}

function setSucessFor(input){
    const formControl = input.parentElement;
    ///Adicionando a classe de sucesso
    formControl.className = 'form-control sucess';
}



function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }