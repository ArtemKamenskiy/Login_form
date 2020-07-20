button.addEventListener('click', function () {
    let url = 'db.json';
    function setRequest(method, url, userInfo = null) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest;
            xhr.open(method, url);
            xhr.responseType = "json";
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = () => {
                if (xhr.status >= 200) {
                    resolve(xhr.response);
                } else {
                    reject('Error');
                }
            };
            xhr.send(JSON.stringify(userInfo));
        })
    }
    let userInfo = {
        username: inputUsername.value,
        password: inputPass.value
    };
    setRequest("POST", url, userInfo).then(data => console.log(data));

    spanUsername.style.color = '#1E222B';
    inputUsername.style.border = '2px solid #1E222B';
    spanPass.style.color = '#1E222B';
    inputPass.style.border = '2px solid #1E222B';
    inputUsername.value = '';
    inputPass.value = '';
});
