
let money, time;
function start() {
      money = +prompt('Сколько вы зарабатываете?', '');
      time = prompt('Введите дату в формате YYYY-MM-DD', '');
  while (isNaN(money) || money == '' || money == null) {
    let money = +prompt('Сколько вы зарабатываете?', '');
  }
}
start();
  appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};


function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let ask1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
        ask2 = prompt('Во сколько обойдется?', '');

    if ((typeof (ask1) === 'string') && (typeof (ask1)) != null && (typeof (ask2)) != null
            && ask1 !== '' && ask2 !== '' && ask1.length <= 50) {
      console.log('Done');
      appData.expenses.ask1 = ask2;
    } else i--;
  }
};


function checkSaving() {
  if (appData.savings == true) {
    const save = +prompt('Какова сумма накоплений?', '');
    const percent = +prompt('Под какой процент?', '');
    appData.monthIncome = save / 100 / 12 * percent;
    alert("Доход с накоплений в месяц:" + appData.monthIncome);
  }
};
function detectDayBudget(){
  appData.moneyPerDate = appData.budget / 30;
  alert(`Ежедневный бюджет${appData.moneyPerDate}`);
};
function detectLevl(){
  if (appData.moneyPerDay < 100) {
    console.log('Это минимальный уровень достатка!');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Это средний уровень достатка!');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Это высокий уровень достатка!');
  } else {
    console.log('Произошла ошибка');
  }
};
let i=1;
function chooseOptExpenses(){
while (i<3){
  while (isNaN(askOP) || askOP === '' || askOP == null){
    let askOP = +prompt("Статья необязательных расходов?", "");
  }
    appData.optionalExpenses.i=askOP;
    i++;     
    }   
  }  


chooseExpenses();
checkSaving();
detectDayBudget();
detectLevl();
chooseOptExpenses();
//  let i =0;
// while (i<2){
//     let ask1=prompt("Введите обязательную статью расходов в этом месяце", ""),
//     ask2=prompt("Во сколько обойдется?","");

//     if((typeof(ask1) === 'string') && (typeof(ask1)) != null && (typeof(ask2)) != null
//     && ask1 != '' && ask2 != '' && ask1.length <=50){
//         console.log("Done");
//         appData.expenses.ask1=ask2;
//     } else i--;
//     i++;
// }; 

// /let i = 0;
// do {
//     let ask1=prompt("Введите обязательную статью расходов в этом месяце", ""),
//     ask2=prompt("Во сколько обойдется?","");

//     if((typeof(ask1) === 'string') && (typeof(ask1)) != null && (typeof(ask2)) != null
//     && ask1 != '' && ask2 != '' && ask1.length <=50){
//         console.log("Done");
//         appData.expenses.ask1=ask2;
//     } else i--;
//     i++;

// }
// while (i<2); 
