document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
        { text: "Get busy living or get busy dying.", author: "Stephen King" },
        { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" }
    ];

    let currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

    function displayQuote() {
        document.getElementById('text').textContent = `"${currentQuote.text}"`;
        document.getElementById('author').textContent = `- ${currentQuote.author}`;
        document.getElementById('tweet-quote').href = `https://twitter.com/intent/tweet?text="${encodeURIComponent(currentQuote.text)}" - ${encodeURIComponent(currentQuote.author)}`;
    }

    document.getElementById('new-quote').addEventListener('click', function () {
        currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
        displayQuote();
    });

    displayQuote(); // display the initial quote
});
