const Alltodos = document.getElementById("Alltodos")


const addBtn = document.getElementById("addBtn");
addBtn.addEventListener(
    "click",
    function(){
        // console.log("btn clicked"xtt);
        const text = document.getElementById("inputText").value;
        console.log(text);
        document.getElementById("inputText").value="";

        var todo = document.createElement('div')
        todo.classList.add('todos')
        todo.innerHTML =` <div id="todoDesign">
                          <li>${text}</li>
                          <button class="delBtn">Delete</button>
                          </div>`
        Alltodos.appendChild(todo)

            todo.querySelector('.delBtn').addEventListener(
        "click",
        function(){
            todo.remove()
            // saveNotes();
        }

    )

        
    }


    // note.querySelector('.trash').addEventListener(
    //     "click",
    //     function(){
    //         note.remove()
    //         saveNotes();
    //     }

    // )


    
   
)

 
// function deleteFun(){
//     console.log("del fun");
//     document.getElementById('todoDesign').style.display = "none";
// }





