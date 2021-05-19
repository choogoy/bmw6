const smoothScroll = () => {
    const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

    smoothScrollElems.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const id = link.getAttribute('href').substr(1);
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        });
    });
};

export default smoothScroll;