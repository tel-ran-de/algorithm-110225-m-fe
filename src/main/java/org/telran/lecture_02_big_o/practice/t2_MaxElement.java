package org.telran.lecture_02_big_o.practice;

// Задача: Найти наибольший элемент в массиве целых чисел.

// Алгоритм:
// Создать переменную для хранения текущего наибольшего элемента и инициализировать ее первым элементом массива.
//     Пройти по массиву с начала до конца, сравнивая каждый элемент с текущим наибольшим.
//     Если текущий элемент больше наибольшего, обновить значение наибольшего.
//     Вернуть наибольший элемент.

public class t2_MaxElement {
    public static void main(String[] args) {
        System.out.println("Наибольший элемент: " + maxElement(new int[]{3, 7, 2, 9, 5, 10, 6}));
        System.out.println("Наибольший элемент: " + maxElement(new int[]{13, 7, 2, 9, 5, 10, 6}));
        System.out.println("Наибольший элемент: " + maxElement(new int[]{-3, -7, -2, -9, -5, -10, -6}));
        System.out.println("Наибольший элемент: " + maxElement(new int[]{1}));
    }

    public static int maxElement(int[] numbers) {
        return 0;
    }
}

// Оценить сложность алгоритма