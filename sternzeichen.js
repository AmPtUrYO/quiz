//Variablen für Sternzeichen
let day;
let month;
var submitButton = document.getElementById("submit");


//Funktionen für Sternzeichen
function getMonth() {
    month = document.getElementById("monat").value;
    console.log(month);
    if(month != null){
        document.getElementById("tag").disabled = false;
    }    
}

function getDay() {
    day = document.getElementById("tag").value;
    console.log(day);
    if(day != null){
        document.getElementById("submit").disabled = false;
    }    
}

function showStuff(id){
    console.log(id);
    //hide all of them
    document.getElementById("aquarius").style.display = 'none';
    document.getElementById("pisces").style.display = 'none';
    document.getElementById("aries").style.display = 'none';
    document.getElementById("taurus").style.display = 'none';
    document.getElementById("gemini").style.display = 'none';
    document.getElementById("cancer").style.display = 'none';
    document.getElementById("leo").style.display = 'none';
    document.getElementById("virgo").style.display = 'none';
    document.getElementById("libra").style.display = 'none';
    document.getElementById("scorpio").style.display = 'none';
    document.getElementById("saggitarius").style.display = 'none';
    document.getElementById("capricorn").style.display = 'none';
    document.getElementById("sandwich").style.display = 'none';
    //display selected one
    document.getElementById(id).style.display = 'block';
    //document.getElementById(id).innerHTML = "text";
}


submitButton.addEventListener('click', function() {
    if(month === "jan" && day >19){
        //alert("aquarius");
        showStuff('aquarius');
    }else{
        if(month === "feb" && day <=18){
            //alert("aquarius");
            showStuff('aquarius');
        }else{
            if(month === "feb" && day <=29){
                //alert("pisces");
                showStuff('pisces');
            }else{
                if(month === "mar" && day <=20){
                    //alert("pisces");
                    showStuff('pisces');
                }else{
                    if(month === "mar" && day <= 31){
                        //alert("aries");
                        showStuff('aries');
                    }else{
                        if(month === "apr" && day <=19){
                            //alert("aries");
                            showStuff('aries');
                        }else{
                            if(month === "apr" && day <= 30){
                                //alert("taurus");
                                showStuff('taurus');
                            }else{
                                if(month === "may" && day <=20){
                                    //alert("taurus");
                                    showStuff('taurus');
                                }else{
                                    if(month === "may" && day <=31){
                                        //alert("gemini");
                                        showStuff('gemini');
                                    }else{
                                        if(month === "jun" && day <=20){
                                            //alert("gemini");
                                            showStuff('gemini');
                                        }else{
                                            if(month === "jun" && day <=30){
                                                //alert("cancer");
                                                showStuff('cancer');
                                            }else{
                                                if(month === "jul" && day <=22){
                                                    //alert("cancer");
                                                    showStuff('cancer');
                                                }else{
                                                    if(month === "jul" && day <= 31){
                                                        //alert("leo");
                                                        showStuff('leo');
                                                    }else{
                                                        if(month === "aug" && day <=22){
                                                            //alert("leo");
                                                            showStuff('leo');
                                                        }else{
                                                            if(month === "aug" && day <=31){
                                                                //alert("virgo");
                                                                showStuff('virgo');
                                                            }else{
                                                                if(month === "sep" && day <=22){
                                                                    //alert("virgo");
                                                                    showStuff('virgo');
                                                                }else{
                                                                    if(month === "sep" && day <=30){
                                                                        //alert("libra");
                                                                        showStuff('libra');
                                                                    }else{
                                                                        if(month === "okt" && day <=22){
                                                                            //alert("libra");
                                                                            showStuff('libra');
                                                                        }else{
                                                                            if(month === "okt" && day <=31){
                                                                                //alert("scorpio");
                                                                                showStuff('scorpio');
                                                                            }else{
                                                                                if(month === "nov" && day <=21){
                                                                                    //alert("scorpio");
                                                                                    showStuff('scorpio');
                                                                                }else{
                                                                                    if(month === "nov" && day <=30){
                                                                                        //alert("saggitarius");
                                                                                        showStuff('saggitarius');
                                                                                    }else{
                                                                                        if(month === "dec" && day <=21){
                                                                                            //alert("saggitarius");
                                                                                            showStuff('saggitarius');
                                                                                        }else{
                                                                                            if(month === "dec" && day <=31){
                                                                                                //alert("capricorn");
                                                                                                showStuff('capricorn');
                                                                                            }else{
                                                                                                if(month === "jan" && day <=19){
                                                                                                    //alert("capricorn");
                                                                                                    showStuff('capricorn');
                                                                                                }else{
                                                                                                    //alert("idiot sandwich");
                                                                                                    showStuff('sandwich');
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});