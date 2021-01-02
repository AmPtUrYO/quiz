var sliderOne = document.getElementById("vol");
var sliderTwo = document.getElementById("vol2");
var sliderThree = document.getElementById("vol3");
var sliderFour = document.getElementById("vol4");
var sliderFive = document.getElementById("vol5");
var result = document.getElementById("value");
var result2 = document.getElementById("value2");
var result3 = document.getElementById("value3");
var result4 = document.getElementById("value4");
var result5 = document.getElementById("value5");
var button = document.getElementById("button");

var number = 0
var counter = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
}

//result.innerHTML = sliderOne.value;

/*sliderOne.oninput = function() {
    result.innerHTML = this.value;
    number = Number(result.innerHTML);
    switch(number) {
        case 0:
            //console.log('zero');
            result.innerHTML = 'strongly disagree';
            break;
        case 20:
            //console.log('20');
            result.innerHTML = 'disagree';
            break;
        case 40:
            //console.log('40');
            result.innerHTML = 'slightly disagree';
            break;
        case 60:
            //console.log('60');
            result.innerHTML = 'slightly agree';
            break;
        case 80:
            //console.log('80');
            result.innerHTML = 'agree';
            break; 
        case 100:
            //console.log('100');
            result.innerHTML = 'strongly agree';
            break;
        default:
            result.innerHTML = 'ERROR';
            console.error('error');
            break      
    };
}*/

function sliderThing(slider, result, key) {
    slider.oninput = function() {
        //console.log(this)
        result.innerHTML = this.value;
        number = Number(result.innerHTML);
        counter[key] = number;
        //console.log(counter);
        switch(number) {
            case 0:
                //console.log('zero');
                result.innerHTML = 'strongly disagree';
                break;
            case 2:
                //console.log('20');
                result.innerHTML = 'disagree';
                break;
            case 4:
                //console.log('40');
                result.innerHTML = 'slightly disagree';
                break;
            case 6:
                //console.log('60');
                result.innerHTML = 'slightly agree';
                break;
            case 8:
                //console.log('80');
                result.innerHTML = 'agree';
                break; 
            case 10:
                //console.log('100');
                result.innerHTML = 'strongly agree';
                break;
            default:
                result.innerHTML = 'ERROR';
                console.error('error');
                break      
        };
    }
}

sliderThing(sliderOne, result, 'one');
sliderThing(sliderTwo, result2, 'two');
sliderThing(sliderThree, result3, 'three');
sliderThing(sliderFour, result4, 'four');
sliderThing(sliderFive, result5, 'five');

button.onclick = function() {
    console.log(Object.values(counter));
    var output = Object.values(counter).reduce((a, b) => {
        a + b;
        console.log('total:', a, 'current value:', b)
        return a+b;
    },0);
    console.log(output);
    alert(`You have ${output} personalities`)
}