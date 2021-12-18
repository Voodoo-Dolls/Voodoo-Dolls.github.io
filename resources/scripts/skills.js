
function levelFive(){
    reset();
    let y = document.querySelectorAll('._5');
    for (i=0 ; i < y.length; i++){
        y[i].style.display ='block';
    }
}
function levelTen(){
    reset();
    let y = document.querySelectorAll('._10');
    for (i=0 ; i < y.length; i++){
        y[i].style.display ='block';
    }
}

function levelFifteen(){
    reset();
    let y = document.querySelectorAll('._15');
    for (i=0 ; i < y.length; i++){
        y[i].style.display ='block';
    }
}

function levelTwenty(){
    reset();
    let y = document.querySelectorAll('._20');
    for (i=0 ; i < y.length; i++){
        y[i].style.display ='block';
    }
}

function levelTwentyfive(){
    reset();
    let y = document.querySelectorAll('._25');
    for (i=0 ; i < y.length; i++){
        y[i].style.display ='block';
    }
}

function reset(){
    let x = document.querySelectorAll('._5, ._10, ._15, ._20, ._25');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}