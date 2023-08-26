let cursor = document.getElementById('cursor');

document.addEventListener('click', function(e) {

    cursor.classList.add('click');

    setTimeout(function() {
        cursor.classList.remove('click');
    }, 2000);
});