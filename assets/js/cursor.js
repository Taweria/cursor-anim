let cursor = document.getElementById('cursor'),
    cursorStyle = cursor.style;

document.addEventListener('click', function(e) {

    cursor.classList.add('click');

    setTimeout(function() {
        cursor.classList.remove('click');
    }, 1000);
});

document.addEventListener('mousemove', function(e) {
    
    let x = e.clientX,
        y = e.clientY,
        cursorWidth = cursor.offsetWidth,
        cursorHeight = cursor.offsetHeight;

    cursorStyle.left = x - (cursorWidth - 2) + 'px';
    cursorStyle.top = y - (cursorHeight - 2) + 'px';
});