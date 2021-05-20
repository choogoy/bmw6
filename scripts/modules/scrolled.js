const scrolled = () => {

    const SPEED = 0.5;

    const scrolling = event => {
        event.preventDefault();
        const target = event.target;
    
        if (target.matches('[href^="#"]')) {
            let start = 0;
            const pageY = window.pageYOffset;
            const hash = target.getAttribute('href');
    
            if (hash === '#') return
    
            const elem = document.querySelector(hash);
            const topCoordinateElem = elem.getBoundingClientRect().top;
    
            const step = time => {
                
                if (!start) start = time;
    
                const progress = time - start;
                const r = (topCoordinateElem < 0 ? Math.max(pageY - progress / SPEED, pageY + topCoordinateElem) : Math.min(pageY + progress / SPEED, pageY + topCoordinateElem));
    
                window.scrollTo(0, r);
    
                if (r < pageY + topCoordinateElem) {
                    requestAnimationFrame(step);
                }
    
            };
    
            requestAnimationFrame(step);
        }
    };
    
    document.body.addEventListener('click', scrolling);

}

export default scrolled;