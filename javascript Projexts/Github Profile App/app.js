

const APIURL = "https://api.github.com/users/"
const displayArea = document.getElementById("displayArea")

const getUser = async (username) => {
    const response = await fetch(APIURL + username)
    const data = await response.json()
    // console.log(data);

    const card = `
    <div class="imgSide">
         <div class="image">
           <img src="${data.avatar_url}" alt="panda img">
         </div>
    </div>
<div class="textSide">
    <div class="userName">
        <p>${data.name}</p>
    </div>
    <span class="nullSpan">
        ${data.bio}
    </span>
    <div class="userInfo">
        <li>${data.followers} <b>Followers</b></li>
        <li>${data.following} <b>Following</b></li>
        <li>${data.public_repos} <b>Repos</b></li>
    </div>

    <div id = "repos">
      
    </div>
</div>`
// <li>projects</li>
displayArea.innerHTML = card;

getRepos(username)
 
}


getUser("ashishsingh-30")

const getRepos = async(userName)=>{
    const repos = document.getElementById("repos")
    const response = await fetch(APIURL + userName + "/repos")
    const data = await response.json();
    // console.log(data);
    data.forEach(
        (item)=>{
            // console.log(item);
            const elem = document.createElement("a");
            elem.classList.add("rep");
            elem.href = item.html_url;
            elem.innerText = item.name;
            elem.target = "_blank";
            repos.appendChild(elem);


        }
    )

}

const formSubmit =() =>{
    const inputText = document.querySelector("#inputText").value;
    console.log(inputText);
    if(inputText.value !=" "){
      getUser(inputText.value)
    inputText.value="";


    }

    return false

}