window.addEventListener('load', () => {
    // const text1contents = document.getElementById('text1')
    // const text2contents = document.getElementById('text2')
    // const text3contents = document.getElementById('text3')
    // const text4contents = document.getElementById('text4')
    // const text5contents = document.getElementById('text5')
    // const text6contents = document.getElementById('text6')
    
    const textOne = 'This is a passion project.';
    const textTwo = 'I created this project because I wanted to see what it would take to make a keystroke logger. I succeeded in the following:';
    const textThree = '* logging and and reproducing user input without an input tag';
    const textFour = '* preforming a logical check on the input to scrape for a certain phrase';
    const textFive = '* creating a response when that phrase was logged';
    const textSix = '* having a ton of fun experimenting with designs and animations';

    function writeText(idAsString, textToType, time, promiseFunction) {
        let x = document.getElementById(idAsString);
        let arr = [...textToType];
        let i = 0;
        console.log(x, arr, arr.length)
        let interval = setInterval(function(){
            if (i < arr.length ) {
                    console.log(x.innerHTML)
                    x.innerHTML += arr[i];
                    i ++;
            } else {
                clearInterval(interval)
            }
        }, time)
    }    

    
    writeText('text1', textOne, 90, writeText)

    setTimeout(function (){
        writeText('text2', textTwo, 90, writeText)
    }, 3600)

    setTimeout(function (){
        writeText('text3', textThree, 90, writeText)
    }, 15000)

    setTimeout(function (){
        writeText('text4', textFour, 90, writeText)
    }, 21000)

    setTimeout(function (){
        writeText('text5', textFive, 90, writeText)
    }, 28000)

    setTimeout(function (){
        writeText('text6', textSix, 90, writeText)
    }, 33000)
    
})

