console.log("i am running");


let sub = document.getElementById('alarmsubmit');
audio = new Audio('Maroon 5 - Memories.mp3');
    


function fun()
{
    console.log("you r doing fun");
    let take = document.getElementById('alarm');
    console.log(take.value);
    if(take.value == "")
    {
        alert("value is NaN please fill the date and time in proper way");
        location.reload();
        

    }
    else{
        newdate = new Date(take.value);

        if(newdate=="Invalid Date")
        {
            alert("Invalid date please fill the date and time in proper way");
            location.reload();
        
        }

        now = new Date();
        console.log(newdate);
        console.log(now)
        console.log(newdate - now);

        if((newdate - now) < 0)
        {
            alert("time is in negetive please fill the date and time in proper way");
            location.reload();
        }

        let tag = document.getElementById('tag');
        tag.innerHTML = `<small class = "btn-success"> You have set the alarm succesfully</small>`;

        callkaro();
    }
}

function callkaro()
{
    setTimeout(() => {
        
        console.log("settimeout");
        audio.play();
        stop();

    }, newdate-now);
    
}

function stop()
{
    setTimeout(() => {
        console.log("music paused");
        audio.pause();
        audio.currentTime = 0;
        
    }, 30000);
}



