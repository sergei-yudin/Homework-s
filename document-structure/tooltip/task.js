const tooltips = document.querySelectorAll('.has-tooltip');

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

tooltips.forEach(el => {
    const tooltipText = el.getAttribute('title');
    el.addEventListener('click', function (e) {
        tooltip.classList.remove('tooltip_active');
        e.preventDefault();
        tooltip.textContent = tooltipText;

        const rect = el.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = (rect.top - 40) + 'px';

        tooltip.classList.add('tooltip_active')
    });
});



