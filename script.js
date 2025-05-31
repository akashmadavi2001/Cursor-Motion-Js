let cursor = document.querySelector('.cursor');

cursor.style.display = "none";

document.addEventListener('mouseover', () => {

    cursor.style.display = "block";

    document.addEventListener('mousemove', function (e) {
        let cursorX = e.clientX;
        let cursorY = e.clientY;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
    });
});

document.addEventListener('mouseleave', () => {
    cursor.style.display = "none";
});