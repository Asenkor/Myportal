"use strict"
// //ПРОВЕРКА НА ПУСТОТУ
// function isEmpty(vari) {
//   if (vari == null) {
//     alert("Вы отменили выполнение")
//   } else {
//     while (vari == "") {
//       alert("Вы ничего не ввели")
//       vari = prompt("Введите строку для вывода еще раз");
//       if (vari == null) {
//         alert("Вы отменили выполнение");
//         return;
//       }
//     }
//     return vari;
//   }
// }
  //ВЫВОД СТРОКИ ПОСИМВОЛЬНО С НАЗВАНИЕМ ПРОБЕЛА
  function getChar() {
    let str = prompt("Введите строку для вывода");
    // let vari = str;
    // isEmpty(vari);
    if (str == null) {
      alert("Вы отменили выполнение")
    } else {
      while (str == "") {
        alert("Вы ничего не ввели")
        str = prompt("Введите строку для вывода еще раз");
        if (str == null) {
          alert("Вы отменили выполнение");
          return;
        }
      }

    // str = vari;
    alert("Вывод строки из переменной посимвольно")
    // let str = prompt("Введите строку для вывода");
    for (let i = 0; i < str.length; i++) {
      if (str[i] == " ") {
        alert("Пробел")
      } else {
        alert(str[i]);
      }
    }
    alert("Строка завершена!");
  }
}
//ПОДСЧЕТ КОЛИЧЕСТВА МИНУТ И СЕКУНД В ЧАСЕ
function minInHour() {
  let hour = prompt("Сколько часов подсчитать?");
  if (hour == null) {
    alert("Вы отменили выполнение");
  } else {
    while (hour == "") {
      alert("Вы ничего не ввели");
      hour = prompt("введите количество часов еще раз");
      if (hour == null) {
        alert("Вы отменили выполнение");
        return;
      }
    }
    alert("Подсчет количества минут и секунд в часе");
    let min = hour * 60;
    let sec = min * 60;
    alert(`В ${hour} часах ${min} минут и ${sec} секунд`);
  }
}


//ПОДСЧЕТ ПРОИЗВЕДЕНИЯ ЦИФР ИЗ СТРОКИ
function productNumbers() {
  let num = prompt("Введите цифры, которые необходимо перемножить");
  if (num == null) {
    alert("Вы отменили выполнение");
  } else {
    while (num == "") {
      alert("Вы ничего не ввели");
      num = prompt("введите цифры еще раз");
      if (num == null) {
        alert("Вы отменили выполнение");
        return;
      }
    }
    alert("Подсчет произведения введенных цифр");
    let product = 1;
    for (let i = 0; i < num.length; i++) {
      product *= num[i];
    }
    alert(`Произведение введеных цифр равно ${product}`);
  }
}

//Функция для превращения свойств CSS в камелкейсовые (background-color => backgroundColor)
function camelize() {
  let str = prompt("get me");
  let strArr = str.split("-");
  for (let i = 1; i < strArr.length; i++) {
    let chars = strArr[i].split("");
    chars[0] = chars[0].toUpperCase();
    strArr[i] = chars.join("");
  }
  let strArrNew = strArr.join("");
  alert(strArrNew);
}

//НАЧАЛО ВЫПОЛНЕНИЯ СКРИПТА
// getChar();
// minInHour();
// productNumbers();
// window.camelize();
