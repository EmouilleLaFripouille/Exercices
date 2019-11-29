const xhr = new XMLHttpRequest();

xhr.open('get', 'data.json');
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.response);
    }
}