let frageA = document.getElementById("frage1");
let antwortAA = document.getElementById("option11");
let antwortAB = document.getElementById("option12");
let antwortAC = document.getElementById("option13");
let antwortAD = document.getElementById("option14");

let frageB = document.getElementById("frage2");
let antwortBA = document.getElementById("option21");
let antwortBB = document.getElementById("option22");
let antwortBC = document.getElementById("option23");
let antwortBD = document.getElementById("option24");


let frageC = document.getElementById("frage3");
let antwortCA = document.getElementById("option31");
let antwortCB = document.getElementById("option32");
let antwortCC = document.getElementById("option33");
let antwortCD = document.getElementById("option34");

let frageD = document.getElementById("frage4");
let antwortDA = document.getElementById("option41");
let antwortDB = document.getElementById("option42");
let antwortDC = document.getElementById("option43");
let antwortDD = document.getElementById("option44");

let frageE = document.getElementById("frage5");
let antwortEA = document.getElementById("option51");
let antwortEB = document.getElementById("option52");
let antwortEC = document.getElementById("option53");
let antwortED = document.getElementById("option54");

/*let brot = 0;
let banane = 0;
let yog = 0;
let riegel = 0;*/
let ergebnisArray = [
    0,//brot 
    0,//banane 
    0,//yog 
    0//riegel
]

/*function ergebnisZeigen(){
    var result = ergebnisArray.indexOf(Math.max(...ergebnisArray));
    if(result === 1){
        document.getElementById("ergebnis1").style.display = 'block';
    }else if(result === 2){
            document.getElementById("ergebnis2").style.display = 'block';
        }else if(result === 3){
                document.getElementById("ergebnis3").style.display = 'block';
            }else{
                document.getElementById("ergebnis4").style.display = 'block';
            }
    console.log(ergebnisArray);
}*/

function ergebnisZeigen(){
    console.log(ergebnisArray);
    var result = ergebnisArray.indexOf(Math.max(...ergebnisArray));
    switch(result){
        case 0:
            document.getElementById("ergebnis1").style.display = 'block';
            break;
        case 1:
            document.getElementById("ergebnis2").style.display = 'block';
            break;
        case 2:
            document.getElementById("ergebnis3").style.display = 'block';
            break;
        case 3:
            document.getElementById("ergebnis4").style.display = 'block';
            break;
        default:
            alert('error');

    }
}

//frage 1
antwortAA.addEventListener('click', function(){
    ergebnisArray[0]++;
    document.getElementById("frage2").style.display = 'grid';
    document.getElementById("frage1").style.display = 'none';
});
antwortAB.addEventListener('click', function(){
    ergebnisArray[2]++;
    document.getElementById("frage2").style.display = 'grid';
    document.getElementById("frage1").style.display = 'none';
});
antwortAC.addEventListener('click', function(){
    ergebnisArray[1]++;
    document.getElementById("frage2").style.display = 'grid';
    document.getElementById("frage1").style.display = 'none';
});
antwortAD.addEventListener('click', function(){
    ergebnisArray[3]++;
    document.getElementById("frage2").style.display = 'grid';
    document.getElementById("frage1").style.display = 'none';
});

//frage2
antwortBA.addEventListener('click', function(){
    ergebnisArray[2]++;
    document.getElementById("frage3").style.display = 'grid';
    document.getElementById("frage2").style.display = 'none';
});
antwortBB.addEventListener('click', function(){
    ergebnisArray[1]++;
    document.getElementById("frage3").style.display = 'grid';
    document.getElementById("frage2").style.display = 'none';
});
antwortBC.addEventListener('click', function(){
    ergebnisArray[3]++;
    document.getElementById("frage3").style.display = 'grid';
    document.getElementById("frage2").style.display = 'none';
});
antwortBD.addEventListener('click', function(){
    ergebnisArray[0]++;
    document.getElementById("frage3").style.display = 'grid';
    document.getElementById("frage2").style.display = 'none';
});

//frage3
antwortCA.addEventListener('click', function(){
    ergebnisArray[3]++;
    document.getElementById("frage4").style.display = 'grid';
    document.getElementById("frage3").style.display = 'none';
});
antwortCB.addEventListener('click', function(){
    ergebnisArray[1]++;
    document.getElementById("frage4").style.display = 'grid';
    document.getElementById("frage3").style.display = 'none';
});
antwortCC.addEventListener('click', function(){
    ergebnisArray[0]++;
    document.getElementById("frage4").style.display = 'grid';
    document.getElementById("frage3").style.display = 'none';
});
antwortCD.addEventListener('click', function(){
    ergebnisArray[2]++;
    document.getElementById("frage4").style.display = 'grid';
    document.getElementById("frage3").style.display = 'none';
});

//frage4
antwortDA.addEventListener('click', function(){
    ergebnisArray[2]++;
    document.getElementById("frage5").style.display = 'grid';
    document.getElementById("frage4").style.display = 'none';
});
antwortDB.addEventListener('click', function(){
    ergebnisArray[0]++;
    document.getElementById("frage5").style.display = 'grid';
    document.getElementById("frage4").style.display = 'none';
});
antwortDC.addEventListener('click', function(){
    ergebnisArray[3]++;
    document.getElementById("frage5").style.display = 'grid';
    document.getElementById("frage4").style.display = 'none';
});
antwortDD.addEventListener('click', function(){
    ergebnisArray[1]++;
    document.getElementById("frage5").style.display = 'grid';
    document.getElementById("frage4").style.display = 'none';
});

//frage5
antwortEA.addEventListener('click', function(){
    ergebnisArray[2]++;
    document.getElementById("frage5").style.display = 'none';
    ergebnisZeigen();
});
antwortEB.addEventListener('click', function(){
    ergebnisArray[3]++;
    document.getElementById("frage5").style.display = 'none';
    ergebnisZeigen();
});
antwortEC.addEventListener('click', function(){
    ergebnisArray[0]++;
    document.getElementById("frage5").style.display = 'none';
    ergebnisZeigen();
});
antwortED.addEventListener('click', function(){
    ergebnisArray[1]++;
    document.getElementById("frage5").style.display = 'none';
    ergebnisZeigen();
});

document.getElementById("reset").addEventListener('click', function(){
    yog = 0;
    riegel = 0;
    banane = 0;
    brot = 0;
    ergebnisArray = [0, 0, 0, 0];
    document.getElementById("frage1").style.display = 'grid';
    document.getElementById("frage2").style.display = 'none';
    document.getElementById("frage3").style.display = 'none';
    document.getElementById("frage4").style.display = 'none';
    document.getElementById("frage5").style.display = 'none';
    document.getElementById("ergebnis1").style.display = 'none';
    document.getElementById("ergebnis2").style.display = 'none';
    document.getElementById("ergebnis3").style.display = 'none';
    document.getElementById("ergebnis4").style.display = 'none';
})