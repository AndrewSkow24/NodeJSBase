setInterval(function () {
  console.log("Прошла ещё одна секунда!");
}, 1000);

// Задача 1

setInterval(function () {
  const currentDate = new Date();

  console.log(
    currentDate.getHours() +
      ":" +
      currentDate.getMinutes() +
      ":" +
      currentDate.getSeconds()
  );
}, 1000);

// Задача 2

let myVar = 1;

setInterval(() => {
  myVar++;
  console.log("Новое значение переменной:", myVar);
}, 1000);
