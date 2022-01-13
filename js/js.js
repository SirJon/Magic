var bigTimes = 0;
var proportion;
var CLOUD_WIDTH = 500;          //Высота облака
var CLOUD_HEIGHT = 200;         //Ширина облака
var Y_CLOUD = 10;               //Начало координта Y облака
var X_CLOUD = 100;              //Начало координат X облака
var MOVE_SHADOW = 10;           //Сдивг иени облака
var Y_COLUMN = 180;             //Начало координта Y колон
var X_COLUMN = 250;             //Начало координат X колон
var Y_TEXT = 200;               //Начало координат Y текста
var Y_TIME = 325;               //Недостающая разница для времени над колонами
var MAX_COLUMN = 100;           //Максимальная высота колон
var GAGE = 50;                  //Ширина между колонами
var THICKNESS = 40;             //Ширина колон
var i = 0;
var R = 10;
var G = 0;
var B = 200;
var a;
var color;
var TEXT_WIN;

function randomColor(){
    a = (Math.floor(Math.random() * 100))/100;
    color = 'rgb(' + R + ', ' + G + ', ' + B + ', ' + a + ')';
}

window.renderCloud = function(ctx, x, y, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function(ctx, players, times){

    console.log(players, times);
    renderCloud(ctx, X_CLOUD + MOVE_SHADOW, Y_CLOUD + MOVE_SHADOW, "rgba(0, 0, 0, 0.3)");   //Тень
    renderCloud(ctx, X_CLOUD, Y_CLOUD, "#fff");                                             //Облако
    ctx.font = "16px PT Mono";                                                              //Парметры текста
    ctx.fillStyle = "#000";                                                                 //Цвет текста

    for (var i = 0; i < times.length; i++){                                                 //Цикл округления времени и нахождения большего
        times[i] = Math.round(times[i]);
        if (times[i]>bigTimes){
            bigTimes = times[i];
        }
    }
    for (var i = 0; i < times.length; i++){
        if ((players[i] == "Вы") && (times[i] == bigTimes)){
            TEXT_WIN = "Ура, Вы победили!";
            i = times.length;
        } else{
            TEXT_WIN = "Вы проиграли:(";
        }
    }

    ctx.fillText(TEXT_WIN, 270, 30);
    ctx.fillText("Список результатов:", 260, 45);

    proportion = MAX_COLUMN/bigTimes;               //Пропорция для нахождения высоты колонок
    bigTimes = 0;
    
    for (i=0; i<players.length; i++){
        ctx.fillStyle = "#000";
        ctx.fillText(times[i], X_COLUMN + GAGE*i, CLOUD_WIDTH-times[i]*proportion-Y_TIME);  //Пишем значение времени
        ctx.fillText(players[i], X_COLUMN + GAGE*i, Y_TEXT);                                //Пишем имя пользователя
        randomColor();                                                                      //Вызываем функция рандомного цвета
        let colorCtx = players[i] == "Вы" ? "#900" : color;                                 //Если значение не пользователь, то цвет присваевается из рандома, иначе красный
        ctx.fillStyle = colorCtx;                                                           //Передаём в заливку значение colorCTX
        ctx.fillRect(X_COLUMN + GAGE*i, Y_COLUMN, THICKNESS, -times[i]*proportion);         //Рисуем колонку
    }
};

//mock

var Pers, firstName, lastName, eyes, coat, valueName, a, color;




//Список персонажей
firstName = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
lastName = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
coat = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
eyes = ["black", "red", "blue", "yellow", "green"];

function randomValue(valueName){    
    return(valueName[Math.floor(Math.random() * valueName.length)]);
}

//Функция заполнения массива

Pers = new Array(4);        //Кол-во персонажей задаю вручную, не знаю как сделать с помощью функции

for (var i = 0; i < Pers.length; i++){
    Pers[i] = {
        name: randomValue(firstName) + " " + randomValue(lastName),
        coatColor: randomValue(coat),
        eyesColor: randomValue(eyes)
    }
}

var similarListElement = document.querySelector(".setup-similar-list");
var similarWizardTemplade = document.querySelector
    ("#similar-wizard-template")
    .content
    .querySelector(".setup-similar-item");

for (var i = 0; i < Pers.length; i++){
    var wizardElement = similarWizardTemplade.cloneNode(true);

    wizardElement.querySelector(".setup-similar-label").textContent =  Pers[i].name;
    wizardElement.querySelector(".wizard-coat").style.fill =  Pers[i].coatColor;
    wizardElement.querySelector(".wizard-eyes").style.fill =  Pers[i].eyesColor;


    similarListElement.appendChild(wizardElement);
}