let fruits = ["яблоко", "банан", "апельсин"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach(function(fruit) {
    console.log(fruit);
});


for (let fruit of fruits) {
    console.log(fruit);
}