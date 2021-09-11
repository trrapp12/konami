function boxShadowPulse () {
  console.log("entering boxShadowPulse function");
  var boxShadowElement = document.getElementById('display1');

  var styleState = function () {
    console.log("entering styleState")
    var testCurrentStyle = getComputedStyle(document.getElementById('display1')).boxShadow;
    console.log("testCurrentStyle is: " + testCurrentStyle);
    // var currentStyle = testCurrentStyle.includes('\"boxShadow\":\"rgb(191, 189, 189) 0px 1px 26px 1px inset, rgb(99, 97, 97) 1px 9px 77px -4px\"');
    var currentStyle = JSON.stringify(testCurrentStyle).includes("rgb(191, 189, 189) 0px 1px 26px 1px inset, rgb(99, 97, 97) 1px 9px 77px -4px");
    console.log("currentStyle is: " + currentStyle)
    return currentStyle;
  };

  function styleOn () {
    console.log("entering styleOn()")
    document.getElementById('display1').style.boxShadow = "rgb(191, 189, 189) 0px 1px 26px 1px inset, rgb(99, 97, 97) 1px 9px 77px -4px";
    document.getElementById('display1').style.webkitBoxShadow = "rgb(191, 189, 189) 0px 1px 26px 1px inset, rgb(99, 97, 97) 1px 9px 77px -4px";
    console.log(boxShadowElement)

  }

  function styleOff() {
    console.log("entering styleOff()")
    document.getElementById('display1').style.boxShadow = "";
    document.getElementById('display1').style.webkitBoxShadow = "";
    console.log(boxShadowElement)

  }

  function delay(ms) {
    console.log("entering delay()")
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  function switchStyleState () {
    console.log("entering switchStyleState().")
    if (styleState() === true) {
      // wait 2 seconds and turn style off and keep transition
      delay(1000).then(styleOff);
    } else {
       //wait 2 seconds and turn style on
      delay(1000).then(styleOn);
    }
  }

  setInterval(switchStyleState, 500)

}

function stopPulse () {
  document.getElementById('display1').style.webkitBoxShadow = "rgb(191, 189, 189) 0px 1px 26px 1px inset, rgb(99, 97, 97) 1px 9px 77px -4px";
  clearInterval()
}

window.addEventListener('keydown', function () {
  stopPulse();
})
window.addEventListener('mousemove', function () {
  console.log("mouseenter fired: " + boxShadowPulse())
  boxShadowPulse();
});


function addMovie () {
  var iframe = "<iframe width='560' height='315' src='https://www.youtube.com/embed/YBMQhKK3Ctk' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";

}
