const ajax = (method, url, data) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => location.reload();
    request.open(method, url);
    request.setRequestHeader('Content-Type', 'application/json');
    console.log(request)
    request.send(data);
}

Array.from(document.getElementsByClassName('chow-button'))
.forEach(button => button.addEventListener('click', function () {
    const pancakeId = this.dataset.pancakeid;
    ajax('PUT', `/api/pancakes/${pancakeId}`, '');
}));

document.querySelector('#submit').addEventListener('click', event => {
    event.preventDefault();
    const newName = document.querySelector('input[type="text"]').value.trim();
    ajax('POST', '/api/pancakes', JSON.stringify({"pancake_name": newName}));
});