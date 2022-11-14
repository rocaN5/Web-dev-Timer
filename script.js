const minutes = document.getElementById('timerMinutes');
const seconds = document.getElementById('timerSeconds');
const miliSeconds = document.getElementById('timerMiliseconds');

const timerStart = document.getElementById('timerStart');
const timerStop = document.getElementById('timerStop');
const timerFlag = document.getElementById('timerFlag');

let s = 0;
let m = 0;
let ms = 0;


timerStart.addEventListener('click', () =>{
    let counter = setInterval(timer, 10);

    function timer(){
        if(ms == 100 - 1){
            clearInterval(counter);
        };
        ms++;
        if(ms < 10){
            miliSeconds.innerHTML = "0" + ms;
        }else{
            
            miliSeconds.innerHTML = ms;
        };
        if(ms == 100 - 1){
            s++;
            if(s < 10){
                seconds.innerHTML = "0" + s;
            }else{
                
                seconds.innerHTML = s;
            };
            ms = 0;
        };
        if(s == 60 - 1){
            s = 0;
            seconds.innerHTML = "0" + s;
            m++;
            minutes.innerHTML = m;
            if(m < 10){
                minutes.innerHTML = "0" + m;
            }else{
                
                minutes.innerHTML = m;
            };
            ms = 0;
        };
    };
});

// timerStop.addEventListener('click', () =>{
//     miliSeconds.innerText = "Stop";
// });
// timerFlag.addEventListener('click', () =>{
//     miliSeconds.innerText = "Flag";
// });