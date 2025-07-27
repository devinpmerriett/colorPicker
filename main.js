function clickAlert(){
    alert("Click Felt")
}

function colorChange(givenId){
    document.getElementById('bkgd').style.backgroundColor = givenId;
}

function makeBlue(){
    document.getElementById('bkgd').style.backgroundColor = 'blue';
}
function randomColor(){
    let num = Math.floor(Math.random() * 16777215)
    let colorId = num.toString(16);
    document.getElementById('bkgd').style.backgroundColor = '#' + colorId
}