const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const allMovies = document.getElementById("allMovies");

const getMovies = async(api) => {
    const response = await fetch(api)
    const data = await response.json()
    console.log(data);
    showMovies(data.results)


}

const showMovies = (data) => {
    // console.log(data);
    allMovies.innerHTML= "";
    data.forEach(item => {
        console.log(item);
        const SingleMovie = document.createElement("div")
        SingleMovie.classList.add("singleMovie")
        SingleMovie.innerHTML = ` <img src=${IMGPATH + item.poster_path} alt="">
        <div class="overlay">
            <div class="titleAndRating">
                <div >
                    <h4>${item.original_title}</h4>
                </div>
                <div>
                    <p><b>${item.vote_average
                    } Rating</b></p>
                </div> 
            </div>
            
            <div>
                <p>${item.release_date}</p> 

            </div>
            
        </div>`

        allMovies.appendChild(SingleMovie)
    });
     
}

getMovies(APIURL)



document.querySelector("#inputText").addEventListener(
    "keyup",
    function(event){
        if(event.target.value != ""){
            // console.log(SEARCHAPI + event.target.value);

            getMovies(SEARCHAPI + event.target.value)
            

        }
        else{
               getMovies(APIURL)

        }

    }
)