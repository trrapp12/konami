# konami

```<!DOCYTPE hmtl>
<html>
<head>
  <title>konami</title>
</head>
<style>

* {
  height: 100vh;
  width: 100vw;
  margin: 0;
  border: 0;
}
body {
  background-color: #1e1e1e;
  height: 100vh;
  width: 100vw;
}

h4 {
  font-color: white;
  color: white;
  z-index: 10;
  text-align: left;
  font-size: .85em;
}

#background > #display > #display1 {
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  text-align: left;
}

#background > #display1 {
  opacity: 1.0 !important;
  position: absolute;
  top: 22vh;
  width: 80%;
  height: 100px;
  font-family: courier;
  text-align: center;
  margin-left: calc((100% - 84%) / 2);
  margin-right: calc((100% - 84%) / 2);
  font-size: .85em;
  overflow: hidden;
  box-shadow: inset 0px 1px 26px 1px #BFBDBD,1px 9px 77px -4px #636161;
  -webkit-box-shadow: inset 0px 1px 26px 1px #BFBDBD,1px 9px 77px -4px #636161;
  -moz-box-shadow: inset 0px 1px 26px 1px #BFBDBD,1px 9px 77px -4px #636161;
  -o-box-shadow: inset 0px 1px 26px 1px #BFBDBD,1px 9px 77px -4px #636161;
  padding: 40px 40px 40px 40px;
  z-index: 10;
  text-shadow: none;
}
#background {
  display: inline-block;
  position: relative;
  text-shadow: 0px 0px 10px rgba(0,225,0,0.9);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  font-family: courier;
  text-align: center;
  font-size: 400px;
  width: 80%;
  height: 100%;
  margin-right: auto;
  margin-left: calc((100% - 80%) / 2);
  margin-top: 200px;
  /*this will make it so that a continual string of characters that is seen as one word will break across the page*/
  overflow-wrap: break-word;
  word-wrap: break-word;
  transition: all 1s cubic-bezier(0, 1.14, 0.82, 1.02);
  z-index: -10;
}

</style>
<body>
  <div id="background">
    <div id="display1">
      <h4 id="display" style="color: white"></h4>
    </div>
  </div>
</body>
<script>

// first step: set up an event listener for when a key was pressed and test it by creating an alert
  // document.addEventListener('keypress', (e) => {
  //   alert ('key was pressed')
  // });

// second step: change the alert functionality to a functionality that displays the alert in the div
  // document.addEventListener('keypress', (e) => {
  //   document.getElementById('display').innerHTML = "key was pressed"
  // });

// problem at this point is it's just replacing the text, I want it to append new keystrokes as well

// step 3. the += makes it append, but they are back to back, so need to add a space to before the closing quote
// document.addEventListener('keypress', (e) => {
//   document.getElementById('display').innerHTML += "key was pressed"
// });

// step 4
//   document.addEventListener('keypress', (e) => {
//     document.getElementById('display').innerHTML += "key was pressed "
//   });

// step 5 now the problem is I don't actually want it to display "key was pressed," I want it to display the value of the key that was pressed.  ...Correction.  I have found in documentation that when they refer to value about keys they are talking about the numeric mapping of the keys.  So the key "e" is mapped to the number 69, "f" is 70, etc., etc.  I am wanting it to show the "f" when "f" is pressed.  To do this I created a variable and set it to event.key and then plugged that in where I had my message

// document.addEventListener('keypress', (e) => {
//   const keypressed = event.key
//   document.getElementById('display').innerHTML += keypressed
// });

// step 6 Now I want to control the css based on how large the text flow is, which means I need to track how many times the keys have been pressed, assuming one key press adds one character.  Note that if I have the var keytotal set inside the event listener it will be set to zero and then added 1 to it everytime it is called.

// var keytotal = 0
//
// document.addEventListener('keypress', (e) => {
//   const keypressed = event.key
//
//
//   keytotal += 1
//   console.log (keytotal)
//   document.getElementById('display').innerHTML += keypressed

//
// step 7 Once I get the keypresses recorded, I can plug that into the .style.fontSize (capital S) and make it get smaller accordingly.  Note to notice the difference to test make the amount it changes a lot


// var keytotal = 0
// var myfontsize = 300
//
// document.addEventListener('keypress', (e) => {
//
//   keytotal += 1
//   myfontsize -= 100
//   console.log (keytotal)
//   console.log (myfontsize)
//   const keypressed = event.key
//   // document.getElementById('display').innerHTML += keypressed
//
//   document.getElementById('background').innerHTML += keypressed
//   document.getElementById('background').style.fontSize = myfontsize
//
//
// });

// step 8) did a lot of coding, so not sure how many steps in this one, but this is what I got to to get the expression to get smaller with an exponential rate incorporated

// var keytotal = 0
// var myfontsize = 502
// var x = 1

// document.addEventListener('keypress', (e) => {

//   keytotal += 1
//   x += 1
//   myfontsize -= (x ** 2)
//   console.log (keytotal)
//   console.log (myfontsize)
//   const keypressed = event.key
//   // document.getElementById('display').innerHTML += keypressed

//   document.getElementById('background').innerHTML += keypressed
//   document.getElementById('background').style.fontSize = myfontsize


// });

// step 9) for some reason when the font gets to 118 it is no longer getting smaller.  So I am going to try and build a break case statement that will evaluate for when it gets below 118 and start subtracting by 2 or 5 and then make it stop when it gets to a certain smallness

var keytotal = 0
var myfontsize = 502
var x = 1

document.addEventListener('keypress', (e) => {

  if (myfontsize > 120) {
      keytotal += 1
      x += 1
      myfontsize -= (x ** 2)
      console.log (keytotal)
      console.log (myfontsize)
      const keypressed = event.key

      document.getElementById('background').innerHTML += keypressed
      document.getElementById('background').style.fontSize = myfontsize
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
      document.getElementById('background').style.fontSize = myfontsize
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
      document.getElementById('background').style.fontSize = myfontsize
      document.getElementById('background').style.textShadow = "0px 0px 3px rgba(0,225,0,0.9)"
      document.getElementById('display').innerHTML += keypressed

  }
  
  console.log(myfontsize)

});

</script>
</html>
```
