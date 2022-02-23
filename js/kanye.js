const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data));
}

const displayQuote = (quote) => {
    const quoteHolder = document.getElementById('quote');
    quoteHolder.innerText = quote.quote;
}