const btn = document.querySelector('#fade-button-js');
btn.addEventListener('click', () => {
    btn.computedStyleMap.backgroundColor = '#05b';
    setTimeout(() => {
        btn.style.background = '#07f';
    }, 500);
});