const units = document.getElementsByClassName('unit');
var interval;
let counter = 0;
function flashRun(){
    interval = window.setInterval(()=>{        
        if(counter == 0){
            units[0].style.backgroundImage = `url('imgs/2.jpg')`;
            units[5].style.backgroundImage = `url('imgs/1.jpg')`;
            counter ++;
        }else{
            units[counter].style.backgroundImage = `url('imgs/2.jpg')`;
            units[counter-1].style.backgroundImage = `url('imgs/1.jpg')`;
            if(counter == 5){
                counter = 0;
            }else{
                counter ++
            }
        }

    }, 1000)
}
flashRun();

for(let i=0; i<units.length; i++){
    units[i].addEventListener('mouseover', superFlash);
    units[i].addEventListener('mouseout', continueFlash);
}

function superFlash(e){
    window.clearInterval(interval);
    e.target.style.backgroundImage = `url('imgs/3.jpg')`
}

function continueFlash(e){
    e.target.style.backgroundImage = `url('imgs/1.jpg')`
    flashRun();
}