// const mass1=[1,2,3,4,5];
// const mass2=['Allex', 'Maxim', 'Sofia', 'Julia', 'Nazar'];
// const mass3=['allex', 4,5,true,false];
// console.log(mass1);
// console.log(mass2);
// console.log(mass3);

// const mass = [1,2,3,4,5];
// console.log(mass[4]);

// ///////////////
// // НЕЗНАЮ///////////////
//
// // const massDiv = ['<div>text</div>','<div>2</div>','<div>3</div>','<div>4</div>','<div>5</div>','<div>6</div>','<div>7</div>','<div>8</div>','<div>9</div>','<div>10</div>']
// //
// // for (let i=0; i<massDiv.length; i++){
// //     document.write(massDiv[i])
// // }
//
// // const massDiv = ['<div>text</div>','<div>2</div>','<div>3</div>','<div>4</div>','<div>5</div>','<div>6</div>','<div>7</div>','<div>8</div>','<div>9</div>','<div>10</div>']
// //
// // for (let i=0; i<massDiv.length; i++){
// //     document.write(massDiv[i], i+'<br>','****')
// //
// // }
//
// // const massH = ['<h1>1</h1>','<h1>2</h1>','<h1>3</h1>','<h1>4</h1>','<h1>5</h1>','<h1>6</h1>','<h1>7</h1>','<h1>8</h1>','<h1>9</h1>','<h1>10</h1>','<h1>11</h1>','<h1>12</h1>','<h1>13</h1>','<h1>14</h1>','<h1>15</h1>','<h1>16</h1>','<h1>17</h1>','<h1>18</h1>','<h1>19</h1>','<h1>20</h1>']
// //
// // let i = 0;
// //
// // while (i<massH.length){
// //     document.write(massH[i]);
// //     document.write(i+'<br>');
// //     document.write('*************')
// //     i++;
// // }
//
//
// const mass =  [1,2,3,4,5,6,7,8,9,10]
// for (let i=0;i<mass.length;i++){
//     console.log(mass[i])
// }
//
// const mass = ['one', 'two','three','four','five','six','sever','eight','nine','ten'];
// for (let i=0;i<mass.length;i++){
//     console.log(mass[i]);
// }
//
// const mass = ['allex', 'asdsa','fsaf','safasf',123,455,234,123,true,false];
// for (let i=0;i<mass.length;i++){
//     console.log(mass[i]);
// }
//
// const mass = ['allex', 'asdsa','fsaf','safasf',123,455,234,123,true,false];
// for (let i=0;i<mass.length;i++){
//     if(typeof mass[i] === "boolean"){
//         console.log(mass[i])
//     }
// }
//
// const mass = ['allex', 'asdsa','fsaf','safasf',123,455,234,123,true,false];
// for (let i=0;i<mass.length;i++){
//     if(typeof mass[i] === "number"){
//         console.log(mass[i])
//     }
// }
//
// const mass = ['allex', 'asdsa','fsaf','safasf',123,455,234,123,true,false];
// for (let i=0;i<mass.length;i++){
//     if(typeof mass[i] === "string"){
//         console.log(mass[i])
//     }
// }
//
// const mass = ['','','','','','','','','','',];
// mass.splice(0, 0, 'mama');
// mass.splice(1, 1, 'dady');
// mass.splice(2, 2, 'allex');
// mass.splice(3, 3, 'amax');
// mass.splice(4, 4, 123);
// mass.splice(5, 5, 343);
// mass.splice(6, 6, 324);
// mass.splice(7, 7, 555);
// mass.splice(8, 8, true);
// mass.splice(9, 9, false);
//
// console.log(mass)
//
//
// for (let i=1;i<=10;i++){
//     console.log(i)
//     document.write(i)
// }
//
// for (let i=1;i<=100;i++){
//     console.log(i);
//     document.write(i);
// }
//
// for (let i=1;i<=100;i+=2){
//     console.log(i);
//     document.write(i);
// }
//
// for (let i=2;i<=101;i+=2){
//     console.log(i);
//     document.write(i);
// }
//
// for (let i=1;i<=100;i+=2){
//     console.log(i);
//     document.write(i);
// }
//
// /////CLOCK//////////ХВИЛНИ??????????????????????
// for (let i=1;i<=2;i++ ){
//     console.log(i + ' хвилиина')
// }

//
// /СЕКУНДИ///////?????????????????????
// for (let j=1;j<=2;j++) {
//     for (let i = 1; i < 60; i++) {
//         console.log(i + ' second');
//     }
//     if (i=59) {
//         console.log(j + ' minut')
//     }
// }
//
// ///CLOCK 2////////???????????????????????????????HOURS
//
//
// ////////////////////////////MINUTES////////////////////

// for (let h =1; h<=2;h++){
//     for (let m = 1;m<60;m++) {
//         for (let s=1;s<60;s++){
//             console.log(s)
//         }
//         if (s = 59){
//             console.log(m)
//         }
//     }
//     if (m=59){
//         console.log(h)
//     }
//
//
// }
// for (let h=1; h<=2;h++){
//     for (let m=1;m<60;m++){
//         for (let s = 1; s<60; s++){
//             console.log(s)
//         }
//         if (s === 59){
//             console.log(m+ ' min')
//         }
//     }
//     if (m === 59){
//         console.log(h + ' hour')
//     }
// }
// for (let m=1;m<21;m++) {
//     for (let s = 1; s < 60; s++) {
//         console.log(s)
//     }
//     if (s === 59) {
//         console.log(m + ' min')
//     }
// }

//
// // /////ДОДАТКОВО/////
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// const mass = ['a','b','c'];
// console.log(mass.join(''))
// const mass = ['a','b','c'];
// for (let i = 0; i < mass.length; i++) {
//     toString(mass[i])
//     console.log(mass[i])
//
// }


//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// const mass = ['a','b','c'];
// let i =0;
// while (i<mass.length){
//     document.write(mass[i])
//     i++;
// }

// //- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// const mass = ['a', 'b', 'c'];
//



///CLAASS/////
//- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// const mass = ['a', 'b', 'c']
// for (let i = 1;i<=3;i++){
//     mass.push(i)
// }
// console.log(mass)


//- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let mass = [1,2,3]
// mass.splice(0,1,3)
// mass.splice(2,3,1)
// console.log(mass)


//- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// const mass = [1,2,3];
// mass.push(4,5,6)
// console.log(mass)


//- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// const mass = [1,2,3];
// mass.unshift(4,5,6)
// console.log(mass)


//- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// const mass = ['js','css','jq'];
// let x= mass.shift('js')
// console.log(x)


//- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// const mass = ['js','css','jq'];
// let x= mass.pop('jq')
// console.log(x)


//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// const mass= [1,2,3,4,5]
// console.log(mass.slice(3))


//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// const mass= [1,2,3,4,5]
// console.log(mass.slice(0,2))


//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

// const mass= [1,2,3,4,5]
// mass.splice(1,1)
// mass.splice(1,1)
// console.log(mass)


//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// const mass = [1,2,3,4,5]
// mass.splice(3,0,'a','b')
// mass.splice(5,0,'c')
// console.log(mass)


//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// const mass =  [1,2,3,4,5]
// mass.splice(1,0,'a','b');
// mass.splice(6,0,'c')
// mass.splice(8,0,'e')
// console.log(mass)


//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// const mass = [1,2,3,4,5,6,7,8,9,10]
//
// for (let i=2;i<=10;i+=2){
//     console.log(i)
// }


//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
//
// const mass1=[1,2,3,4,5,6,7,8,9,10] ------------Не знаю чи такий варіант підходить для умови
// const mass2 = []
// mass2.push(mass1)
// console.log(mass2)
//

// const mass1 = [1,2,3,4,5,6,7,8,9,10]
// const mass2 = []
// for (let i = 1; i<=mass1.length;i++){
//     mass2.push(i)
// }
// console.log(mass2)

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
// const mass1 = [1,2,3,4,5,6,7,8,9,10];
// const mass2 = []
//
// for (let i=1;i<=mass1.length;i++){
//     mass1.slice(i);
//     mass2.push(i)
// }
// console.log(mass2)

//====================================================================//
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//1. перебрати його циклом while

// const mass =  [2,17,13,6,22,31,45,66,100,-18]
// let i = 0;
// while (i <mass.length){
//     console.log(mass[i])
//     i++;
// }

//2. перебрати його циклом for///
// const mass =  [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i<=mass.length;i++){
//     console.log(mass[i])
// }


//3. перебрати циклом while та вивести  числа тільки з непарним індексом//
//
// const mass =  [2,17,13,6,22,31,45,66,100,-18]
// let i = 0;
// while (i <mass.length){
//     i++;
//     if(mass[i]%2){
//         console.log(mass[i])
//     }
// }

//4. перебрати циклом for та вивести  числа тільки з непарним індексом

// const mass =  [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i<=mass.length;i++){
//     if (mass[i]%2){
//         console.log(mass[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// const mass =  [2,17,13,6,22,31,45,66,100,-18]
// let i = 0;
// while (i <mass.length){
//     i++;
//     if(mass[i]%2 === 0){
//         console.log(mass[i])
//     }
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// const mass =  [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i<=mass.length;i++){
//     if (mass[i]%2 === 0){
//         console.log(mass[i])
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// const mass =  [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i<mass.length;i++){
//     if (mass[i] % 3 === 0){
//         mass[i] = 'okten'
//     }
//     console.log(mass[i])
// }
// 8. вивести масив в зворотньому порядку.
// const mass =  [2,17,13,6,22,31,45,66,100,-18];
// console.log(mass.reverse())

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//9.1. перебрати його циклом while

// let mass =  [2,17,13,6,22,31,45,66,100,-18];
// mass = mass.reverse()
// let i = 0;
// while (i < mass.length){
//     console.log(mass[i])
//     i++;
// }

//9.2. перебрати його циклом for///

// let mass =  [2,17,13,6,22,31,45,66,100,-18];
// mass = mass.reverse()
// for (let i = 0; i<mass.length;i++){
//     console.log(mass[i])
// }


//9.3. перебрати циклом while та вивести  числа тільки з непарним індексом//
//
// let mass =  [2,17,13,6,22,31,45,66,100,-18]
// mass = mass.reverse();
// let i = 0;
// while (i <mass.length){
//     if(mass[i]%2){
//         console.log(mass[i])
//     }
//     i++;
// }

//9.4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let mass =  [2,17,13,6,22,31,45,66,100,-18];
// mass = mass.reverse();
// for (let i = 0; i<=mass.length;i++){
//     if (mass[i]%2){
//         console.log(mass[i])
//     }
// }

// 9.5. перебрати циклом while та вивести  числа тільки парні  значення

// let mass =  [2,17,13,6,22,31,45,66,100,-18];
// mass = mass.reverse();
// let i = 0;
// while (i <=mass.length){
//     if(mass[i]%2 === 0){
//         console.log(mass[i])
//     }
//     i++;
// }

// 9.6. перебрати циклом for та вивести  числа тільки парні  значення

// let mass =  [2,17,13,6,22,31,45,66,100,-18];
// mass = mass.reverse();
// for (let i = 0; i<=mass.length;i++){
//     if (mass[i]%2 === 0){
//         console.log(mass[i])
//     }
// }

// 9.7. замінити кожне число кратне 3 на слово "okten"
//
// let mass =  [2,17,13,6,22,31,45,66,100,-18];
// mass = mass.reverse();
// for (let i = 0; i<mass.length;i++){
//     if (mass[i] % 3 === 0){
//         mass[i] = 'okten'
//     }
//     console.log(mass[i])
// }

// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.

// let mass = [];
//
// for (i= 1; i <= 100 ; i++) {
//     if(i%2===0){
//         mass.push(i);
//     }
// }
// console.log(mass)


// - заповнити його 50 непарними числами за допомоги циклу.

// let mass = [];
//
// for (i= 1; i <= 100 ; i++) {
//     if(i%2){
//         mass.push(i);
//     }
// }
// console.log(mass)


// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

// let mass = [];
// let j;
// let i;
// for (j=1; j<=10;j++){
//      i = Math.floor(Math.random()*100)+1;
// }
// console.log(i)



// 2. вывести на консоль  каждый третий елемент
// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.
// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
//
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.




