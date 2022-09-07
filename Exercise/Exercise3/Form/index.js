const myForm = document.querySelector('#myForm');
const emailValue = document.querySelector('#Email');
const checkEmai = document.querySelector('#checkEmai');
const userNameValue = document.querySelector('#UserName');
const checkUserName = document.querySelector('#checkUserName');
const passWord = document.querySelector('#password');
const checkPassWord = document.querySelector('#checkPassWord');
const confirmPassWord = document.querySelector('#confirmpassword');
const checkConfirm = document.querySelector('#checkConfirm');
const showMessage = document.querySelector('#showMessage');

const checkEmail = () => {
    let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailValue.value.match(regExp)) {
        checkEmai.innerHTML = 'Correct';
        checkEmai.style.color = 'green';
        checkEmai.classList.add('valid');
        checkEmai.classList.remove('invalid');
    }
    else {
        checkEmai.innerHTML = 'Incorrect';
        checkEmai.style.color = 'red';
        checkEmai.classList.add('invalid');
        checkEmai.classList.remove('valid');
    }
}

const checkUser = () => {
    if (userNameValue.value === '' || userNameValue.value == null) {
        checkUserName.innerHTML = 'Name is required';
        checkUserName.style.color = 'red';
        checkUserName.classList.add('invalid');
        checkUserName.classList.remove('valid');

    }
    else if (userNameValue.value.length >= 40) {
        checkUserName.innerHTML = 'UserName is too long Maximum is 40 characters';
        checkUserName.style.color = 'red';
        checkUserName.classList.add('invalid');
        checkUserName.classList.remove('valid');

    }
    else {
        checkUserName.innerHTML = 'Correct';
        checkUserName.classList.add('valid');
        checkUserName.classList.remove('invalid');
        checkUserName.style.color='green';

    }
}

const checkPass = () => {
    if (passWord.value === '' || passWord.value == null) {
        checkPassWord.innerHTML = 'Password is empty';
        checkPassWord.classList.add('invalid');
        checkPassWord.classList.remove('valid');
        checkPassWord.style.color='red';

    }
    else if (passWord.value.length < 8) {
        checkPassWord.innerHTML = 'Password length must be atleast 8 characters';
        checkPassWord.classList.add('invalid');
        checkPassWord.classList.remove('valid');
        checkPassWord.style.color='red';
    }
    else if (passWord.value === userNameValue.value) {
        checkPassWord.innerHTML = 'Password and Username not match';
        checkPassWord.classList.add('invalid');
        checkPassWord.classList.remove('valid');
        checkPassWord.style.color='red';
    }
    else {
        checkPassWord.innerHTML = 'Correct';
        checkPassWord.classList.add('valid');
        checkPassWord.classList.remove('invalid');
        checkPassWord.style.color='green';
    }
}

const checkConfirmPassword = () => {
    if (confirmPassWord.value === passWord.value) {
        checkConfirm.innerHTML = 'Correct';
        checkConfirm.classList.add('valid');
        checkConfirm.classList.remove('invalid');
        checkConfirm.style.color='green'
    }
    else {
        checkConfirm.innerHTML = 'Password and Confirmation Password do no match';
        checkConfirm.classList.add('invalid');
        checkConfirm.classList.remove('valid');
        checkConfirm.style.color='red'
    }
}

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (
        checkEmai.className == 'valid' &&
        checkUserName.className == 'valid' &&
        checkPassWord.className == 'valid' &&
        checkConfirm.className == 'valid'
    ) {
        showMessage.innerHTML = `Email : ${emailValue.value} <br>
        UserName: ${userNameValue.value} <br>
        Password: ${passWord.value} <br>
        Confirm Password : ${confirmPassWord.value} <br>
        `;
        showMessage.style.color = 'green';
    }
    else {
        showMessage.innerHTML = 'Invalid Data Entered';
        showMessage.style.color = 'red'
    }
})
