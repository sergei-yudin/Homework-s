const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');

    let currentIndex =0;
    function showNext() {
        cases[currentIndex].classList.remove('rotator__case_active');
        currentIndex = currentIndex + 1;

        if(currentIndex >= cases.length ) {
            currentIndex = 0
        }

        cases[currentIndex].classList.add('rotator__case_active');
    }
    cases[0].classList.add('rotator__case_active');

    setInterval(showNext, 1000);
})
