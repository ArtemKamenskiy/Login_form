let inputUsername = document.querySelector('.username');
let spanUsername = document.querySelector('.span-username');
let inputPass = document.querySelector('.password');
let spanPass = document.querySelector('.span-password');
let button = document.querySelector('.btn');

inputUsername.addEventListener('keyup', function () {
    if(inputUsername.value.length >= 2) {
        this.value = this.value.replace(/[ ]+$/, '');
        spanUsername.style.color = '#34C33F';
        this.style.border = '2px solid #34C33F';
    } else {
        this.value = this.value.replace(/[ ]+$/, '');
        spanUsername.style.color = '#FF5D58';
        this.style.border = '2px solid #FF5D58';

    }
});

inputPass.addEventListener('keyup', function () {
    if(inputPass.value.length >= 10) {
        spanPass.style.color = '#34C33F';
        spanPass.textContent = "Password: strong";
        this.style.border = '2px solid #34C33F';
    }
    else if (inputPass.value.length >= 5){
        spanPass.style.color = '#FDC222';
        spanPass.textContent = "Password: low";
        this.style.border = '2px solid #FDC222';
    }
    else {
        spanPass.style.color = '#FF5D58';
        this.style.border = '2px solid #FF5D58';
        this.value = this.value.replace(/[ ]+$/, '');
    }
});

