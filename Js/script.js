// Task 1 
let name = prompt("Ваше имя:");
let age = prompt("Ваш возраст:");
let city = prompt("Ваш город проживания:");
let phone = prompt("Ваш контактный телефон:");
let email = prompt("Ваш email:");
let company = prompt("Наименование вашей компании:");
alert("переход на Задание 2");
console.log("Задание 1:", name, age, city, phone, email, company);
// Task 2
let birthdayYear = 2021 - age;
alert("Выполнено! переход на Задание 3");
console.log("Задание 2: год рождения.")
// Task 3
let string = prompt("Введите шесть цифр подряд:");
    arrString = string.split('');
    arrNumber = arrString.map(j=>Number(j));

    sumFirst3 = arrNumber[0] + arrNumber[1] + arrNumber[2];
    sumLast3 = arrNumber[3] + arrNumber[4] + arrNumber[5];

    if(sumFirst3 == sumLast3) {
        resultT3 = "да";
    } else {
        resultT3 = "нет";
    }
alert("переход на Задание 4");
console.log("Задание 3:", string);
// Task 4
let aT4 = prompt("Введите a равное 1, 0 или -3");
    aT4 = Number(aT4);
    
    if(aT4 > 0) {
        resultT4 = "Верно";
    } else {
        resultT4 = "Не верно";
    }
alert("переход на Задание 5");
console.log("Задание 4:", aT4);
// Task 5
let a = 10;
    b = 2;
    square = "";
    sum = a + b;
    difference = a-b;
    multiply = a * b;
    quotient = a / b;

    if(sum > 1) {
        square = Math.pow(sum, 2);
    }
alert("Выполнено! переход на Задание 6");
console.log("Задание 5:", a, b)
// // Task 6
if (((a > 2) && (a < 11)) || ((b >= 6) && (b < 14))) {
    resultT6 = "Верно";
} else {
    resultT6 = "Не верно";
}
alert("Выполнено! переход на Задание 7");
console.log("Задание 6: a>2 и a<11 или b>=6 и b<14");
// Task 7
let n = prompt("Введите переменную n от 0 до  59");
    nTransform = Math.trunc(n/15);
    switch(nTransform) {
        case 0: 
            resultT7 = "Переменная попадает в первую четверть";
        break;
        case 1: 
            resultT7 = "Переменная попадает во вторую четверть";
        break;
        case 2: 
            resultT7 = "Переменная попадает в третью четверть";
        break;
        case 3: 
            resultT7 = "Переменная попадает в четвертую четверть";
        break;
        default: 
            resultT7 = "Переменная заданна вне указанного диапазона";
        break;
    }
alert("переход на Задание 8");
console.log("Задание 7:", n);
// Task 8
let day = prompt("Введите день месяца от 1 до 31");
    day = Number(day);

    if ((day >= 1) && (day <= 10)) {
        resultT8 = "Это число попадает в 1-ю декаду месяца";
    } else if ((day >= 11) && (day <= 20)){
        resultT8 = "Это число попадает в 2-ю декаду месяца";
    } else if ((day >= 21) && (day <= 31)){
        resultT8 = "Это число попадает в 3-ю декаду месяца";
    } else {
        resultT8 = "Это число не попадает в указанный диапазон";
    }
alert("переход на Задание 9");
console.log("Задание 8:", day);
// Task 9
let dayQuantity = prompt("Введите количество дней");
    year = dayQuantity/365;
    year = year.toFixed(2);
    month = dayQuantity/31;
    month = month.toPrecision(3);
    week = dayQuantity/7;
    week = week.toPrecision(3);
    hour = dayQuantity*24;
    hour = hour.toFixed(2);
    minute = hour*60;
    minute = minute.toFixed(2);
    second = minute*60;
    second = second.toFixed(2);

    if(Math.trunc(year)>0) {
        resultYear = year + " лет(год)";
    } else {
        resultYear = "Меньше года";
    }

    if(Math.trunc(month)>0) {
        resultMonth = month + " месяц(-а -ев)";
    } else {
        resultMonth = "Меньше месяца";
    }

    if(Math.trunc(week)>0) {
        resultWeek = week + " неделя(-ль -ли)";
    } else {
        resultWeek = "Меньше недели";
    }

    if(Math.trunc(hour)>0) {
        resultHour = hour + " часов";
    } else {
        resultHour = "Меньше часа";
    }

    if(Math.trunc(minute)>0) {
        resultMinute = minute + " минут";
    } else {
        resultMinute = "Меньше минуты";
    }

    if(Math.trunc(second)>0) {
        resultSecond = second + " секунд";
    } else {
        resultSecond = "Меньше секунды";
    }

    resultT9 = resultYear + " " + resultMonth + " " 
               + resultWeek + " " + resultHour + " "
               + resultMinute + " " + resultSecond + " ";
alert("переход на Задание 10");
console.log("Задание 9:", dayQuantity);
// Task 10
let dayNumber = prompt("Введите номер дня в году");
    if((dayNumber>=1) && (dayNumber<=31)) {
        dayNumberMonth = 1;
        resultMonthRequired = "1-й месяц";
    } else if((dayNumber>=32) && (dayNumber<=59)) {
        dayNumberMonth = 2;
        resultMonthRequired = "2-й месяц"; 
    } else if((dayNumber>=60) && (dayNumber<=91)) {
        dayNumberMonth = 3;
        resultMonthRequired = "3-й месяц"; 
    } else if((dayNumber>=92) && (dayNumber<=122)) {
        dayNumberMonth = 4;
        resultMonthRequired = "4-й месяц"; 
    } else if((dayNumber>=123) && (dayNumber<=153)) {
        dayNumberMonth = 5;
        resultMonthRequired = "5-й месяц"; 
    } else if((dayNumber>=154) && (dayNumber<=184)) {
        dayNumberMonth = 6;
        resultMonthRequired = "6-й месяц"; 
    } else if((dayNumber>=185) && (dayNumber<=214)) {
        dayNumberMonth = 7;
        resultMonthRequired = "7-й месяц"; 
    } else if((dayNumber>=215) && (dayNumber<=244)) {
        dayNumberMonth = 8;
        resultMonthRequired = "8-й месяц"; 
    } else if((dayNumber>=245) && (dayNumber<=274)) {
        dayNumberMonth = 9;
        resultMonthRequired = "9-й месяц"; 
    } else if((dayNumber>=275) && (dayNumber<=304)) {
        dayNumberMonth = 10;
        resultMonthRequired = "10-й месяц"; 
    } else if((dayNumber>=305) && (dayNumber<=334)) {
        dayNumberMonth = 11;
        resultMonthRequired = "11-й месяц"; 
    } else if((dayNumber>=335) && (dayNumber<=365)) {
        dayNumberMonth = 0;
        resultMonthRequired = "12-й месяц"; 
    } else {
        dayNumberMonth = 12;
        resultMonthRequired = "Количество дней не совпадает с годовым"; 
    };
    
    switch(Math.trunc(dayNumberMonth/3)) {
        case 0:
            resultTimeYear = " Зима";
        break;
        case 1:
            resultTimeYear = " Весна";
        break;
        case 2:
            resultTimeYear = " Лето";
        break;
        case 3:
            resultTimeYear = " Осень";
        break;
        default: 
            resultTimeYear = "Количество дней не совпадает с годовым";
            break;
    }

    resultT10 = resultMonthRequired + " " + resultTimeYear;
    alert("Общий результат! \n Результат в поле браузера \n Введеные данные в консоли");
    console.log("Задание 10:", dayNumber);
