// Задача: Дана строка. Проверить, является ли она палиндромом (читается одинаково слева направо и справа налево).

// Алгоритм проверки, является ли строка палиндромом:
//
// Начало.
//     Получить строку.
// Создать перевернутую копию строки.
// Сравнить исходную строку с перевернутой копией.
// Если строки равны, вывести "Строка - палиндром".
// Иначе, вывести "Строка - не палиндром".
// Конец.

let isPalindrome = 'ollo';
let reverse = '';

for (let i = isPalindrome.length - 1; i >= 0; i--) {
    reverse = reverse + isPalindrome[i]
    console.log(reverse);
}

if (isPalindrome === reverse) {
    console.log('palindrome');

}
else {
    console.log('not a palindrome');

}
