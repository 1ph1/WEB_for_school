let stroke = "Hello world";
console.log(typeof stroke);
console.log(typeof 42);
console.log(typeof true);

console.log( `${stroke} я январь`);

//let color = prompt("Какой твой любимый цвет?");
//alert(`Пользователь ответил - ${color}`);

//let a = prompt("Первое число", 1)
//let b = prompt("Второе число", 2)
//alert(+a + +b)

//let height = prompt("высота")
//let weight = prompt("вес")
//let f1 = weight / (height**2)
//alert(weight / (height**2))

//let f = 1.72
//let answ = "friend"
//alert(`ИМТ больше у меня ${f1>f}, ИМТ больше у друга ${f>f1}`)

//const name = "Иван"
//const job = "учитель"
//const firstJobYear = 2014
//const today = 2023
//console.log(`Прошу внимания, это ваш новый ${job}, ${name}. Его стаж работы ${today - firstJobYear}`)


//console.log(`gthdfz cnhjrf
//    gfgfgtdf 
//    gfgfgfg
//`)

//let age = prompt("Введите ваш возраст")
//if (age>18){alert("Рады вас видеть в нашем сообществе")}else{alert(`Пшел отсюда малолетка. Сможешь зайти через ${18 - age} лет`)}

let a = prompt("Какой сегодня день недели?")
console.log(a)
switch (+a) {
    case 1:
        alert("Сегодня понедельник");
        break;
    case 2:
        alert("вторник");
        break;
    case 3:
        alert("среда");
        break;
    case 4:
        alert("четверг");
        break;
    case 5:
        alert("пятница");
        break;
    case 6:
        alert("суббота");
        break;
    case 7:
        ("воскресенье");
        break;
    default:
        break;
}

// a = prompt()

// function juiceMaker(apples, oranges=10){
//     console.log(apples, oranges);
//     const juice=`Ваш сок из ${apples} яблок и  ${oranges} апельсинов готов!`
    
//     return juice;
//     }

// // let x = juiceMaker(2,3);  // СОХРАНИТЬ РЕЗ-Т ФУНКЦИИ В ПЕРЕМЕННУЮ
// console.log(juiceMaker(2, 5));  // выводим рез-т функции

let x = [1, 2, 3]
x[10] = "П"
console.log(x)
