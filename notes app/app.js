let notes = JSON.parse(localStorage.getItem("notes")) || [];
const addBtn = document.querySelector("button");
function renderNotes(){
    const container = document.querySelector("#notescontainer");
    container.innerHTML = "";
    // container.style.overflow = "scroll";

    notes.forEach((note,index) => {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";
        
        const p = document.createElement("p");
        p.textContent = note;

        const delBtn = document.createElement("button");
        delBtn.textContent ="❌";
        delBtn.className ="delete-btn";
        delBtn.onclick = () => deleteNote(index);

        noteDiv.appendChild(p);
        noteDiv.appendChild(delBtn);
        container.appendChild(noteDiv);
    });
}

function addNote(){
    const input = document.querySelector("#noteinput");
    const noteText = input.value.trim();
    if(noteText === ""){
        alert("you not write any note");
        return;
    }

    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));
    input.value = "";
    renderNotes();
}
addBtn.addEventListener("click",()=>{
    addNote();
});


function deleteNote(index){
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();

}
// initial rendring
renderNotes();


