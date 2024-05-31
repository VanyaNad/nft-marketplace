document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const headerList = document.querySelector('.HeaderList');

    burger.addEventListener('click', function () {
        burger.classList.toggle('open');
        headerList.classList.toggle('open');
    });
});
