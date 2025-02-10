// const data={name:"Deeksha",city:"Agra"}



// const storevariable=localStorage.setItem("xyz",JSON.stringify(data)
    
// )
// console.log(typeof (data))
// const getstore=localStorage.getItem("xyz")
// console.log(typeof(getstore))
// const sessionstore=sessionStorage.setItem("abc",JSON.stringify(data)) 

console.log("deeksha")

// audioElement.play()
// initialize the variable
let songIndex=0;
let audioElement=new Audio('./songs/1.mp3')
let masterplay=document.getElementById('masterplay')
let masterprogressbar=document.getElementById('myprogressbar')
let gif=document.getElementById('gif')










let song=[ //here is an array object of songname,filepath,coverpath
    {songName:"love-me-like",filepath:"songs/1.mp3",coverpath:"cover/1.jpg"},
    {songName:"love-me-like",filepath:"songs/1.mp3",coverpath:"cover/1.jpg"},
    {songName:"love-me-like",filepath:"songs/1.mp3",coverpath:"cover/1.jpg"},
    {songName:"love-me-like",filepath:"songs/1.mp3",coverpath:"cover/1.jpg"},
    {songName:"love-me-like",filepath:"songs/1.mp3",coverpath:"cover/1.jpg"},
    {songName:"love-me-like",filepath:"songs/1.mp3",coverpath:"cover/1.jpg"}
]

// handleplay/pause
masterplay.addEventListener('click',()=>{ //here we put addeventlistners on playbutton
    if(audioElement.paused||audioElement.currentTime<=0){ //it means on current time audioelement will be pause or 0
        audioElement.play() //if pause then it will be play by clicking play
        masterplay.classList.remove('fa-play') //if we click play then it remove play
        masterplay.classList.add('fa-pause') //and put pause instead
        gif.style.opacity=1
        
        

    }else{
        audioElement.pause() //if masterplay is in play mode then in else it should be in pause
        masterplay.classList.add('fa-play') //and play class should be apply
        gif.style.opacity=0
    }
})





// listen to events
audioElement.addEventListener('timeupdate',()=>{ //here on audioelement we put timeupdate
    console.log('timeupdate')
    // update seekbar-->current time means how much audio or video play till and duration is full length of audio and video
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100) //here we find the% of audio run till now in progress variable
//    console.log(progress)
   masterprogressbar.value=progress //here in masterprogressbar we get the value of progress
    }
    
)
masterprogressbar.accessKeyLabel('change',()=>{
    audioElement.currentTime=masterprogressbar.value
})

