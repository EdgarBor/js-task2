let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i <= numbers.length; i++) {

    if (i % 2 == 0)

        document.write(i);

}

document.write("<br>");

for (let i = 0; i <= numbers.length; i++) {

    if(i % 2 !== 0)

    document.write(i);

}