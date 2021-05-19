const tabs = () => {
    const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
    const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');

    for (const tab of tabsHandlerElems) {
        tab.addEventListener('click', () => {
            tabsHandlerElems.forEach(elem => {
                if (tab === elem) {
                    tab.classList.add('design-list__item_active');
                } else {
                    elem.classList.remove('design-list__item_active');
                }
            });
            tabsFieldElems.forEach(item => {
                if (item.dataset.tabsField === tab.dataset.tabsHandler) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    }
};

export default tabs;