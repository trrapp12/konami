

var keytotal = 0
var myfontsize = 100
var x = 1
// variables for storing text
const secretCode ="ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba"
var codeChain = [];

document.addEventListener('keypress', (e) => {

function addOrDelete (keypressed, codeChain) {

}
  if (myfontsize > 120) {
      keytotal += 1
      x += 1
      myfontsize -= (x ** 2)
      console.log (keytotal)
      console.log (myfontsize)
      const keypressed = event.key

      document.getElementById('background').innerHTML += keypressed
      // document.getElementById('background').style.fontSize = myfontsize
      document.getElementById('display').innerHTML += keypressed

  }

  else if (myfontsize < 120 && myfontsize > 50) {
      keytotal += 1
      x += 1
      myfontsize -= x
      console.log (keytotal)
      console.log (myfontsize)
      const keypressed = event.key
      // document.getElementById('display').innerHTML += keypressed

      document.getElementById('background').innerHTML += keypressed
      // document.getElementById('background').style.fontSize = myfontsize
      document.getElementById('background').style.textShadow = "0px 0px 5px rgba(0,225,0,0.9)"
      document.getElementById('display').innerHTML += keypressed
  }

  else {
      keytotal += 1
      x = 0
      myfontsize -= x
      console.log (keytotal)
      console.log (myfontsize)
      const keypressed = event.key
      // document.getElementById('display').innerHTML += keypressed

      document.getElementById('background').innerHTML += keypressed
      // document.getElementById('background').style.fontSize = myfontsize
      document.getElementById('background').style.textShadow = "0px 0px 3px rgba(0,225,0,0.9)"
      document.getElementById('display').innerHTML += keypressed

  }

  console.log(myfontsize)

});

document.addEventListener('keyup', (e) => {

  if (keytotal < 20) {
    document.getElementById('display').style.fontSize = 50  }
  else {
    document.getElementById('display').style.fontSize = 40
    document.getElementById('display').style.height = "auto";
    document.getElementById('display').style.marginTop = 3
  };
});


window.addEventListener('keyup', (e) => {
  // const secretCode ="ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba"
  // const codeChain = [];
  codeChain.push(e.key);
  codeChain.splice(-secretCode.length -1, codeChain.length - secretCode.length);

  if (codeChain.join('').includes(secretCode)) {
    window.open("https://www.youtube.com/watch?v=YBMQhKK3Ctk","Contra","resizable,status");
    codeChain = []
    console.log("you won" + codeChain)
  }

});
