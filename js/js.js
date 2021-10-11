var bigTimes = 0;
var proportion;
var CLOUD_WIDTH = 500;          //Высота облака
var CLOUD_HEIGHT = 200;         //Ширина облака
var X_COLUMN = 250;             //Начало координат X колон
var Y_TEXT = 200;               //Начало координат Y текста
var Y_COLUMN = 180;             //Начало координта Y колон
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
    renderCloud(ctx, 110, 20, "rgba(0, 0, 0, 0.3)");//Тень
    renderCloud(ctx, 100, 10, "#fff");              //Облако
    ctx.font = "16px PT Mono";                      //Парметры текста
    ctx.fillStyle = "#000";                         //Цвет текста
    ctx.fillText("Ура, Вы победили!", 270, 30);
    ctx.fillText("Список результатов:", 260, 45);

    for (var i = 0; i < times.length; i++){         //Цикл округления времени и нахождения большего
        times[i] = Math.round(times[i]);
        if (times[i]>bigTimes){
            bigTimes = times[i];
        }
    }

    proportion = MAX_COLUMN/bigTimes;               //Пропорция для нахождения высоты колонок
    bigTimes = 0;
    
    for (i=0; i<players.length; i++){
        ctx.fillStyle = "#000";
        ctx.fillText(times[i], X_COLUMN + GAGE*i, CLOUD_WIDTH-times[i]*proportion-Y_TIME); //Значениеб X, Y
        ctx.fillText(players[i], X_COLUMN + GAGE*i, Y_TEXT);
        randomColor();
        let colorCtx = players[i] == "Вы" ?"#900" : color;
        ctx.fillStyle = colorCtx;
        ctx.fillRect(X_COLUMN + GAGE*i, Y_COLUMN, THICKNESS, -times[i]*proportion);
        console.log("Y=", times[i]*proportion, "times=", times[i]);
    }
};