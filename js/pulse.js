function boxShadowPulse () {

  var boxShadowElement = document.getElementById('display1');

  var styleState = function () {

    var testCurrentStyle = getComputedStyle(document.getElementById('display1')).boxShadow;
    var currentStyle = JSON.stringify(testCurrentStyle).includes("rgb(255, 255, 255) 0px 1px 26px 1px inset, rgb(99, 97, 97) 1px 9px 77px -4px");
    return currentStyle;
  };

  function styleOn () {

    document.getElementById('display1').style.boxShadow = "rgb(255, 255, 255) 0px 1px 26px 1px inset, rgb(99, 97, 97) 1px 9px 77px -4px";
    document.getElementById('display1').style.webkitBoxShadow = "rgb(255, 255, 255) 0px 1px 26px 1px inset, rgb(99, 97, 97) 1px 9px 77px -4px";

  }

  function styleOff() {
    document.getElementById('display1').style.boxShadow = "";
    document.getElementById('display1').style.webkitBoxShadow = "";
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  function switchStyleState () {
    if (styleState() === true) {
      delay(1000).then(styleOff);
    } else {
      delay(1000).then(styleOn);
    }
  }

  setInterval(switchStyleState, 10000)

}

boxShadowPulse ();