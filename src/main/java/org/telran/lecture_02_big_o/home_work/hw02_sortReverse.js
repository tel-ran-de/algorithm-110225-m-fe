// В примерах /examples/BubbleSort дан алгоритм "сортировка пузырьком"
// Измените алгоритм сортировки так, чтобы сортировка шла в обратном порядке (от большего к меньшему)

// Оцените сложность алгоритма
// O(n^2)

function reverseBubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1 ; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // меняем arr[j] и arr[j+1] местами
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Отсортированный массив:", reverseBubbleSort(arr));
