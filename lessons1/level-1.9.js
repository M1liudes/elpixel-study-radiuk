/*
Задание #1
Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на "http://"".
*/

let mass1 = ['123', '123http://', 'http://123456', '12http://34', 'htp://']
for(let i = 0; i < mass1.length; i += 1) {
    if (mass1[i].startsWith("http://")) {
        continue;
    } else {
        mass1.splice(i, 1);
        i -= 1;
    }
}
console.log(mass1);

/*
Задание #2
Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на ".html".
*/

let mass2 = ['123', '123.html', '.html123456', '12.html34', 'html']
for(let i = 0; i < mass2.length; i += 1) {
    if (mass2[i].endsWith(".html")) {
        continue;
    } else {
        mass2.splice(i, 1);
        i -= 1;
    }
}
console.log(mass2);

/*
Задание #3
Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
*/

let mass3 = [1, 2, 3, 4, 5];
for(let i = 0; i < mass3.length; i += 1) {
    mass3[i] *= 1.1;
}
console.log(mass3);