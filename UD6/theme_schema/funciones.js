const toggleButton = document.getElementById('toggleMode');

toggleButton.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});
