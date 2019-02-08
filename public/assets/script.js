Array.from(document.getElementsByClassName('chow-button'))
.forEach(button => button.addEventListener('click', function () {
    console.log(this.dataset.pancakeid);
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        location.reload();
    };
    request.open('PUT', `/api/pancakes/${this.dataset.pancakeid}`);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send();
}));