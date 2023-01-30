window.addEventListener('load', () => {

    const titleH1 = document.querySelector('.title--h1');
    const titleElement = document.getElementById('title');
    const mediaQuery = window.matchMedia('(max-width: 900px')

    titleElement.addEventListener('mouseenter', (e) => {

        if (mediaQuery && e.target.id === 'title' && titleH1.classList.contains('hidden')) {
            titleH1.style.top = "-40vh"
            titleH1.classList.remove('hidden');
            setTimeout(()=> {
                titleH1.classList.add('hidden');
            },3500)
        } else if (!mediaQuery && e.target.id === 'title' && titleH1.classList.contains('hidden')){
            titleH1.classList.remove('hidden');
            setTimeout(()=> {
                titleH1.classList.add('hidden');
            },3500)
        } else {
            titleH1.classList.add('hidden');
        }
    });
})

