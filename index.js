showNotes();
// adding a note
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener('click', function () {
    let addTxt = document.getElementById("textarea");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }
    notesArr.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    addTxt.value = "";
    showNotes();
});
// displaying the note 
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }
    let html = "";
    notesArr.forEach(function (element, index) {
        html += `<div class="card mx-3 my-3 noteCard" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button href="#" onclick="deleteNote(this.id)" id="${index}" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });
    let myNotes = document.getElementById("myNotes");
    if (notesArr.length != 0) {
        myNotes.innerHTML = html;
    }
    else {
        myNotes.innerHTML = `<b> No Notes to be displayed</b>`;
    }
}
// deleting the note 
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }

    console.log(notesArr);
    notesArr.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    showNotes();
}
// searching a note
let search = document.getElementById("searchTxt")
search.addEventListener('input', function () {
    let input = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function (element) {
        let queryTxt = element.getElementsByTagName("p")[0].innerText;
        if (queryTxt.includes(input)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
});