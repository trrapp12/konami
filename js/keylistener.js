
document.addEventListener('keydown', (e) => {

      let background = document.getElementById('background');
      let displayArea = document.getElementById('display');

      if ( e.key === "Backspace" || e.key === "Delete" ) {
        // console.log("delete or backspace hit")
        let newWords = displayArea.innerText.substring(0, (displayArea.innerText.length - 1));
        background.innerText = newWords;
        background.style.textShadow = "0px 0px 3px rgba(0,225,0,0.9)";
        displayArea.innerText = newWords;

      } else {

        background.innerHTML += e.key;
        background.style.textShadow = "0px 0px 3px rgba(0,225,0,0.9)";
        document.getElementById('display').innerText += e.key;
      }

});

window.addEventListener('keyup', (e) => {

  const secretCode ="ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
  let codeChain = [];

  codeChain.push(e.key);
  codeChain.splice(-secretCode.length -1, codeChain.length - secretCode.length);

  if (codeChain.join('').includes(secretCode)) {
    window.open("https://www.youtube.com/watch?v=YBMQhKK3Ctk","Contra","resizable,status");
    codeChain = [];
    console.log("you won" + codeChain);
  }

});
