function logger(){
    console.log(`0123456789`)
};

logger();
logger();


function juiceMaker(apples, oranges=5){
    console.log(apples, oranges);
    const juice=`Ваш сок состоящий из ${apples} яблок и ${oranges} апельсинов готов!`;
    return juice;
    // если написать просто написать return это заставит функцию закончится
};

console.log(juiceMaker(2,3));

let a = prompt(`Введите первое число`);
let b = prompt(`Введите второе число`);
function checkNumbers(one, two){
    if (one>two){
        return two
    }else{
        return one
    };
};

console.log(checkNumbers(+a, +b)); 


let devOne = 44;
let devTwo = 23;
let devThree = 71;

let desOne = 65;
let desTwo = 54;
let desThree = 49;

function count(first, second, third){
    let count = (first + second + third)/3;
    return count;
};

function solve(first, second){
    if (first>second){
        return `Developers`
    }else if (first==second){
        return `Никто не победил`
    }else{
        return `Designers`
    }
};

function solvePoints(max, min){
    return `нужно набрать еще ${max + 1 - min} баллов для победы!`
};

let devCount = count(devOne, devTwo, devThree);
let desCount = count(desOne, desTwo, desThree);

let answer = solve(devCount, desCount);
let points = solvePoints(desCount, devCount);

console.log(`В состязании победили ${answer}! проигравшим ${points}`);

// выводит: В состязании победили Designers! проигравшим нужно набрать еще 11 баллов для победы



const students = ["А", "Б", "В", "Г"];
console.log(students);
console.log(students[0]);
console.log(students.length);
console.log(students[students.length -1]);