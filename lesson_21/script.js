
//const age = [1920, 2013, 2020, 1996, 1630];

//function ageCount (age){
//    return 2023-age
//}

//console.log(ageCount(age[0]))
//console.log(ageCount(age[1]))
//console.log(ageCount(age[age.length -1]))

const massiv = [`a`, `b`, `v`]
massiv.push(`g`) //добавление в конец массива

massiv.pop() //удалить последний эллемент массива

massiv.unshift("0") //добавление в начала массива

massiv.shift() //удалить первый элемент массива

console.log(massiv.indexOf(`a`)) //найти индекс элемента списка

massiv.includes(`b`)


const names = ["Админ", "Владелец", "Анон"]

function qw(){
    let question = prompt(`Введите имя`)
    if(names.includes(question)==false){
        names.push(question)
        console.log(names)
    }else{
        qw()
    }
}

//qw()



const object = {
    "key1": [`Value1`, `Value2`],
    "key2": `Value3`,
    "key3": false,
    "key5": function(key3){
        if(key3==false){
            return true
        }
    }
}



console.log(object["key2"], object["key1"][1])
object["key4"]=`Value4`

const teacher = {
    calcAge: function(){
        return 2023-this.birthYear
    }
}



const IMT = {
    person1: {
        name: "Nikita",
        weight: 78,
        height: 169,
        imt: function(){
            return this.weight / (this.height**2)
        }
    },
    person2: {
        name: "Nikita2",
        weight: 92,
        height: 195,
        imt: function(){
            return this.weight / (this.height**2)
        }
    }
}

if (IMT["person1"]["imt"]>IMT["person2"]["imt"]){
    console.log(`${IMT["person1"]["name"]} больше ИМТ! Его ИМТ - ${IMT["person1"]["imt"]}`)
}else{
    console.log(`${IMT["person2"]["name"]} больше ИМТ! Его ИМТ - ${IMT["person2"]["imt"]}`)
}