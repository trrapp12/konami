window.addEventListener('load', () => {

    const titleH1 = document.querySelector('.title--h1');
    const titleElement = document.getElementById('title');
    
        setTimeout(() => {
            toggleClass(titleH1)
        }, 4000)

        function toggleClass(element) {
            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden')
            } else {
                element.classList.add('hidden')
            }
        }

    titleElement.addEventListener('mouseenter', toggleClass)
})

