var accordion = document.querySelectorAll('.accordion');

accordion.forEach(elm => {
    const icon = elm.querySelector('.icon');
    const ans = elm.querySelector('.ans');

    elm.addEventListener('click', () => {
        icon.classList.toggle('active');
        ans.classList.toggle('active');
    });
});
