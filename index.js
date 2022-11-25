let count = 0;
let backward = document.getElementById("backward");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let fast_farward = document.getElementById("fast_farward");
let song_name = document.getElementById("song_name");
let song_artist = document.getElementById("song_artist");
let song = document.getElementById("song");
let song1 = document.getElementById("song1");
let song2 = document.getElementById("song2");
let img = document.querySelector("img");

pause.style.display = "none"

play.addEventListener("click", (() => {

  play.style.display = "none"
  pause.style.display = "block"
  img.classList.add("anim");


}))
pause.addEventListener("click", (() => {
  img.classList.remove("anim");
  pause.style.display = "none"
  play.style.display = "block"
}))

let songs = [
  {
    songName: "ki ki do you love me",
    artist: "justin"
  },
  {
    songName: "Love Dose Mp3 Song",
    artist: "Honey Singh"
  },
  {
    songName: "Angreji Beat Song",
    artist: "Honey Singh"
  }
]
song_name.innerHTML = songs[count].songName;
song_artist.innerHTML = songs[count].artist;

fast_farward.addEventListener('click', (() => {
  if(count >=0 && count < 2){
   
    count++;
  song_name.innerHTML = songs[count].songName;
  song_artist.innerHTML = songs[count].artist;
  if(count == 0){
      song.play();
    }
   else if(count == 1){
      song1.play();
      song.pause();
      pause.classList.replace('fa-circle-play', 'fa-circle-pause' )
    }
    else{
      song2.play();
      song.pause();
      song1.pause();
      pause.classList.replace('fa-circle-play', 'fa-circle-pause' )
    }
  }
 else {
count = 0;
song_name.innerHTML = songs[count].songName;
song_artist.innerHTML = songs[count].artist;
if(count == 0){
      song.play();
      song1.pause();
      song2.pause();
    }
   else if(count == 1){
      song1.play();
      song.pause();
     // pause.classList.replace('fa-circle-play', 'fa-circle-pause' )
      play.classList.replace('fa-circle-pause', 'fa-circle-play' )
    }
    else{
      song2.play();
      song.pause();
      song1.pause();
      play.classList.replace('fa-circle-pause', 'fa-circle-play' )
    }
}

}))

backward.addEventListener('click', (() => {
  if(count > 0){
    count--;
  song_name.innerHTML = songs[count].songName;
  song_artist.innerHTML = songs[count].artist;
  
  if(count == 2){
    song2.play();
      song.pause();
      song1.pause();
      pause.classList.replace('fa-circle-play', 'fa-circle-pause' )
    }
   else if(count == 1){
      song1.play();
      song2.pause();
      song.pause();
      pause.classList.replace('fa-circle-play', 'fa-circle-pause' )
    }
    else{
      song.play();
      song1.pause();
      song2.pause();
      
    }
  }
  
else{
  console.log(count)
  count = 2;
  song_name.innerHTML = songs[count].songName;
song_artist.innerHTML = songs[count].artist;
if(count == 2){
    song2.play();
      song.pause();
      song1.pause();
      pause.classList.replace('fa-circle-play', 'fa-circle-pause' )
    }
   else if(count == 1){
      song1.play();
      song.pause();
      song.pause();
      pause.classList.replace('fa-circle-play', 'fa-circle-pause' )
    }
    else{
      song.play();
      song1.pause();
      song2.pause();
    }
}
}));



play.addEventListener("click", () => {
  if (count == 0) {
    song.play();
    
  }
  else if (count == 1) {
    song1.play();
  
  }
  else {
    song2.play();
   
  }
})

pause.addEventListener('click', (() => {
  if (count == 0) {
    song.pause();
  }
  else if (count == 1) {
    song1.pause();
  }
  else {
    song2.pause();
  }
}))






