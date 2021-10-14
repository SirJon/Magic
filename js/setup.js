var Pers, firstName, lastName, eyes, coat, value, a, color;

var userDialog = document.querySelector(".setup");                      //Нашёл pupup с персонажем
userDialog.classList.remove("hidden");

document.querySelector(".setup-similar").classList.remove("hidden");

//mock


//Список персонажей
firstName = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
lastName = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
coat = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
eyes = ["black", "red", "blue", "yellow", "green"];
console.log("После массива", firstName.length);

function randomValue(){
    Math.floor(Math.random() * firstName.lenght);
    console.log("В функции",firstName.length);
}
console.log("Перед вызовом функции",firstName.length);
var maxx = randomValue();
console.log("Создание рандома ", Math.random() * firstName.lenght);
console.log("После вызова функции",firstName.length);
console.log("Значение выполнения функции ",maxx);

function randomColor(){
    a = (Math.floor(Math.random() * 100))/100;
    color = 'rgb(' + 4 + ', ' + 0 + ', ' + 200 + ', ' + a + ')';
}

var min = randomColor();
console.log(min);



Pers = [
    {
        name: "Иван Ирвинг",
        coatColor: "rgb(101, 137, 164)",
        eyesColor: "black"
    },
    {
        name: "Иван Ирвинг",
        coatColor: "rgb(101, 137, 164)",
        eyesColor: "black"
    },
    {
        name: "Иван Ирвинг",
        coatColor: "rgb(101, 137, 164)",
        eyesColor: "black"
    },
    {
        name: "Иван Ирвинг",
        coatColor: "rgb(101, 137, 164)",
        eyesColor: "black"
    }
]