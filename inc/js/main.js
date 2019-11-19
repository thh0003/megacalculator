import MegaCalc from './megacalc.js';
let megaC = new MegaCalc;

let offBtn = document.querySelector("#OFF");
let binBtn = document.querySelector("#BIN");
let octBtn = document.querySelector("#OCT");
let decBtn = document.querySelector("#DEC");
let hexBtn = document.querySelector("#HEX");
let sqrtBtn = document.querySelector("#SQRT");
let pnmBtn = document.querySelector("#PNM");
let sevenBtn = document.querySelector("#SEVEN");
let eightBtn = document.querySelector("#EIGHT");
let nineBtn = document.querySelector("#NINE");
let multiplyBtn = document.querySelector("#MULTIPLY");
let expBtn = document.querySelector("#EXP");
let ceBtn = document.querySelector("#CE");
let fourBtn = document.querySelector("#FOUR");
let fiveBtn = document.querySelector("#FIVE");
let sixBtn = document.querySelector("#SIX");
let subtractBtn = document.querySelector("#SUBTRACTION");
let divideBtn = document.querySelector("#DIVIDE");
let oncBtn = document.querySelector("#ONC");
let oneBtn = document.querySelector("#ONE");
let twoBtn = document.querySelector("#TWO");
let threeBtn = document.querySelector("#THREE");
let addBtn = document.querySelector("#PLUS");
let equalBtn = document.querySelector("#EQUAL");
let zeroBtn = document.querySelector("#ZERO");
let decimalBtn = document.querySelector("#DECIMAL");

const mcUpdateDisplay = () => {
    if (megaC.getDebug()){
        console.log("Formula: "+ megaC.getFormula());
    }
    if (megaC.getState() == 1){
        document.getElementById('formula').innerHTML = megaC.getFormula();
        document.getElementById('display').innerHTML = megaC.getDisplay();
        document.getElementById('entry').innerHTML = megaC.getEntry();
        document.getElementById('value').innerHTML = megaC.getValue();
        document.querySelectorAll("button").forEach((x)=>{
            x.removeAttribute("disabled");
        })
    } else {
        document.getElementById('formula').innerHTML = megaC.getFormula();
        document.getElementById('display').innerHTML = megaC.getDisplay();
        document.getElementById('entry').innerHTML = megaC.getEntry();
        document.getElementById('value').innerHTML = megaC.getValue();
        document.querySelectorAll("button").forEach((x)=>{
            x.setAttribute("disabled","disabled");
        })
        document.querySelector("#ONC").removeAttribute("disabled");
    }
};

ceBtn.addEventListener('click', async () => {
    let ans = await megaC.ce();
    mcUpdateDisplay();
});

binBtn.addEventListener('click', async () => {
    let ans = await megaC.mcConv("BIN");
    mcUpdateDisplay();
});

octBtn.addEventListener('click', async () => {
    let ans = await megaC.mcConv("OCT");
    mcUpdateDisplay();
});

decBtn.addEventListener('click', async () => {
    let ans = await megaC.mcConv("DEC");
    mcUpdateDisplay();
});

hexBtn.addEventListener('click', async () => {
    let ans = await megaC.mcConv("HEX");
    mcUpdateDisplay();
});

oneBtn.addEventListener('click', () => {
    let ans = megaC.number('1');
    mcUpdateDisplay();
});

twoBtn.addEventListener('click', () => {
    let ans = megaC.number('2');
    mcUpdateDisplay();
});  

threeBtn.addEventListener('click', () => {
    let ans = megaC.number('3');
    mcUpdateDisplay();
});  

fourBtn.addEventListener('click', () => {
    let ans = megaC.number('4');
    mcUpdateDisplay();
});

fiveBtn.addEventListener('click', () => {
    let ans = megaC.number('5');
    mcUpdateDisplay();
});

sixBtn.addEventListener('click', () => {
    let ans = megaC.number('6');
    mcUpdateDisplay();
});

sevenBtn.addEventListener('click', () => {
    let ans = megaC.number('7');
    mcUpdateDisplay();
});

eightBtn.addEventListener('click', () => {
    let ans = megaC.number('8');
    mcUpdateDisplay();
});

nineBtn.addEventListener('click', () => {
    let ans = megaC.number('9');
    mcUpdateDisplay();
});

zeroBtn.addEventListener('click', () => {
    let ans = megaC.number('0');
    mcUpdateDisplay();
});

decimalBtn.addEventListener('click', () => {
    let ans = megaC.number('.');
    mcUpdateDisplay();
});

addBtn.addEventListener('click', async () => {
    let ans = await megaC.mcFunction("ADD");
    mcUpdateDisplay();
});

subtractBtn.addEventListener('click', async () => {
    let ans = await megaC.mcFunction("SUBTRACT");
    mcUpdateDisplay();
});

multiplyBtn.addEventListener('click', async () => {
    let ans = await megaC.mcFunction("MULTIPLY");
    mcUpdateDisplay();
});

divideBtn.addEventListener('click', async () => {
    let ans = await megaC.mcFunction("DIVIDE");
    mcUpdateDisplay();
});

sqrtBtn.addEventListener('click', async () => {
    let ans = await megaC.mcFunction("SQRT");
    mcUpdateDisplay();
});

expBtn.addEventListener('click', async () => {
    let ans = await megaC.mcFunction("POWER");
    mcUpdateDisplay();
});

pnmBtn.addEventListener('click', async () => {
    let ans = await megaC.plusminus();
    mcUpdateDisplay();
});

equalBtn.addEventListener('click', async () => {
    let onSound = new Audio("sounds/MEGA-CALC-EQUAL.wav")
    onSound.play();
    let ans = await megaC.mcFunction("EQUAL");
    mcUpdateDisplay();
});

oncBtn.addEventListener('click', async () => {
    let onSound = new Audio("sounds/MEGACALC-ON-V2.wav")
    onSound.play();
    let ans = await megaC.onc();
    mcUpdateDisplay();
});

offBtn.addEventListener('click', async () => {
    let onSound = new Audio("sounds/MEGA-CALC-OFF-V2.wav")
    onSound.play();
    let ans = await megaC.off();
    mcUpdateDisplay();
});
