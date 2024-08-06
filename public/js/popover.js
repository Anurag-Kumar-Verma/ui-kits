const popovers = document.querySelectorAll('.popover');
const popupToggles = document.querySelectorAll('.popoverToggle');
let timeoutDelay;
popovers.forEach((toggleItem) => {
    toggleItem.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const targetId = toggleItem.getAttribute('data-popup-toggle');
        if(targetId){
            const popover = document.getElementById(targetId);
            popover.classList.toggle('show');
        }
    });
});

popovers.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        clearTimeout(timeoutDelay);
        timeoutDelay = setTimeout(() => {
            item.classList.remove('show');
        }, 1000);
    })
});