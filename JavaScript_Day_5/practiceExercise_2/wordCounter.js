document.getElementById('text-input').addEventListener('keyup', function() {
    const text = this.value;

    // Character count
    const charCount = text.length;
    document.getElementById('char-count').textContent = charCount;

    // Word count
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    document.getElementById('word-count').textContent = wordCount;

    // Challenge: Highlight the counter in red if character count > 200
    const charCountElement = document.getElementById('char-count');
    if (charCount > 200) {
        charCountElement.classList.add('highlight-red');
    } else {
        charCountElement.classList.remove('highlight-red');
    }
});