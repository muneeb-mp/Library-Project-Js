console.log('Library Project');

//Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display constructor
function Display() {

}

// Add methods to display prototype
Display.prototype.add = function (book) {
    let tableBody = document.getElementById('tableBody');
    let html = `<tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`;
    tableBody.innerHTML += html;
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, dispMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message : </strong> ${dispMessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
    `;

    setTimeout(function () {
        message.innerHTML = '';
    }, 2000);
}

// Add submit event listener to library form
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    // set value for name and author
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    // Grab all types and set value in if condition
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    // creating object of Book
    book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been added.');
    }
    else {
        display.show('danger', 'Sorry you cannot add this book.');
    }

    e.preventDefault();     // To prevent reload of page on clicking submit
}

