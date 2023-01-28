const secretCode ="ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
let codeChain = [];

document.addEventListener('keydown', (e) => {

      let displayArea = document.getElementById('display');

      if ( e.key === "Backspace" || e.key === "Delete" ) {
        let newWords = displayArea.innerText.substring(0, (displayArea.innerText.length - 1));
        displayArea.innerText = newWords;

      } else {
        document.getElementById('display').innerText += e.key;
      }

});

window.addEventListener('keyup', (e) => {
  
  codeChain.push(e.key);

  if (codeChain.join('').includes(secretCode)) {
    window.open("https://www.youtube.com/watch?v=YBMQhKK3Ctk","Contra","resizable,status");
    codeChain = [];
    console.log("you won" + codeChain);
  }

});


