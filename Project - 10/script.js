function checkAnswer(option, isCorrect) {
    const allOptions = document.querySelectorAll('.quiz-options li');
    const correctOption = Array.from(allOptions).find(opt => opt.textContent === "Paris"); // Find the correct option

    allOptions.forEach(opt => opt.onclick = null); // Disable further clicking

    if (isCorrect) {
        option.classList.add('correct');
    } else {
        option.classList.add('wrong');
        correctOption.classList.add('correct'); // Highlight the correct option
    }
}
