// ***Задача со звездочкой
const intersection = (...arrays) => {
  // создаем пустой массив для хранения уникальных значений
  const result = [];

  // итерируемся по первому массиву
  for (let i = 0; i < arrays[0].length; i++) {
    let isIncluded = true;
    const current = arrays[0][i];

    // проверяем, есть ли значение в остальных массивах
    for (let j = 1; j < arrays.length; j++) {
      if (!arrays[j].includes(current)) {
        isIncluded = false;
        break;
      }
    }

    // если значение есть в каждом массиве, добавляем его в результат
    if (isIncluded && !result.includes(current)) {
      result.push(current);
    }
  }

  return result;
};

const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ["a", "b"];
const arr4 = ["b", "c"];
const arr5 = ["b", "e", "c"];
const arr6 = ["b", "b", "e"];
const arr7 = ["b", "c", "e"];
const arr8 = ["b", "e", "c"];

console.log(intersection(arr1, arr2)); // [2]
console.log(intersection(arr3, arr4, arr5)); // ['b']
console.log(intersection(arr6, arr7, arr8)); // ['b', 'e']
