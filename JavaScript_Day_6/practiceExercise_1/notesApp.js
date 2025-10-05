document.addEventListener('DOMContentLoaded', () => {
    const noteTextarea = document.getElementById('note-text');
    const saveButton = document.getElementById('save-btn');
    const loadButton = document.getElementById('load-btn');
    const savedAtParagraph = document.getElementById('saved-at');
    const storageKey = 'persistentNote';

    // Function to save the note
    saveButton.addEventListener('click', () => {
        const noteContent = noteTextarea.value;
        const savedAt = new Date().toLocaleString();
        const noteObject = {
            content: noteContent,
            savedAt: savedAt
        };
        localStorage.setItem(storageKey, JSON.stringify(noteObject));
        savedAtParagraph.textContent = `Last saved at: ${savedAt}`;
        alert('Note saved!');
    });

    // Function to load the note
    loadButton.addEventListener('click', () => {
        const savedNote = localStorage.getItem(storageKey);
        if (savedNote) {
            const noteObject = JSON.parse(savedNote);
            noteTextarea.value = noteObject.content;
            savedAtParagraph.textContent = `Last saved at: ${noteObject.savedAt}`;
            alert('Note loaded!');
        } else {
            alert('No saved note found!');
        }
    });

    // Optional: Load the note on page load if it exists
    const initialLoad = localStorage.getItem(storageKey);
    if (initialLoad) {
        const noteObject = JSON.parse(initialLoad);
        savedAtParagraph.textContent = `Last saved at: ${noteObject.savedAt}`;
    }
});