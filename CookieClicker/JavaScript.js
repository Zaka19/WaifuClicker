var button = document.getElementById("ButtonClick");
var buttonSell = document.getElementById("ButtonBuy");
var buttonAraAra = document.getElementById("ButtonAraAra");
var buttonMaidCafe = document.getElementById("ButtonMaidCafe");
var buttonGateBox = document.getElementById("ButtonGateBox");

let number = 0;
let Money = 0;
let NumberAraAra = 0;
let MaidCafe = 1;
let GateBox = 1;
let Interval = 1;

let timer;

button.addEventListener("click", OnClick);
buttonSell.addEventListener("click", SellWaifu);
buttonAraAra.addEventListener("click",GenerateAraAra);
buttonMaidCafe.addEventListener("click",GenerateMaidCafe);
buttonGateBox.addEventListener("click",GenerateGateBox);


function OnClick(){
    if(number > 1000000 * GateBox){
        alert("You need GateBox.");
        clearInterval(timer);
        timer = setInterval(Auto,Interval * 1000);
    }
    else{
        number++;
        document.getElementById("Number").innerText = number;
    }
}

function Auto(){
    if (number < 1000000 * GateBox) {
        for(let a = 0; a < NumberAraAra;a++){
            number++;
        }
        document.getElementById("Number").innerHTML = number;
    }
    else{
        clearInterval(timer);
        timer = setInterval(Auto,Interval * 1000);
    }
}

function SellWaifu(){
    if(number > 0){
        Money = Money + (number * 0.10);
        number = 0;
        document.getElementById("Number").innerText = number;
        document.getElementById("Money").innerText = Money.toFixed(2);
    }
    else{
        alert("No puedes vender una waifu porque no tienes HAHAHAHAHAHA.");
    }
}

function GenerateAraAra(){
    if(Money >= 10 && NumberAraAra < (50 * MaidCafe)){
        Money = Money - 10;
        NumberAraAra++;
        document.getElementById("Money").innerText = Money.toFixed(2);
        document.getElementById("NumberAraAra").innerText = NumberAraAra;
    }
    else if(NumberAraAra == 50 * MaidCafe){
        alert("Necesitas mas MaidCafes.");
    }
    else{
        alert("No puedes generar un Ara Ara pringao.(Valen 10€)");
    }
}

function GenerateMaidCafe(){
    if(Money >= 1000){
        Money = Money - 1000;
        MaidCafe++;
        document.getElementById("Money").innerText = Money.toFixed(2);
        document.getElementById("NumberMaidCafe").innerText = MaidCafe - 1;
    }
    else{
        alert("No puedes generar un MaidCafe pringao.(Valen 1000€)");
    }
}

function GenerateGateBox(){
    if(Money >= 100){
        Money = Money - 100;
        GateBox++;
        document.getElementById("Money").innerText = Money.toFixed(2);
        document.getElementById("NumberGateBox").innerText = GateBox - 1;
    }
    else{
        alert("No puedes generar un GateBox pringao.(Valen 100€)");
    }
}

timer = setInterval(Auto,Interval * 1000);