// async and await 

// prediction 

{

 function fetchWeather(){

   return Promise.resolve(
      "Sunny"
   );
}

async function run(){

   console.log("Start");
   const data = await fetchWeather();
   console.log(data);
   console.log("End");

}

run();
console.log("Program Finished");   

// Exact output? & Why?
// Start
// Program Finished
// Sunny
// End


// Which line waits?
// await waits for the async fucntion to send a function with promise

// Does whole JS stop or only run() stop?
// No run() is in bg(pauses) and next line executed

}



// Need : 
// Movie Loaded
// Subtitles Loaded
// Playing Movie


{

const loadMovie = () => {
    const movieLoader = new Promise (
        (res,rej) => {
            res("Movie Loaded")
        }
    )
    return movieLoader;
      
}

const loadSubtitles = () => {
    const subsLoader = new Promise(
        (res, rej) => {
            res("Subtitles Loaded")
        }
    )
    return subsLoader;
       

}

const playMovie = () => {
    const player = new Promise(
        (res,rej) => {
            res("pLAYING mOVIE")

        }
    )
     
    return player;

}

async function stream() {
    //  console.log(await loadMovie());
    //  console.log(await loadSubtitles());
    //  console.log(await playMovie());

     const movie = await loadMovie();
     const subs = await loadSubtitles();
     const play = await playMovie();

     setTimeout(() => {console.log(movie);
     },1000)
     setTimeout(() => {console.log(subs);
     },3000)
     setTimeout(() => {console.log(play);
     },5000)
     
} 

stream ()


}