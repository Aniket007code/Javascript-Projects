const endDate = "2 september 2023 10:20 PM";
document.getElementById("endDate").innerText = endDate;
const inputs = document.querySelectorAll("#inputs");
console.log(inputs[0]);

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    console.log(end);
    console.log(now);
    const diff = (end - now)/1000;
    console.log(diff);

    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor((diff/3600)%24);
    inputs[2].value = Math.floor((diff/60)%24);
    inputs[3].value = Math.floor((diff)%60);


}

clock();

setInterval(clock, 1000);


// setInterval {
//     ()=>{
//         clock();
//     },
//      1000
// }
