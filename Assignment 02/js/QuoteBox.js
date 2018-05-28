function randomQuotes() {
    var quotes = [
        "True wisdom comes not from knowledge, but from understanding.",
        "There is nothing permanent except change.",
        "Learning never exhausts the mind.",
        "The only journey is the one within.",
        "Life without love is like a tree without blossoms or fruit."
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
}

document.getElementById('QuoteGeneratorBackground').innerHTML = randomQuotes();

var inputBackgroundColor = document.querySelector('#backgroundColor');
var inputBorderColor = document.querySelector('#backgroundBorderColor');
var footerBackground = document.querySelector('#QuoteGeneratorBackground');
var footerBorder = document.querySelector('#QuoteGeneratorBackground');

inputBackgroundColor.addEventListener('change', function () {
    footerBackground.style.setProperty('--footer-background-color', inputBackgroundColor.value);
});

inputBorderColor.addEventListener('change', function () {
    footerBorder.style.setProperty('--footer-border-color', inputBorderColor.value);
});