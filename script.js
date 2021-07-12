const music = document.querySelector("audio");
const image = document.querySelector('img');
const play = document.getElementById("play");
const Title = document.getElementById("title");
const Artist = document.getElementById("artist");
const Next = document.getElementById("next");
const Previous = document.getElementById("prev");


const songs = [
    {
    name:"willow",
    title: "Willow",
    artist:"Taylor Swift",
    },
    {
    name:"sweethrt",
    title: "SweetHeart",
    artist:"Dev Negi",
    },
    {
    name:"senorita",
    title: "Senorita",
    artist:"Shawn Mendes",
    }
];

let isPlaying = false;
//for play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    image.classList.add("anime");
};
//for pause function
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    image.classList.remove("anime");
};

play.addEventListener('click', () => {
    // if(isPlaying){
    //     pauseMusic();
    // }else {
    //     playMusic();
    // }
     isPlaying ? pauseMusic() : playMusic();
});

const loadSong= (songs) =>{
title.textContent = songs.title;
artist.textContent = songs.artist;
music.src = "music/"+songs.name+".mp3";
image.src = "images/"+songs.name+".jpg";
}

songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex + 1)% songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length)% songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

Next.addEventListener('click', nextSong);
Previous.addEventListener('click', prevSong);
