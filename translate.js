var txtinput = document.querySelector("#inputarea-translate");
var txtoutput = document.querySelector("#outputarea-translate");
var button = document.querySelector(
    "#button-translate");



var serverURL = "https://api.funtranslations.com/translate/braille/unicode.json";

console.log("hello script is working");

button.addEventListener("click", clickTranslate)
function translationURL(text){
    return serverURL + "?" + "text=" + text
}
// document.querySelector("#outputarea-translate"){
    // console.log(translationURL)
// }
console.log()
function clickTranslate() {
    var inputTxt = txtinput.value;

    fetch(translationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var  translatedText = json.contents.translated;
        txtoutput.innerText = translatedText + "Amazing, isn't it?"
    })
    .catch(errorHandler)
}
 function errorHandler(error){
     console.log("error: ", error)
          var  translatedText = error;
        txtoutput.innerText = "You can only translate 5 times per hour, server is busy, try again later."
 }
