// Задача: Проверить, является ли заданное число простым.

// Алгоритм:
// Проверить, делится ли число на 2. Если делится, то число не простое.
//     Пройти по всем нечетным числам от 3 до корня из числа.
//     Если число делится на какое-то из этих чисел, то оно не простое.
//     Если ни одно из чисел не является делителем, то число простое.

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= number ** 0.5; i += 2) {
    if (number % i === 0) return false;
  }

  return true;
}

// Оценить сложность алгоритма
//     Если я правильно понимаю, сложность алгоритма больше чем O(1) но меньше чем O(n) так как проверяем мы не весь ряд а только до √n
//     Таким образом, сложность алгоритма - O(√n)

console.log(`is_prime(1) - ${isPrime(1)}`)
console.log(`is_prime(2) - ${isPrime(2)}`)
console.log(`is_prime(3) - ${isPrime(3)}`)
console.log(`is_prime(9) - ${isPrime(9)}`)
console.log(`is_prime(11) - ${isPrime(11)}`)
console.log(`is_prime(21) - ${isPrime(21)}`)
console.log(`is_prime(427) - ${isPrime(427)}`)
console.log(`is_prime(1031) - ${isPrime(1031)}`)
console.log(`is_prime(10009) - ${isPrime(10009)}`)
