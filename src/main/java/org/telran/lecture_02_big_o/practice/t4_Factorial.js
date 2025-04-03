// Задача: Вычислить факториал заданного числа.

// Алгоритм:
// Создать переменную для хранения результата и инициализировать ее единицей.
//     Умножить результат на все числа от 1 до заданного числа.
//     Вернуть результат.

function factorial(number) {
    let fact = 1;
    for (let index = 2; index <= number; index++) {
        fact *= index;
    }
    return fact;
}

const number = 4;
console.log(factorial(number));

// Оценить сложность алгоритма
// O(n)
