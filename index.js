// Выбрать любую реализованную функцию из тренажера JavaScript, раздел «Функции»
//    добавить ее в репозиторий;
//    продумать тест-кейсы (успешное/неуспешное выполнение функции);
//    продумать корнер-кейсы; 
//    написать unit-тесты (минимум 3).


// Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.

function getPercents(percent, number) {
  if (typeof(percent) !== "number" || typeof(number) !== "number") {
    throw 'incorrect data';
  }
  if (percent < 0) {
    throw 'percent cannot be less than 0'
  }

  return (number * percent) / 100
}

module.exports = { getPercents };