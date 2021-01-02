let main = document.getElementById("meme");
let memeOne = document.getElementById("meme1");
let memeTwo = document.getElementById("meme2");
let memeThree = document.getElementById("meme3");
let memeFour = document.getElementById("meme4");

memeOne.addEventListener('click', function(){
    document.getElementById("meme").style.backgroundImage = 'url("bilder/mockingspongebob.png")';
});

memeTwo.addEventListener('click', function(){
    document.getElementById("meme").style.backgroundImage = 'url("bilder/wouldbegreat.png")';
});

memeThree.addEventListener('click', function(){
    document.getElementById("meme").style.backgroundImage = 'url("bilder/monkeypuppet.jpg")';
});

memeFour.addEventListener('click', function(){
    document.getElementById("meme").style.backgroundImage = 'url("bilder/surprisedpikachu.png")';
});