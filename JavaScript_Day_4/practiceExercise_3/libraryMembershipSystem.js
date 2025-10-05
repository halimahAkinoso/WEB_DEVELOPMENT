// 1. Create the member object
const member = {
    name: 'John Doe',
    membershipType: 'premium', // Can be 'basic' or 'premium'
    borrowedBooks: [],

    // 2. Add the borrowBook method
    borrowBook: function(book) {
        this.borrowedBooks.push(book);
        console.log(`${this.name} has borrowed "${book}".`);
    },

    // 3. Add the getBorrowedCount method
    getBorrowedCount: function() {
        return this.borrowedBooks.length;
    },

    // 4. Add the getMembershipInfo method
    getMembershipInfo: function() {
        if (this.membershipType === 'premium') {
            return 'You have a premium membership with unlimited book borrowing.';
        } else {
            return 'You have a basic membership with a limit of 3 books.';
        }
    }
};

// Function to update the HTML display with member info
function updateDisplay() {
    document.getElementById('memberName').textContent = member.name;
    document.getElementById('memberType').textContent = member.membershipType;
    document.getElementById('borrowedCount').textContent = member.getBorrowedCount();
    document.getElementById('membershipInfoMessage').textContent = member.getMembershipInfo();
}

// Function to handle borrowing a book and updating the display
function borrowBook(bookTitle) {
    member.borrowBook(bookTitle);
    updateDisplay();
}

// Initial display update when the page loads
window.onload = updateDisplay;