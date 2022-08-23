
let wakeupTime='10 AM - 11 AM';
let lunchTime='12 PM - 1PM';
let napTime='4 PM - 5 PM';
let nightTime= '8 PM - 9 PM';
function selected_time(){
    let alarm=document.getElementsByClassName('alarmtime');
    wakeupTime=alarm[0].options[alarm[0].selectedIndex].text;
    lunchTime=alarm[1].options[alarm[1].selectedIndex].text;
    napTime=alarm[2].options[alarm[2].selectedIndex].text;
    nightTime=alarm[3].options[alarm[3].selectedIndex].text;
}

function setTime(){
    let set=document.getElementsByClassName('set');
    set[0].innerText='Wake Up Time :'+wakeupTime;
    set[1].innerText='Lunch Time :' + lunchTime;
    set[2].innerText='Nap Time:'+napTime;
    set[3].innerText='Night Time :'+nightTime;
    
}


function time(){
    const date=new Date();
    const hours =  date.getHours();
    const mins =  date.getMinutes();
    const secs =  date.getSeconds();
    let timeElement=document.getElementsByClassName('hour-time');
    if (hours>12){
        timeElement[0].innerText=('0'+(parseInt(hours)-12)).slice(-2);
    }else{timeElement[0].innerText=("0" + hours).slice(-2);}
    timeElement[1].innerText=("0" + mins).slice(-2);
    timeElement[2].innerText=("0" + secs).slice(-2);
    let am_pm=document.getElementById('ampm')
    if (hours>=12){
        am_pm.innerText='PM';
    }else{am_pm.innerText='AM';}
    
    let msg=document.getElementsByClassName('msg');
    let pic=document.getElementsByClassName('s3c3');

    let wakeT;
    let lunchT;
    let napT;
    let nightT;
    if (wakeupTime.split(' ')[1]==='AM'){
        wakeT=parseInt(wakeupTime)
    }else if (parseInt(wakeupTime)===12){wakeT=parseInt(wakeupTime)}
    else{wakeT=parseInt(wakeupTime)}

    if (lunchTime.split(' ')[1]==='AM'){
        lunchT=parseInt(lunchTime)
    }else if (parseInt(lunchTime)===12){lunchT=parseInt(lunchTime)}
    else{lunchT=parseInt(lunchTime)}

    if (napTime.split(' ')[1]==='AM'){
        napT=parseInt(napTime)
    }else if (parseInt(napTime)===12){napT=parseInt(napTime)}
    else{napT=parseInt(napTime)}

    if (nightTime.split(' ')[1]==='AM'){
        nightT=parseInt(nightTime)
    }else if (parseInt(nightTime)===12){nightT=parseInt(nightTime)}
    else{nightT=parseInt(nightTime)}

    if (hours>lunchT && hours<napT){
       msg[0].innerText='GOOD AFTERNOON !! TAKE SOME SLEEP';
       msg[1].innerText="LET'S HAVE SOME LUNCH !!";
       pic[0].style.backgroundImage="url('lunch_pic.svg')";
    }

    if (hours>napT && hours<nightT){
        msg[0].innerText='GOOD EVENING !!';
        msg[1].innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        pic[0].style.backgroundImage="url('evening_pic.png')";
    }

    if (hours>nightT){
        msg[0].innerText='GOOD NIGHT !!';
        msg[1].innerText="CLOSE YOUR EYES AND GO TO SLEEP";
        pic[0].style.backgroundImage="url('night.png')";
    }

    setTimeout(()=>{time()},1000);
}
time()


