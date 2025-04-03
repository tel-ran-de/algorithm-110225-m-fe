// Задача: Найти элемент в массиве целых чисел.

// Алгоритм:
//     Пройти по массиву с начала до конца, сравнивая каждый элемент с искомым.
//     Если элемент найден, вернуть его индекс.
//     Если элемент не найден, вернуть -1.

// Решение

// O(n)
function linear_search(array, target_number) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === target_number) return index;
    }
    return -1;
}
console.log(linear_search([2, 3, 5], 5));




