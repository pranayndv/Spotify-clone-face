console.log("welcome to spotify")

let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById("masterPlay");
let myProgresBar = document.getElementById("myProgresBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName('songItem'))
// audioElement.play()
let songs = [  
    {songName:"Justin bieber-Boyfriend", filePath:"songs/1.mp3",coverPath:"covers/cover1.jpg"},
    {songName:"Justin bieber-As long as you love me", filePath:"songs/5.mp3",coverPath:"covers/cover3.jpg"},
    {songName:"Justin bieber-Purpose", filePath:"songs/2.mp3",coverPath:"covers/cover2.png"},
    {songName:"Justin bieber-Yummy", filePath:"songs/3.mp3",coverPath:"covers/cover4.png"},
    {songName:"Justin bieber-Peaches", filePath:"songs/4.mp3",coverPath:"covers/cover5.png"},
]


songItem.forEach((element,i )=> {
    // console.log(element,i)
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML=songs[i].songName;
});
// event listeners
// play and pause songs
masterPlay.addEventListener('click',()=>{

    if (audioElement.paused || audioElement.currentTime<0){
        audioElement.play();
        masterPlay.classList.add('fa-pause-circle')
        masterPlay.classList.remove('fa-play-circle')
        gif.style.opacity= 1
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle')
        masterPlay.classList.remove('fa-pause-circle')
        gif.style.opacity= 0

    }
})

audioElement.addEventListener("timeupdate",()=>{
console.log('timeupdate')
progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
console.log(progress)
myProgresBar.value =progress;
})

myProgresBar.addEventListener('change',()=>{
    audioElement.currentTime =myProgresBar.value* audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play-circle')
        element.classList.remove('fa-pause-circle')
        
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
    if (audioElement.paused || audioElement.currentTime<0){
     console.log(e.target)
     makeAllPlays();
     songIndex = parseInt(e.target.id)
     e.target.classList.remove('fa-play-circle')
     e.target.classList.add('fa-pause-circle')
     audioElement.src =`songs/${songIndex+1}.mp3`
     masterSongName.innerText =songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     gif.style.opacity= 1
     masterPlay.classList.add('fa-pause-circle')
     masterPlay.classList.remove('fa-play-circle')
    }
    else{
        console.log(e.target)
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.add('fa-play-circle')
        e.target.classList.remove('fa-pause-circle')
        audioElement.src =`songs/${songIndex+1}.mp3`
        masterSongName.innerText =songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.pause();
        gif.style.opacity= 0
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
    }
    })

    
});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex =0;
    }
    else{
        songIndex += 1;
    }
     audioElement.src =`songs/${songIndex+1}.mp3`
     masterSongName.innerText =songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.add('fa-pause-circle')
     masterPlay.classList.remove('fa-play-circle')
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex =0;
    }
    else{
        songIndex -= 1;
    }
     audioElement.src =`songs/${songIndex+1}.mp3`
     masterSongName.innerText =songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.add('fa-pause-circle')
     masterPlay.classList.remove('fa-play-circle')
})