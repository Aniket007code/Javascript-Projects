const questions = [
    {
        "que":"which of the following is a markup language",
        "a": "Html",
        "b": "javascript",
        "c": "css",
        "d": "python",
        "correct": "a"
    },
    {
        "que":"which tech should we used to hack nasa",
        "a": "Html",
        "b": "javascript",
        "c": "css",
        "d": "python",
        "correct": "a"


    },
    {
        "que":"where do i live",
        "a": "Kalyan",
        "b": "Thane",
        "c": "Bhivandi",
        "d": "Mumbai",
        "correct": "b"

    }
]

const que = document.getElementById("question");
const optionInputs = document.querySelectorAll("#option")

let index = 0;
let right = 0;
let wrong = 0;
let total = questions.length;
const loadQuestion = ()=>{

    if(index == total){
        return endQuiz();
    }else{
        reset()
    }
    const data = questions[index]
    // console.log(data)
    que.innerHTML = ` ${index+1} ) ${data.que}`

    optionInputs[0].nextElementSibling.innerText = data.a
    
    optionInputs[1].nextElementSibling.innerText = data.b
    optionInputs[2].nextElementSibling.innerText = data.c
    optionInputs[3].nextElementSibling.innerText = data.d

}
getAnswer = ()=>{
    let answer;
    optionInputs.forEach (
        (input)=>{
            if(input.checked){
                answer = input.value   // ider error hay
            }

        }
    )
    return answer;
}

const submitQuiz = ()=> {
    const data = questions[index]

    const ans = getAnswer();
    // console.log(ans);
    
    if(ans == data.correct){
        right++;
        // console.log(right);
    }else{
        wrong++;
        // console.log(wrong);
    }

    index++;
    reset()
    loadQuestion()



}


// getAnswer()


const reset =()=>{
    optionInputs.forEach (
        (input)=>{
          input.checked = false;

        }
    )

}

const quizBorder = document.getElementById("quizBorder"); 

const endQuiz =()=>{
    quizBorder.innerHTML = `<h3>Thanks For playing</h3>
    <br>
                            your score : ${right} / ${total}
                            
                            `


}

loadQuestion();