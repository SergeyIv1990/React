//console.log("Hello world");

//var myVar, doSomething;
//doSomething = function(){
//    alert("you typed" + myVar);
//};

//var links, updatestate, updatebuttons, contentEl, navEl;

//contentEl = document.querySelector('.content');
//navEl = document.querySelector('.nav');

//links = {
  //  main: "This is the <strong>main</strong> page",
    //about: "This is the <strong>about</strong> page",
//    downloads: "This is the <strong>downloads</strong> page"
//};

//updatestate = function(state){
  //  if (!state) return;
    //contentEl.innerHTML = links(state.page);
//    updatebuttons(state);
//};
//updatebuttons = function(state){
//[].slice.call(navEl.querySelectorAll('a'))
//.forEach(function(e){
 //   var classList = e.parentNode.classList;
   // state.page === e.getAttribute('href')
//    ? classList.add('active')
  //  : classList.remove('active');
    //});
//};
//window.addEventListener('popstate', function(e){
  //  updatestate(e.state);
//});

//navEl.addEventListener('click', function(e){
  //  var state;
    //if (e.target.tagName !== 'A') return;
//    state = { page: e.target.getAttribute('href') };
  //  history.pushState(state, '', state.page);
    //updatestate(state);
//    e.preventDefault();
//});
// ДЗ-1 по работе с переменными:
//Необходимо создать четыре переменных (названия выбирайте на своё усмотрение).
//Первую - для хранения количества дней. Присвойте ей значение - 365.Вторую - для хранения названия нашей планеты "Земля".
//Третью - для хранения примерного количества жителей нашей планеты, присвойте ей значение "7 млрд.". Четвертую - для хранения слова "Солнце".
//Далее, используя текст и переменные, Вы должны вывести на экран такой абзац:
//"В нашем году 365 дней. Днём у нас светит Солнце. Население планеты Земля составляет примерно 7 млрд. человек."

//var day, planet, population, sun;
//day = 365;
//planet = "earth";
//population = 7000000000;
//sun = "Sun";
//console.log("В нашем году", day, "дней. Днём у нас светит", sun,". Население планеты составляет примерно ", population,"человек.");
//alert("В нашем году " + day + " дней. Днём у нас светит " + sun + ". Население планеты составляет примерно " + population +" человек.");
//var home = "В нашем году " + day + " дней. Днём у нас светит " + sun + ". Население планеты составляет примерно " + population +" человек.";
//document.write(home);

// ДЗ-2 по удалению из ... и добавлению элементов в Массив:
//1. Создайте массив с фруктами: апельсин, банан, груша.
//2. Выведите на экран, сколько на данный момент у вас фруктов в массиве.
//3. С помощью методов, изученных в предыдущем уроке, добавьте в конец массива два фрукта - яблоко и ананас, а в начало массива - грейпфрут.
//4. Выведите на экран, сколько на данный момент у вас фруктов в массиве.
//5. С помощью методов, изученных в предыдущем уроке, удалите из массива последний и первый элемент.
//6. Выведите на экран, сколько на данный момент у вас фруктов в массиве.
// а если удалить 2 элементь?

//var fruit = ["апельсин", "банан","груша"];
//console.log(fruit.length);
//console.log(fruit);
//fruit[3] = "яблоко";
//fruit.push("ананас");
//console.log(fruit);
//fruit.unshift("грейпфрут")
//console.log(fruit);
//fruit.pop();
//console.log(fruit);
//fruit.shift();
//console.log(fruit);
//delete fruit[1];
//console.log(fruit);

// У Вас есть массив, про который заранее известно, что в нем точно больше одного элемента. Но сколько именно - неизвестно. 
//Пусть это будет такой массив с фруктами: var fruits = ["яблоко", "апельсин", "груша", "гранат"];
//Напомню, что по условиям Вы не знаете сколько точно в нем элементов, их может быть и 100 и 200. Ваша задача состоит в том, 
//чтобы с помощью метода splice заменить в массиве предпоследний фрукт на "ананас" и вывести весь массив на экран.
//Когда это будет сделано, проверьте свой код на таком массиве: var fruits = ["банан", "мандарин", "манго"]; В этом массиве
// у Вас мандарин должен будет замениться на ананас.

//var fruits = ["банан", "мандарин", "манго"];
//fruits.splice( fruits.length - 2, 1, "ананас");
//console.log(fruits);

//Возьмите массив друзей из предыдущей темы: var friends = ["Алексей", "Вячеслав", "Григорий", "Настя", "Павел"];
//Напишите условие, которое проверяет: если количество элементов в массиве больше или равно 3, то выводится сообщение о том,
// что это большой массив, в котором как минимум 3 элемента. А иначе, выведите на экран сообщение о том, что это маленький массив. 

//var friends = ["Алексей", "Вячеслав", "Григорий", "Настя", "Павел"];
//var text = friends.length >= 3 ? "Это большой массив" : "Это маленький массив";
//console.log(text);

//if (friends.length >= 3) {
//    console.log("Это большой массив");
//}
//    else {
 //   console.log("Это маленький массив");
//};

//У Вас есть массив: var friends = ["Алексей", "Вячеслав", "Григорий", "Настя"];
//Вам нужно написать условие, что, если длина этого массива равна 4 и последним элементом является "Настя",
// то вывести на экран сообщение "Этот массив мне подходит", а иначе вывести на экран, что массив вам не подходит.

//friends = ["Алексей", "Вячеслав", "Григорий", "Настя"];
//var last_element_array_friends = friends[friends.length-1];
//if (friends.length == 4 && last_element_array_friends == "Настя"){
//    console.log("Этот массив подходит");
//}
//else {
//    console.log("Это массив не подходит");
//};
//Напишите множественное условие для действий при различных сигналах светофора.
//Если сигнал красный, то надо стоять, иначе, если желтый, то надо приготовиться, а иначе, можно идти.

//var traffic_signal = "yellow";
//if (traffic_signal == "red"){
//    console.log("Движение запрещено")
//}
//else if (traffic_signal == "yellow"){
//    console.log("Приготовтесть")
//}
//else if (traffic_signal == "green"){
//    console.log("Движение разрещено")
//};

//У Вас есть массив Друзей:
//var friends = [" Алексей", " Вячеслав", " Григорий", " Настя", " Николай", " Павел", " Любовь", " Егор", " Лэйла"];
//С помощью цикла while нужно вывести на экран всех друзей, начиная с Григория и заканчивая Любовью. При условии, 
// что мы видим массив и знаем, как в нём расположены друзья.
// мой вариант:
//friends = [" Алексей", " Вячеслав", " Григорий", " Настя", " Николай", " Павел", " Любовь", " Егор", " Лэйла"];
//var i = 7;
//while(i>2){
//    console.log(friends[friends.length - i]);
//    i--;
//};
// как нужно:
//i = 2;
//while(i <= 6){
//    console.log(friends[i++])
//};

//Написать цикл для вывода квадратов всех чисел от 1 до 7.
//В итоге вы должны получить такую картину:
//Квадрат 1 = 1
//Квадрат 2 = 4
//Квадрат 3 = 9
//Квадрат 4 = 16
//Квадрат 5 = 25
//Квадрат 6 = 36
//Квадрат 7 = 49

//for(i=1; i<8; i++)
//console.log("Квадрат", i, "=", i*i);

//Ваша задача написать код, который бы спрашивал у пользователя, сколько ему лет. Вы должны проанализировать полученный ответ,
// и если человеку больше 20 лет, то вам нужно вывести на экран фразу "Вы уже взрослый человек!", а если меньше 20 или равно 20,
// то вывести "Вы еще молоды, у Вас все впереди!".
//При этом возьмем допущение, что пользователь правильно укажет свой возраст, т.е. напишет именно число, без дополнительных символов, 
//т.к. различные проверки мы будет учиться писать позже.

//     Моё решение
//var p = prompt("Сколько вам лет?")
//if( p >= 20){
//    console.log("Вы уже взрослый человек!")};
//if(p < 20){
//    console.log("Вы еще молоды, у Вас все впереди!")};


//В качестве домашнего задания вам надо написать функцию, которая бы вычисляла квадрат переданного ей числа и выводила бы его на экран.
// Решение 1 (не правильное, но я оставил)
//var p = prompt("Введите число");
//alert (p*p);
//Решение 2

//function fun(p){
 //  var itog = Math.pow(p,2);
 //   console.log(itog);
//};
//fun(26);

//Написать функцию, которая бы запрашивала у пользователя число и выводила бы на экран куб, указанного пользователем числа.

//function func(){
//    var s = prompt("Введите число");
//    var itog = Math.pow(s,3);
//   console.log(itog);
//};
//func();

//Создать функцию fio(), которая поочередно запрашивает у пользователя имя, фамилию и отчество,
//а в качестве результата своей работы возвращает ФИО одной строкой с пробелами между словами.

//function fio(){
//    var f = prompt("Введите фамилию");
//    var l = prompt("Введите имя");
//    var o = prompt("Введите отчество");
//    console.log(f,l,o);
//};
//fio();

// 1. Напишите функцию, которая в качестве параметра получает строку, а как результат своей работы,
// возвращает количество символов в этой строке (не печатает на экран, а именно возвращает).
// 2. Запросите у пользователя ввод любого слова и поместите этот ввод в переменную.
// 3. Вызовите вашу функцию, а в качестве параметра передайте ей переменную, в которой сохранено слово пользователя.
// 4. Напечатайте на экран сообщение о том, сколько же символов оказалось в введенном пользователем слове.

//var string = "Some string"
//function st(){
//    var a = string.length;
//    return a;
//};
//st();

//function st(){
//    var a = string.length;
//    var l = prompt("Введите  любое слово");
//    var b = l.length;
//    console.log("В вашем слове",b,"буквы");
//};
//st();

//1. Напишите функцию, которая в качестве параметра получает строку, а как результат свой работы вычисляет, в строке больше 10 символов или меньше.
//2. Запросите у пользователя ввод любого слова и поместите этот ввод в переменную.
//3. Вызовите вашу функцию, а в качестве параметра передайте то самое слово, которое вы сохранили в переменную.
//4. Напечатайте на экран сообщение о том, больше 10 символов в этом слове, меньше или равно 10.

//function func(){
//    var l = prompt("Введите  любое слово");
//    var b = l.length;
//    if (b>=10){console.log("ваша строка больше 10 символов")}
//    else {console.log("ваша строка меньше 10 символов")};
//};
//func();

//В качестве домашнего задания задайте человеку вопрос через метод prompt().
//Правильный ответ заранее поместите в переменную var answer. Правильный ответ запишите полностью маленькими буквами.
//Когда получите ответ от пользователя, переведите его в нижний регистр и сравните с ответом из переменной.
//Если ответ верный, то выведите сообщение, что ответ верный, если нет, то сообщение о том, что неверный.
//После того как скрипт будет готов, попробуйте сами ответить на вопрос, вводя его разными буквами.
//Попробуйте на время убрать метод toLowerCase() из скрипта и посмотрите, что произойдет.

//var answer = prompt("Сталица Украины");
//var lowanswer = answer.toLowerCase();
//var kiev = "киев"
//if (kiev === lowanswer) console.log("Правильно");
//else console.log("Не правильно");

//У вас есть переменная var mySite = "http://ruseller.com";
//Вам надо написать функцию, которая примет эту переменную в качестве параметра, а в теле функции проверит с помощью метода indexOf, 
//встречается ли в этой переменной подстрока "http://".
//Если да, то вывести на экран сообщение, что в названии сайта присутствует указание протокола "http://", иначе - вывести, что не присутствует.

//mySite = "http://ruseller.com";
//function samfunc(){
//   var a = mySite.indexOf('http://');
//    if (a>-1) console.log ("присутствует");
//    else console.log("Не присутствует");
//}
//samfunc()

//У вас есть строка var myStr = "Хороший день.";
//Ваша задача поместить слово "день" из этой строки в переменную day с помощью метода slice.
//Вывести эту переменную на экран.
//var myStr = "Хороший день.";
//var day = myStr.slice(8,12)
//console.log(day)

//function makeArmy() {
//    let shooters = [];
//  
//    let i = 0;
//    while (i < 10) {
//        let j =i;
//      let shooter = function() { // функция shooter
//        alert( j );// должна выводить порядковый номер
//      };
//      shooters.push(shooter);
//      i++;
//    }
 //     return shooters;
//  }
 //   let army = makeArmy();
//    army[0](); // у 0-го стрелка будет номер 10
//  army[5](); // и у 5-го стрелка тоже будет номер 10
  // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

//function REZ (){
//  let result = [];
//    for (let i = 0; i < 5; i++) {
 //       var res = function(){
 //           alert(i)
 //       };
 //       result.push(res);
 //   }
 //       return result;  
 //   }                  
 //     var army =  REZ (); 
    
 //     army[2]();
 //     army[4]();

//const arr = [10, 12, 15, 21];
//for (var i = 0; i < arr.length; i++) {
//  setTimeout(function(i_con) {
//    return function() { console.log('Index: ' + i_con + ', element: ' + arr[i_con]);}
//  }(i), 500);
//};

//for (var j = 0; j < 3; j++) {
 // setTimeout(function() { alert(j); }, 1000 + j);
//}

//for (var i = 0; i < 3; i++) {
//  setTimeout(function(i_local) {
//  return function() { alert(i_local); } 
//  }(i), 1000 + i);
//}


//function createBase(baseNumber){
 // return function(N){
//    return baseNumber + N;
//  }
//}
//var addSix = createBase(6);
//console.log(addSix(10)); // returns 16
//console.log(addSix(21)); // returns 27


//const fib = [1,2,3,4,5];
//for (var i = 0; i<fib.length; i++){
//  setTimeout (function(){
//      console.log("lala" + i)
//  },1500)
//}
// 1-й вариант
//const fib = [1,2,3,4,5];
//for (var i = 0; i<fib.length; i++){
//  setTimeout (function(j){
//    return function(){console.log("lala" + j)}
//  }(i),1500)
//}
// 2-й вариант
//const fib = [1,2,3,4,5];
//for (var i = 0; i<fib.length; i++){
//  (function(j){setTimeout (function(){
//      console.log("lala" + j)
//  },1500)})(i)
//}

//let result = []
//for (var i=0; i<5; i++){
//  result.push(function(){
//    console.log(i)
//  })
//}
//result[2]()
//result[2]()
//1-е решение
//let result = []
//for (var i=0; i<5; i++){
//  (function(j){
//    result.push(function(){
//      console.log(j)
//    })
//  })(i)
//}
//result[2]()
//result[4]()



//Задача:
//напиши функцию, которая принимает 1 параметр.
//при первом вызове, она его запоминает, при втором,- - суммирует переданый параметр с тем, что передали первый раз и тд
//и всё это с замыканиями
//например
//sum(3) = 3
//sum(5) = 8
//sum(228) = 236

//var sum = sumfunc(0) 
//function sumfunc (n){
//  return function (numb){
//    return n +numb;
//  }
//}
//console.log(sum(3))
//console.log(sum(5))
//console.log(sum(228))

//function createBase(baseNumber){
 // return function(N){
//    return baseNumber + N;
//  }
//}
//var addSix = createBase(6);
//console.log(addSix(10)); // returns 16
//console.log(addSix(21)); // returns 27
/*

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  
  const COLUMN = 3;
  const ROW = 3;
  
  let board = [];
  const SPACE_SIZE = 150;
  
  function drawBoard(){
    let id = 0;
    for(let i = 0; i < ROW; i++){
      board[i] = [];
      for(let j = 0; j < COLUMN; j++){
        board[i][j] = id;
        ctx.strokeStyle = "#000";
        ctx.strokeRect(j * SPACE_SIZE, i * SPACE_SIZE, SPACE_SIZE, SPACE_SIZE);
        id++;   
      }
    }
  }
  drawBoard();
  canvas.addEventListener("click", function(event) {
  let X = event.clientX ;
  let Y = event.clientY ;
  console.log(X,Y)
  });

  const COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  let i = Math.floor(1.9);
  console.log(COMBOS.length)

*/


//var club_6 = 6;var heart_6 = 6;var diamond_6 = 6;var spade_6 = 6;var club_7 = 7;var heart_7 = 7;var diamond_7 = 7;var spade_7 = 7;var club_8 = 8;var heart_8 = 8;
//var diamond_8 = 8;var spade_8 = 8;var club_9 = 9;var heart_9 = 9;var diamond_9 = 9;var spade_9 = 9;var club_10 = 10;var heart_10 = 10;var diamond_10 = 10;
//var spade_10 = 10;var jack_club = 2;var jack_heart = 2;var jack_diamond = 2;var jack_spade = 2;var queen_club = 3;var queen_heart = 3;var queen_diamond = 3;
//var queen_spade = 3;var king_club = 4;var king_heart = 4;var king_diamond = 4;var king_spade = 4;var ace_club = 11;var ace_heart = 11;var ace_diamond = 11;var ace_spade = 11;




/*

var club_6, heart_6, diamond_6, spade_6,club_7,heart_7,diamond_7,spade_7,club_8,heart_8,diamond_8,spade_8,club_9,heart_9,diamond_9,
spade_9,club_10,heart_10,diamond_10,spade_10,jack_club,jack_heart,jack_diamond,jack_spade,queen_club,queen_heart,queen_diamond,
queen_spade,king_club,king_heart,king_diamond,king_spade,ace_club,ace_heart,ace_diamond,ace_spade;

club_6 = {number: 6};heart_6 = {number: 6};diamond_6 = {number: 6};spade_6 = {number: 6};club_7 = {number: 7};heart_7 = {number: 7};
diamond_7 = {number: 7};spade_7 = {number: 7};club_8 = {number: 8};heart_8 = {number: 8};diamond_8 = {number: 8};spade_8 = {number: 8};
club_9 = {number: 9};heart_9 = {number: 9};diamond_9 = {number: 9};spade_9 = {number: 9};club_10 = {number: 10};heart_10 = {number: 10};
diamond_10 = {number: 10};spade_10 = {number: 10};jack_club = {number: 2};jack_heart = {number: 2};jack_diamond = {number: 2};
jack_spade = {number: 2};queen_club = {number: 3};queen_heart = {number: 3};queen_diamond = {number: 3};queen_spade = {number: 3};
king_club = {number: 4};king_heart = {number: 4};king_diamond = {number: 4};king_spade = {number: 4};ace_club = {number: 11};
ace_heart = {number: 11};ace_diamond = {number: 11};ace_spade = {number: 11};

club_6 = 6; heart_6 = 6; diamond_6 = 6;spade_6 = 6;club_7 = 7;heart_7 = 7;diamond_7 = 7;spade_7 = 7;club_8 = 8;heart_8 = 8;
diamond_8 = 8;spade_8 = 8;club_9 = 9;heart_9 = 9;diamond_9 = 9;spade_9 = 9;club_10 = 10;heart_10 = 10;diamond_10 = 10;
spade_10 = 10;jack_club = 2;jack_heart = 2;jack_diamond = 2;jack_spade = 2;queen_club = 3;queen_heart = 3;queen_diamond = 3;
queen_spade = 3;king_club = 4;king_heart = 4;king_diamond = 4;king_spade = 4;ace_club = 11;ace_heart = 11;ace_diamond = 11;ace_spade = 11;

var Array = [club_6,club_7,club_8,club_9,club_10,jack_club,queen_club,king_club,ace_club,
heart_6,heart_7,heart_8,heart_9,heart_10,jack_heart,queen_heart,king_heart,ace_heart,
diamond_6,diamond_7,diamond_8,diamond_9,diamond_10,jack_diamond,queen_diamond,king_diamond,ace_diamond,
spade_6,spade_7,spade_8,spade_9,spade_10,jack_spade,queen_spade,king_spade,ace_spade];

var Array_rus = ["6 креста","7 креста","8 креста","9 креста","10 креста","Валет креста","Дама креста","Король креста","Туз креста",
"6 чирва","7 чирва","8 чирва","9 чирва","10 чирва","Валет чирва","Дама чирва","Король чирва","Туз чирва",
"6 бубна","7 бубна","8 бубна","9 бубна","10 бубна","Валет бубна","Дама бубна","Король бубна","Туз бубнаа",
"6 пика","7 пика","8 пика","9 пика","10 пика","Валет пика","Дама пика","Король пика","Туз пика",];
var n = 31;   //колличество карт в колоде
var p=0;      //число карт в массиве игрока
var i=0;      // число карт у игрока(в массиве игрока)
//var z = 0;    // название карт игрока(в массиве игрока)
var playerScore = 0;
var q = Math.floor((Math.random() * n));
n--;
var Player = [];
var Player_card = [];
Player[p]= Array[q];
Player_card[p]= Array_rus[q];
p++;
Array.splice(q,1);
Array_rus.splice(q,1);
q = Math.floor((Math.random() * n));
n--;
Player[p]= Array[q];
Player_card[p]= Array_rus[q];
p++;
Array.splice(q,1);
Array_rus.splice(q,1);
playerScore = Player[i] + Player[++i];

if (playerScore > 20){
  alert("Поздравляю, у Вас 21!!!!!" + " Вам выпало: " + Player_card[0] +" и "+ Player_card[1]);
  playerScore = 21
}
else {for (i1=0; i1<5;) { 
  if (i1==0 && playerScore < 21){var result = confirm("Вам выпало: " + Player_card[0] +" и "+ Player_card[1] + "! У Вас " + playerScore + " очков! Ещё?")
    if (result===false){alert("У Вас " + playerScore + " Очков");i1=5;}
  }
  else if (i1==1 && playerScore < 21){var result = confirm("Вам выпало: " + Player_card[2] +" У Вас были такие карты: "+ Player_card[0] +" и "+ Player_card[1] + "! У Вас " + playerScore + " очков!")
    if (result===false){alert("У Вас " + playerScore + " Очков");i1=5;}
  }
  else if (i1==2 && playerScore < 21) {var result = confirm("Вам выпало: " + Player_card[3] +" У Вас были такие карты: "+ Player_card[0] +", "+ Player_card[1] +" и "+ Player_card[2] + "! У Вас " + playerScore + " очков! Ещё?")
    if (result===false){alert("У Вас " + playerScore + " Очков");i1=5;}
  }
  else if (i1==3 && playerScore < 21){var result = confirm("Вам выпало: " + Player_card[4] +" У Вас были такие карты: "+ Player_card[0] + ", "+ Player_card[1] +", "+ Player_card[2] +" и "+ Player_card[3] + "! У Вас " + playerScore + " очков!")
    if (result===false){alert("У Вас " + playerScore + " Очков");i1=5;}
  }


  else if (playerScore == 21){
    if (i1==1){alert("Поздравляю, у Вас 21!!!!"+"Вам выпало: " + Player_card[2] +" У Вас были такие карты: "+ Player_card[0] +" и "+ Player_card[1]);
    i1=5;}
    else if (i1==2){alert("Поздравляю, у Вас 21!!!!"+"Вам выпало: " + Player_card[3] +" У Вас были такие карты: "+ Player_card[0] + ", "+ Player_card[1] +" и "+ Player_card[2])
    i1=5;}
    else if (i1==3){alert("Поздравляю, у Вас 21!!!!"+"Вам выпало: " + Player_card[4] +" У Вас были такие карты: "+ Player_card[0] + ", "+ Player_card[1] +", "+ Player_card[2] +" и "+ Player_card[3])
    i1=5;}
  }


  else if (playerScore > 21){
    if (i1==1){alert("Вам выпало: " + Player_card[2] +" У Вас были такие карты: "+ Player_card[0] +" и "+ Player_card[1] + "! У Вас " + playerScore + " очков!");
    i1=5;}
    else if (i1==2){alert("Вам выпало: " + Player_card[3] +" У Вас были такие карты: "+ Player_card[0] + ", "+ Player_card[1] +" и "+ Player_card[2] + "! У Вас " + playerScore + " очков!")
    i1=5;}
    else if (i1==3){alert("Вам выпало: " + Player_card[4] +" У Вас были такие карты: "+ Player_card[0] + ", "+ Player_card[1] +", "+ Player_card[2] +" и "+ Player_card[3] + "! У Вас " + playerScore + " очков!")
    i1=5;}
  }


if (i1<5){
q = Math.floor((Math.random() * n));
n--;
Player[p]= Array[q];
Player_card[p]= Array_rus[q];
p++;
Array.splice(q,1);
Array_rus.splice(q,1);
playerScore = playerScore + Player[++i]
}
i1++;
}
}


q = Math.floor((Math.random() * n));
n--;
var Comp = [];
var Comp_card = [];
var c=0;      //число карт в массиве компьютера
var j=0;      // число карт у компьютера(в массиве компьютера)
Comp[c]= Array[q];
Comp_card[c]= Array_rus[q];
c++;
Array.splice(q,1);
Array_rus.splice(q,1);
q = Math.floor((Math.random() * n));
n--;
Comp[c]= Array[q];
Comp_card[c]= Array_rus[q];
c++;
Array.splice(q,1);
Array_rus.splice(q,1);
compScore = Comp[j] + Comp[++j];

if (compScore > 20){
  alert("У Компьютера 21!!!! Ему выпали такие карты:"+Comp_card[0]+" и "+ Comp_card[1]);
  compScore = 21
}
else if (compScore === 17 || compScore === 18 || compScore === 19 || compScore === 20){
  alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+" и "+ Comp_card[1] )
}
else if(compScore < 17) { for (i1=0; i1<5;) { 
  if (compScore === 17 || compScore === 18 || compScore === 19 || compScore === 20){
    if (i1==1){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+" и "+ Comp_card[2]);
    i1=5;}
    else if (i1==2){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+" и "+ Comp_card[3])
    i1=5;}
    else if (i1==3){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+", "+ Comp_card[3]+" и "+ Comp_card[4])
    i1=5;}
  }

  else if (compScore == 21){
    if (i1==1){alert("У Компьютера 21!!!! Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+" и "+ Comp_card[2]);
    i1=5;}
    else if (i1==2){alert("У Компьютера 21!!!! Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+" и "+ Comp_card[3])
    i1=5;}
    else if (i1==3){alert("У Компьютера 21!!!! Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+", "+ Comp_card[3]+" и "+ Comp_card[4])
    i1=5;}
  }
  else if (compScore > 21){
    if (i1==1){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+" и "+ Comp_card[2]);
    i1=5;}
    else if (i1==2){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+" и "+ Comp_card[3])
    i1=5;}
    else if (i1==3){alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+", "+ Comp_card[3]+" и "+ Comp_card[4])
    i1=5;}
  }


  if (i1<5){
  q = Math.floor((Math.random() * n));
  n--;
  Comp[c]= Array[q];
  Comp_card[c]= Array_rus[q];
  c++;
  Array.splice(q,1);
  Array_rus.splice(q,1);
  compScore = compScore + Comp[++j]
  
  console.log(Comp_card)
  console.log(i1)
  }
  i1++;
}
}

if (compScore > playerScore && compScore < 22){
  alert("Победил компьютер у него " + compScore + " Очков, а у Вас " + playerScore +" Очков");
  }
  else if (compScore < playerScore && playerScore < 22){
  alert("Победили Вы, у Вас " + playerScore + " Очков, а у Компьютера " + compScore +" Очков");
  }
  else if (playerScore > 21 && compScore < 22){
  alert("Победил компьютер у него " + compScore + " Очков, а у Вас " + playerScore +" Очков");
  }
  else if (playerScore < 22 && compScore > 21){
  alert("Победили Вы, у Вас " + playerScore + " Очков, а у Компьютера " + compScore +" Очков");
  }
  else if (playerScore > 21 && compScore > 21){
  alert("Ничья, у Вас " + playerScore + " Очков, а у Компьютера " + compScore +" Очков");
  }
  else if (playerScore === 21 && compScore === 21){
  alert("Ничья, у Вас " + playerScore + " Очков, и у Компьютера " + compScore +" Очков");
  }
  else if (playerScore === compScore && compScore < 22 && playerScore < 22){
  alert("Ничья, у Вас " + playerScore + " Очков, и у Компьютера " + compScore +" Очков");
  }

if (compScore > 20){
    alert("У Компьютера 21!!!! Ему выпали такие карты:"+Comp_card[0]+" и "+ Comp_card[1])
    compScore = 21
}
else if (compScore === 17 || compScore === 18 || compScore === 19 || compScore === 20){
    alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+" и "+ Comp_card[1] )
}
else if (compScore < 17){
    q = Math.floor((Math.random() * n));
    n--;
    Comp[c]= Array[q];
    Comp_card[c]= Array_rus[q];
    c++;
    Array.splice(q,1);
    Array_rus.splice(q,1);
    compScore = compScore + Comp[++j]
        if (compScore > 21){
            alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+" и "+ Comp_card[2] );
        } 
        else if (compScore === 21){
            alert("У Компьютера 21!!!! Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+" и "+ Comp_card[2]); 
       }
       else if (compScore === 17 || compScore === 18 || compScore === 19 || compScore === 20){
        alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+" и "+ Comp_card[2] )
       }
        else if (compScore < 17){
                q = Math.floor((Math.random() * n));
                n--;
                Comp[c] = Array[q];
                Comp_card[c]= Array_rus[q];
                c++;
                Array.splice(q,1);
                Array_rus.splice(q,1);
                compScore = compScore + Comp[++j];
                if (compScore > 21){
                alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+" и "+ Comp_card[3]);
            }
            else if (compScore === 17 || compScore === 18 || compScore === 19 || compScore === 20){
                alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+" и "+ Comp_card[3])
            }
                 else if (compScore === 21){
                alert("У Компьютера 21!!!! Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+" и "+ Comp_card[3]);  
            }
                 else if (compScore < 17){
            q = Math.floor((Math.random() * n));
            n--;
            Comp[c] = Array[q];
            Comp_card[c]= Array_rus[q];
            c++;
            Array.splice(q,1);
            Array_rus.splice(q,1);
            compScore = compScore + Comp[++j];
                if (compScore > 21){
                alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+", "+ Comp_card[3]+" и "+ Comp_card[4]);
            } 
            else if (compScore === 17 || compScore === 18 || compScore === 19 || compScore === 20){
                alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+", "+ Comp_card[3]+" и "+ Comp_card[4] )
            }
                 else if (compScore === 21){
                alert("У Компьютера 21!!!! Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+", "+ Comp_card[3]+" и "+ Comp_card[4]);  
            }
            else if (compScore < 17){
            alert("У Компьютера " + compScore + " Очков. Ему выпали такие карты:" +Comp_card[0]+", "+ Comp_card[1]+", "+ Comp_card[2]+", "+ Comp_card[3]+" и "+ Comp_card[4]);
            }        
    };
  }
}  


if (compScore > playerScore && compScore < 22){
alert("Победил компьютер у него " + compScore + " Очков, а у Вас " + playerScore +" Очков");
}
else if (compScore < playerScore && playerScore < 22){
alert("Победили Вы, у Вас " + playerScore + " Очков, а у Компьютера " + compScore +" Очков");
}
else if (playerScore > 21 && compScore < 22){
alert("Победил компьютер у него " + compScore + " Очков, а у Вас " + playerScore +" Очков");
}
else if (playerScore < 22 && compScore > 21){
alert("Победили Вы, у Вас " + playerScore + " Очков, а у Компьютера " + compScore +" Очков");
}
else if (playerScore > 21 && compScore > 21){
alert("Ничья, у Вас " + playerScore + " Очков, а у Компьютера " + compScore +" Очков");
}
else if (playerScore === 21 && compScore === 21){
alert("Ничья, у Вас " + playerScore + " Очков, и у Компьютера " + compScore +" Очков");
}
else if (playerScore === compScore && compScore < 22 && playerScore < 22){
alert("Ничья, у Вас " + playerScore + " Очков, и у Компьютера " + compScore +" Очков");
}






if (playerScore === 22){
    alert("Поздравляю, у Вас 21!!!!!" + " Вам выпало: " + Player_card[0] +" и "+ Player_card[1]);
    playerScore = 21
}
else {
var result = confirm("Вам выпало: " + Player_card[0] +" и "+ Player_card[1] + "! У Вас " + playerScore + " очков! Ещё?")
if (result===false){
alert("У Вас " + playerScore + " Очков");
}
else if (playerScore > 20){
alert("Поздравляю, у Вас 21!!!!" + " Вам выпало: " + Player_card[0] +" и "+ Player_card[1])
}
else if (playerScore < 21){
    q = Math.floor((Math.random() * n));
    n--;
    Player[p]= Array[q];
    Player_card[p]= Array_rus[q];
    p++;
    Array.splice(q,1);
    Array_rus.splice(q,1);
    playerScore = playerScore + Player[++i]
        if (playerScore > 21){
            alert("Вам выпало: " + Player_card[2] +" У Вас были такие карты: "+ Player_card[0] +" и "+ Player_card[1] + "! У Вас " + playerScore + " очков!");
        } 
        else if (playerScore === 21){
            alert("Поздравляю, у Вас 21!!!!"+"Вам выпало: " + Player_card[2] +" У Вас были такие карты: "+ Player_card[0] +" и "+ Player_card[1]); 
       }
        else if (playerScore < 21){
            result = confirm("Вам выпало: " + Player_card[2] +" У Вас были такие карты: "+ Player_card[0] +" и "+ Player_card[1] + "! У Вас " + playerScore + " очков! Ещё?")
            if (result===false){
            alert("У Вас " + playerScore + " Очков" );
            }
            else {
                q = Math.floor((Math.random() * n));
                n--;
                Player[p]= Array[q];
                Player_card[p]= Array_rus[q];
                p++;
                Array.splice(q,1);
                Array_rus.splice(q,1);
                playerScore = playerScore + Player[++i];
                if (playerScore > 21){
                alert("Вам выпало: " + Player_card[3] +" У Вас были такие карты: "+ Player_card[0] + ", "+ Player_card[1] +" и "+ Player_card[2] + "! У Вас " + playerScore + " очков!");
            }
                 else if (playerScore === 21){
            alert("Поздравляю, у Вас 21!!!!"+"Вам выпало: " + Player_card[3] +" У Вас были такие карты: "+ Player_card[0] + ", "+ Player_card[1] +" и "+ Player_card[2]); 
        }
                 else if (playerScore < 21){
            result = confirm("Вам выпало: " + Player_card[3] +" У Вас были такие карты: "+ Player_card[0] +", "+ Player_card[1] +" и "+ Player_card[2] + "! У Вас " + playerScore + " очков! Ещё?")
            if (result===false){
                alert("У Вас " + playerScore + " Очков" );
                }
                else {
            q = Math.floor((Math.random() * n));
            n--;
            Player[p]= Array[q];
            Player_card[p]= Array_rus[q];
            p++;
            Array.splice(q,1);
            Array_rus.splice(q,1);
            playerScore = playerScore + Player[++i];
                if (playerScore > 21){
                alert("Вам выпало: " + Player_card[4] +" У Вас были такие карты: "+ Player_card[0] + ", "+ Player_card[1] +", "+ Player_card[2] +" и "+ Player_card[3] + "! У Вас " + playerScore + " очков!");
                } 
                else if (result===false){
                alert("У Вас " + playerScore + " Очков" );
                }
                else if (playerScore === 21){
                alert("Поздравляю, у Вас 21!!!!"+"Вам выпало: " + Player_card[4] +" У Вас были такие карты: "+ Player_card[0] + ", "+ Player_card[1] +", "+ Player_card[2] +" и "+ Player_card[3]);
             }
            }
        };
    };
  }
}  
}

q = Math.floor((Math.random() * n));
n--;
var Comp = [];
var Comp_card = [];
var c=0;      //число карт в массиве компьютера
var j=0;      // число карт у компьютера(в массиве компьютера)
Comp[c]= Array[q];
Comp_card[c]= Array_rus[q];
c++;
Array.splice(q,1);
Array_rus.splice(q,1);
q = Math.floor((Math.random() * n));
n--;
Comp[c]= Array[q];
Comp_card[c]= Array_rus[q];
c++;
Array.splice(q,1);
Array_rus.splice(q,1);
compScore = Comp[j] + Comp[++j];
*/
/*
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { // функция shooter
      alert( j ); // должна выводить порядковый номер
      
    };

    shooters.push(shooter);
    i++;
  }
  
  return shooters;
}

let army = makeArmy();
 
army[0](); // у 0-го стрелка будет номер 10
//army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...


function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { // функция shooter
      alert( j ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...  function () { alert(i); },*/


//const fib = [1,2,3,4,5];
//for (var i = 0; i<fib.length;i++){
//  setTimeout (function(){
//    
//      console.log("lala" + i)
// },500)}

//const fib = [1,2,3,4,5];
//for (var i = 0; i<fib.length;i++){
//  (function(j){setTimeout (function(){    
//    console.log("lala" + j)
//},500)})(i)}


//var arr = [1,2];
//var brr = arr;
//brr [0] = 42;
//console.log(arr)

//var arr1 = [1,2];
//var brr1 = arr1;
//brr1  = [42, 43];
//console.log(arr1)

//for (var i = 0; i<10; i++){
  //let j=i;
  //setTimeout(function(){
  //    console.log(j);
  //}, i*1000);
//}
/*
function Person (firstName, lastName, born){
  this.firstName = firstName;
  this.lastName = lastName;
  this.born = born;
}

Person.prototype.age = function(){
  var now = new Date();
  return now.getFullYear() - this.born;
}
var iam = new Person('Yura', 'Fedorenko',1990);
console.log(iam.age());
Нужно написать тело ифа как можно короче, чтоб в итоге массив brr был такой [1,2,3]




n=1
function isNaN(n) {
  n = +n; // ну или как вы там любите приводить что-то к числу

  return n !== n;
};
console.log( n); // true
console.log( isNaN()); // true


console.log(isNaN("37,5")); 

Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.

var obj = {
  a: function(){
   console.log(this.prop);
  },
  prop: 1
 };
  
 obj.a.prop = 2;
 obj.a();
 var fn = obj.a;
 fn();

 

 function f() {
   
}


console.log( f() == 3 ); // true
console.log( f()() == 6 ); // true
console.log( f()()() == 9 ); // true
*/
var obj = {
  a: 5,
  b: {
      c: 10
  }
};

obj.__proto__ = {
  a: 10,
  b: {
      c: 20
  }
};

delete obj.a;
console.log(obj.a);

delete obj.a;
console.log(obj.a);

delete obj.b;
console.log(obj.b.c);

delete obj.b.c;
console.log(obj.b.c);


