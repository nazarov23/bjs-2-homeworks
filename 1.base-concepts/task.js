"use strict";

// Задача 1: Решение квадратного уравнения
function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  
  if (discriminant < 0) {
    return [];
  } 
  
  if (discriminant === 0) {
    return [-b / (2 * a)];
  }
  
  const sqrtD = Math.sqrt(discriminant);
  const root1 = (-b + sqrtD) / (2 * a);
  const root2 = (-b - sqrtD) / (2 * a);
  
  // Возвращаем корни в правильном порядке (от большего к меньшему)
  return root1 > root2 ? [root1, root2] : [root2, root1];
}

// Задача 2: Расчет ипотеки
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразуем все в числа
  const percentNum = parseFloat(percent);
  const contributionNum = parseFloat(contribution);
  const amountNum = parseFloat(amount);
  const countMonthsNum = parseFloat(countMonths);
  
  // Проверка на корректность ввода
  if (isNaN(percentNum) || isNaN(contributionNum) || 
      isNaN(amountNum) || isNaN(countMonthsNum)) {
    return false;
  }
  
  // Месячная процентная ставка
  const monthlyPercent = percentNum / 100 / 12;
  
  // Тело кредита
  const loanBody = amountNum - contributionNum;
  
  // Если кредит не нужен (уже внесена вся сумма)
  if (loanBody <= 0) {
    return 0;
  }
  
  // Ежемесячный платеж
  const monthlyPayment = loanBody * 
    (monthlyPercent + 
     (monthlyPercent / (((1 + monthlyPercent) ** countMonthsNum) - 1)));
  
  // Общая сумма к выплате
  const totalPayment = monthlyPayment * countMonthsNum;
  
  // Округление до двух знаков
  return Math.round(totalPayment * 100) / 100;
}