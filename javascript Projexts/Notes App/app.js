const addBtn = document.querySelector("#addBtn");
const allNotes = document.querySelector(".allNotes")
addBtn.addEventListener(
    "click",
    function () {
        addNote();
    }
)

const saveNotes = () =>{
    const notes = document.querySelectorAll(".notes textarea");
    const data = [];
    notes.forEach(
        (note) =>{
            data.push(note.value)
            // console.log(note)

        }
    )
    localStorage.setItem("notes",JSON.stringify(data))
    console.log(data);
}



const addNote = (text="") => {
    const note = document.createElement('div')
    note.classList.add('notes')
    note.innerHTML = `
    <div class="icons">
     <i class="save fa-regular fa-floppy-disk"> </i>
     <i class="trash fa-regular fa-trash-can"></i>
    </div>
    <textarea class="textArea">${text}</textarea>`;
    allNotes.appendChild(note)

    note.querySelector('.trash').addEventListener(
        "click",
        function(){
            note.remove()
            saveNotes();
        }

    )

    note.querySelector('.save').addEventListener(
        "click",
        function(){
            saveNotes();
        }

    )
   saveNotes()

}


(
    function() {
        const lsNotes = JSON.parse(localStorage.getItem("notes"))
        lsNotes.forEach(
            (lsNotes)=>{
                addNote(lsNotes)
            }
        )

    }
) ()