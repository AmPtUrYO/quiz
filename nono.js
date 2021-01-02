let numbers = [
    [0, 0, 1, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0]
];

function calculateVerticalNumbers(num) {
    var anotherArray = [];
    var consecutiveNumber = 0;
    num.forEach(function (element) {
        var newArray = [];
        element.forEach(function (val, i) {
            if(val === 0) {
                if(consecutiveNumber != 0){
                    newArray.push(consecutiveNumber)
                    consecutiveNumber = 0;
                }
            }else{
                consecutiveNumber++
            }
        }) 
        anotherArray.push(newArray)
    });
    return anotherArray
};

console.log(calculateVerticalNumbers(numbers));

function calculateHorizontalNumbers(num) {
    let helpArray = [];
    var consecutiveNumber = 0;
    for (i = 0; i<num.length; i++) {
        var moreArray = [];
        for (j = 0; j<num.length; j++) {
            if(num[j][i] === 0){
                if(consecutiveNumber != 0){
                    moreArray.push(consecutiveNumber);
                    consecutiveNumber = 0;
                }
            }else{
                consecutiveNumber++;
            }
        }
        helpArray.push(moreArray);
    }
    return helpArray;
};

console.log(calculateHorizontalNumbers(numbers));

console.log(grid);
var text = '';
numbers.forEach(function(element, i) {
    text += '<div class="row">';
    element.forEach(function(whatever, l){
        text += '<div data-row="'+i+'" data-column="'+l+'" class="cell blockcell" onClick="clickFunction(this, '+i+', '+l+')"></div>'
    })
    text += '</div>'
})
document.getElementById('grid').innerHTML=text;

var horizontal = calculateHorizontalNumbers(numbers);
var vertical = calculateVerticalNumbers(numbers);

var textVertical = '';
vertical.forEach(function(element) {
    textVertical += '<div class="rowtop">';
    element.forEach(function(whatever){
        textVertical += '<div class="cell">'+whatever+'</div>'
    })
    textVertical += '</div>'
})
document.getElementById('topgrid').innerHTML=textVertical;

var textHorizontal = '';
horizontal.forEach(function(element) {
    textHorizontal += '<div class="rowleft">';
    element.forEach(function(whatever){
        textHorizontal += '<div class="cell">'+whatever+'</div>'
    })
    textHorizontal += '</div>'
})
document.getElementById('leftgrid').innerHTML=textHorizontal;

function clickFunction(event, row, column){
    console.log(row, column);
    event.target;
    console.log(event);
};

