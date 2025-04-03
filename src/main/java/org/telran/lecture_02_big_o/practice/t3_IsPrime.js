// Задача: Проверить, является ли заданное число простым.

// Алгоритм:
// Проверить, делится ли число на 2. Если делится, то число не простое.
//     Пройти по всем нечетным числам от 3 до корня из числа.
//     Если число делится на какое-то из этих чисел, то оно не простое.
//     Если ни одно из чисел не является делителем, то число простое.

function isPrime(number) {
    if ((number % 2 === 0) && (number > 2)) return false;
    for (let index = 3; index < Math.sqrt(number); index += 2) {
        if (number % index === 0) return false;
    }
    return true;
}
// О(√n)
// Оценить сложность алгоритма
console.log(`is_prime(1) - ${isPrime(1)}`)
console.log(`is_prime(2) - ${isPrime(2)}`)
console.log(`is_prime(3) - ${isPrime(3)}`)
console.log(`is_prime(9) - ${isPrime(9)}`)
console.log(`is_prime(11) - ${isPrime(11)}`)
console.log(`is_prime(21) - ${isPrime(21)}`)
console.log(`is_prime(427) - ${isPrime(427)}`)
console.log(`is_prime(1031) - ${isPrime(1031)}`)
console.log(`is_prime(10009) - ${isPrime(10009)}`)
