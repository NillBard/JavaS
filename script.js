'use strict';
let money = prompt("Сколько вы зарабатываете?", ""), 
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: false
}
let ask1=prompt("Введите обязательную статью расходов в этом месяце", ""),
    ask2=prompt("Во сколько обойдется?",""),
    ask3=prompt("Введите обязательную статью расходов в этом месяце", ""),
    ask4=prompt("Во сколько обойдется?","");
appData.expenses.ask1=ask2;
appData.expenses.ask3=ask4;
alert(appData.budget/30);


