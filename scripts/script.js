document.addEventListener("DOMContentLoaded", function() {
    // Load the header
    fetch('./htmlTemplates/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;

            //burger
            const burger = document.querySelector('.burger');
            const headerList = document.querySelector('.HeaderList');

            burger.addEventListener('click', function () {
                burger.classList.toggle('open');
                headerList.classList.toggle('open');
            });
        });

    // Load the footer
    fetch('./htmlTemplates/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
});
