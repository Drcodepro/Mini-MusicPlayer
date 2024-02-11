
let All = [
    {name:"_Kya_Wo_Karega_Leke_Chadhawa.mp3", url:"./All/_Kya_Wo_Karega_Leke_Chadhawa.mp3",songId:1},
    {name:"AGAR NAth dekhoge.mp3", url:"./All/AGAR NAth dekhoge.mp3",songId:2},
    {name:"hamerSath_raghunath.mp3",url:"./All/hamerSath_raghunath.mp3",songId:3},
    {name:"Raghupathi_Raghava_Rajaram.mp3",url:"./All/Raghupathi_Raghava_Rajaram.mp3",songId:4},
    {name:"Rama_Ashtakam.mp3",url:"./All/Rama_Ashtakam.mp3",songId:5},
    {name:"Suraj_Ki_Garmi_Se.mp3",url:"./All/Suraj_Ki_Garmi_Se.mp3",songId:6},
    {name:"Gol_Mol.mp3",url:"./All/Gol_Mol.mp3",songId:7},
    {name:"London_Thumakda.m4a",url:"./All/London_Thumakda.m4a",songId:8},
    {name:"Pasoori_song).mp3",url:"./All/Pasoori_song).mp3",songId:9},
    {name:"Daydream.mp3",url:"./All/Daydream.mp3",songId:10},
    {name:"Dragons_-_Bones.mp3",url:"./All/Dragons_-_Bones.mp3",songId:11},
    {name:"Perfect_.mp3",url:"./All/Perfect_.mp3",songId:12},
    {name:"Shape_of_You.mp3",url:"./All/Shape_of_You.mp3",songId:13},
    {name:"The_Drum.mp3",url:"./All/The_Drum.mp3",songId:14},
    {name:"Dagabazz_re.mp3",url:"./All/Dagabazz_re.mp3",songId:15},
    {name:"I_love_you(bodyGourd).mp3",url:"./All/I_love_you(bodyGourd).mp3",songId:16},
    {name:"jadu hai nasha hain.mp3",url:"./All/jadu hai nasha hain.mp3",songId:17},
    {name:"Kalank_Title_Track.mp3",url:"./All/Kalank_Title_Track.mp3",songId:18},
    {name:"Pee loon.mp3.mp3",url:"./All/Pee loon.mp3",songId:19},
]

let Dance=[
    {name:"Gol_Mol.mp3",url:"./dance/Gol_Mol.mp3",songId:1},
    {name:"London_Thumakda.m4a",url:"./dance/London_Thumakda.m4a",songId:2},
    {name:"Pasoori_song).mp3",url:"./dance/Pasoori_song).mp3",songId:3}
]


let Devotional=[
    {name:"_Kya_Wo_Karega_Leke_Chadhawa.mp3", url:"./devotional/_Kya_Wo_Karega_Leke_Chadhawa.mp3",songId:1},
    {name:"AGAR NAth dekhoge.mp3", url:"./devotional/AGAR NAth dekhoge.mp3",songId:2},
    {name:"hamerSath_raghunath.mp3",url:"./devotional/hamerSath_raghunath.mp3",songId:3},
    {name:"Raghupathi_Raghava_Rajaram.mp3",url:"./devotional/Raghupathi_Raghava_Rajaram.mp3",songId:4},
    {name:"Rama_Ashtakam.mp3",url:"./devotional/Rama_Ashtakam.mp3",songId:5},
    {name:"Suraj_Ki_Garmi_Se.mp3",url:"./devotional/Suraj_Ki_Garmi_Se.mp3",songId:6},   
]


let English =[
    {name:"Daydream.mp3",url:"./English/Daydream.mp3",songId:1},
    {name:"Dragons_-_Bones.mp3",url:"./English/Dragons_-_Bones.mp3",songId:2},
    {name:"Perfect_.mp3",url:"./English/Perfect_.mp3",songId:3},
    {name:"Shape_of_You.mp3",url:"./English/Shape_of_You.mp3",songId:4},
    {name:"The_Drum.mp3",url:"./English/The_Drum.mp3",songId:5},
]

let Love = [
    {name:"Dagabazz_re.mp3",url:"./love/Dagabazz_re.mp3",songId:1},
    {name:"I_love_you(bodyGourd).mp3",url:"./love/I_love_you(bodyGourd).mp3",songId:2},
    {name:"jadu hai nasha hain.mp3",url:"./love/jadu hai nasha hain.mp3",songId:3},
    {name:"Kalank_Title_Track.mp3",url:"./love/Kalank_Title_Track.mp3",songId:4},
    {name:"Pee loon.mp3.mp3",url:"./love/Pee loon.mp3",songId:5},
]


let audioTracker = document.querySelector("audio");
let category = document.getElementById("category");
let songLable = document.getElementById("songName");
let full_list = document.getElementById("songLIst");
let back = document.getElementById("go_back");
let forverd = document.getElementById("move_forverd")



let Songcount = 1;
let totalsong =0;

window.addEventListener("DOMContentLoaded",(event)=>{
    showSongList(All);
})


function showSongList(songs){
    audioTracker.setAttribute("src",songs[0].url);
    songLable.textContent = songs[0].name;
    Songcount = 1;
    totalsong=0;
   
songs.forEach(song =>{
    let li = document.createElement("li");
    li.textContent = song.name;
    li.setAttribute("key",song.url);
    li.setAttribute("id",song.songId);
    full_list.appendChild(li);
    totalsong++;
});
console.log(totalsong  ,"count = ", Songcount)
}

   full_list.addEventListener("click",(event)=>{
      let url = event.target.getAttribute("key")
      let id = event.target.getAttribute("id")
      audioTracker.setAttribute("src",url);
      songLable.textContent = event.target.textContent; 
      Songcount = id;
   })

category.addEventListener('change',(event)=>{
    full_list.innerHTML=null;
    let value = category.value;
// showSongList(Love);
if(value==="Love")showSongList(Love);
else if(value=="All")showSongList(All);
else if(value=="Dance")showSongList(Dance);
else if(value=="Devotional")showSongList(Devotional);
else showSongList(English);
})


back.addEventListener("click",(event)=>{
    if(Songcount===1)Songcount = totalsong;
    else Songcount--;

let songtoplay = document.getElementById(Songcount);
let url = songtoplay.getAttribute("key")
      audioTracker.setAttribute("src",url);
      songLable.textContent = songtoplay.textContent; 
})

forverd.addEventListener("click",(event)=>{
    if(Songcount===totalsong)Songcount = 1;
    else Songcount++;
    console.log(Songcount)

let songtoplay = document.getElementById(Songcount);
let url = songtoplay.getAttribute("key")
      audioTracker.setAttribute("src",url);
      songLable.textContent = songtoplay.textContent; 
})

 