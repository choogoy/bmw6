'use strict';

const accordion = () => {
    const featureLinks = document.querySelectorAll('.feature__link');
    const feaututeSubElems = document.querySelectorAll('.feature-sub');

    featureLinks.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('feature__link_active')) {
                feaututeSubElems[index].classList.add('hidden');
                btn.classList.remove('feature__link_active');
            } else {
                feaututeSubElems.forEach(elem => elem.classList.add('hidden'));
                featureLinks.forEach(link => link.classList.remove('feature__link_active'));
                feaututeSubElems[index].classList.remove('hidden');
                btn.classList.add('feature__link_active');
            }
        });
    });


    // featureList.addEventListener('click', event => {

    //     const target = event.target;
    //     const link = target.closest('.feature__link');

    //     console.log(target);

    //     if (link) {
    //         featureLinks.forEach(link => link.classList.remove('feature__link_active'));


    //         link.classList.add('feature__link_active');
    //         link.nextElementSibling.classList.remove('hidden');
    //     }

    // });

};

export default accordion;