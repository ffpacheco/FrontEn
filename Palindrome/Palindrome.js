document.getElementById('check-btn').addEventListener('click', function () {
    const inputElement = document.getElementById('text-input');
    const resultElement = document.getElementById('result');
    const inputValue = inputElement.value;

    if (!inputValue) {
        alert("Please input a value")
        return;
    }

    function cleanString(str) {
        return str.toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    const cleanInput = cleanString(inputValue);
    const isPalindrome = cleanInput == cleanInput.split('').reverse().join('');

    if (isPalindrome) {
        resultElement.textContent = `${inputValue} is a palindrome`;
    } else {
        resultElement.textContent = `${inputValue} is not a palindrome`;
    }

});