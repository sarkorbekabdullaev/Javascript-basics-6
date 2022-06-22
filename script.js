//   && - va
//   || - yoki
//   !isNaN

var a = prompt('raqam kiriting1');
var b = prompt('raqam kiriting2');
a = Number(a);
b = Number(b);

if (a > b && !isNaN(a) && !isNaN(b)) {
    console.log(a + ' ko`p ' + b + ' dan');
} else if (a < b && !isNaN(a) && !isNaN(b)) {
    console.log(a + ' kam ' + b + ' dan');
} else if (a == b && isNaN(a) && !isNaN(b)) {
    console.log(a + ' = ' + b + 'ga.');
} else {
    if (!isNaN(a)) {
        console.log('ikkinchi kiritilgan element so`z');
    } else if (!isNaN(b)) {
        console.log('birinchi kiritilgan element so`z');
    } else {
        console.log('xato');
    }
}

var parol = prompt('parolingizni kiriting');
if (parol == 'web' || parol == 'Web' || parol == 'WEB' || parol == 123) {
    alert('sayt siz uchun ochiq');
} else {
    alert('xato');
}