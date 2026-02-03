// Задача 1: getArrayParams
function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }
  
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  
  const avg = Number((sum / arr.length).toFixed(2));
  
  return { min, max, avg };
}

// Задача 2:

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  
  return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  
  return max - min;
}
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  
  return sumEvenElement - sumOddElement;
}
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  
  if (countEvenElement === 0) return 0;
  
  return sumEvenElement / countEvenElement;
}

// Задача 3:
function makeWork(arrOfArr, func) {
  if (arrOfArr.length === 0) return 0;
  
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  
  return maxWorkerResult;
}

console.log('=== Тесты для задачи 1 ===');
console.log(getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5)); // { min: 5, max: 5, avg: 5 }

console.log('\n=== Тесты для задачи 2 ===');
console.log('summElementsWorker():', summElementsWorker()); // 0
console.log('summElementsWorker(10, 10, 11, 20, 10):', summElementsWorker(10, 10, 11, 20, 10)); // 61

console.log('\ndifferenceMaxMinWorker():', differenceMaxMinWorker()); // 0
console.log('differenceMaxMinWorker(10, 10, 11, 20, 10):', differenceMaxMinWorker(10, 10, 11, 20, 10)); // 10

console.log('\ndifferenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17):', 
  differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 53
console.log('differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35):', 
  differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // -269

console.log('\naverageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9):', 
  averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 5
console.log('averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35):', 
  averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 38

console.log('\n=== Тесты для задачи 3 ===');
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

console.log('makeWork(arr, summElementsWorker):', makeWork(arr, summElementsWorker)); // 328
console.log('makeWork(arr, differenceMaxMinWorker):', makeWork(arr, differenceMaxMinWorker)); // 86
console.log('makeWork(arr, differenceEvenOddWorker):', makeWork(arr, differenceEvenOddWorker)); // 92
console.log('makeWork(arr, averageEvenElementsWorker):', makeWork(arr, averageEvenElementsWorker)); // 72