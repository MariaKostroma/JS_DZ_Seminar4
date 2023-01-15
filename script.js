// const arr = [1,2,3];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// for (let i = 0; i < arr.length; i++) {
//     console.log (arr[i]);  
// }


// const array =[1,2,3,4,5];
// console.log(array.length);


// const arr1=['a','b','c'];
// const lastElement = arr1.pop();
// const firstElement = arr1.shift();
// const secondElement = arr1.pop();
// arr1.push(1);
// arr1.push(-2);
// arr1.push(-3);
// console.log(arr1);

// for (let i = 0; i < arr1.length; i++) {
//     arr1[i] = i+1;
//   console.log(arr1);  
// }

//  for (let i = 0; i < arr.length; i++) {
//      arr[i]++;
//      console.log(arr);
//  }

// const sumArray = [1,2,3];
// ++sumArray[0];
// ++sumArray[1];
// ++sumArray[2];
// console.log(sumArray);

// arr.push(4,5);
// console.log(arr);

// const lastElement = array.pop();
// const firstElement = array.shift();
// console.log(array,array.length);
// console.log(array.slice(1,3));


// for (let i = 11; i < 34; i++) {
//     console.log(i);
// }


// for (let i = 1; i < 100; i++) {
//     if(i % 2 == 1)
//     console.log(i);
// }

// for (let i = 100; i > -1; i--) {
//     console.log(i);
// }

// 

// function Multiplication(x) {
//     let k = 0;
//     for (let i = 0; x <= 1000; i++) {
//         x*=3;
//         k++;
//     }
//     console.log(k,x);
// }
// let num = Number(prompt("Введите число"));
// Multiplication(num);

// const mass = [4,3,1,2,5];
// mass.forEach((variable, index, mass) => mass[index]++);
// console.log(mass);

// const arr =[2,5,9,15,1,4];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i]<10){
//     console.log(arr[i]);
// }
// }

// let sum=0;
// for (let i = 2; i <= 100; i+=2) {
//     sum+= i;
// }
// console.log(sum);

// const array = [2,5,9,3,1,4];
// let sum1=0;
// for (let i = 0; i < array.length; i++) {
//     sum1+= array[i];   
// }
// console.log(sum1);

// const arr1 = [];
// for (let i = 1; i <= 9; i++) {
//     arr1.push(i);
// }
// console.log('-'+arr1.join('-')+'-');

// const mass = [2,5,9,0,3,1,4];
// for (let i = 0; i < mass.length; i++) {
//     if (mass[i] === 0) {
//         break;
//     }
//     else {
//         console.log(mass[i]);
//     }
// }

// 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число


for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0 ) {
        console.log(`${i} - четное число`);
    }
    else {
        console.log(`${i} - нечетное число`);
    } 
}

// 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]

// Сделайте из этого массива следующий [1, 2, 3, 6, 7]


const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3,2);
console.log(arr);

// 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3


// const GetRandomNum = (min, max) => {
//     return  Math.floor(Math.random() * (max - min) + min);
// }
// console.log(GetRandomNum(0, 10));

const GenerateArray = (length, max) => (
    [...new Array(length)]
    .map(() => Math.round(Math.random() * max))
);
const newArray = GenerateArray(5, 9);
console.log(newArray);

add = function (newArray) {
    return newArray.reduce ((a,b) => a + b, 0);
};

const sum = add(newArray);
console.log(sum);

const minValue = Math.min(...newArray);
console.log(minValue);

console.log(newArray.indexOf(3));
newArray.includes(3);

// Необязательное задание.
// Необходимо вывести горку в консоль (используя цикл for), как показано на
// рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx
let x = 'x';
for (let i = 19; i >= 0; i--) {
    console.log(x);
    x = x + 'xx';
}