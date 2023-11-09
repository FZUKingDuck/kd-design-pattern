var PerformanceS = function(){};
PerformanceS.prototype.calculate = function(salary) {
  return salary * 0.5;
}

var PerformanceA = function(){};
PerformanceA.prototype.calculate = function(salary){
  return salary * 0.4;
}

var PerformanceB = function(){};
PerformanceB.prototype.calculate = function(salary){
  return salary * 0.3;
}

var Bonus = function(){
  this.salary = null; // 工资
  this.strategy = null; // 对应员工等级的策略对象
}
Bonus.prototype.setSalary = function(salary) {
  this.salary = salary;
}
Bonus.prototype.setStrategy = function(strategy){
  this.strategy = strategy;
}
Bonus.prototype.getBonus = function() {
  return this.strategy.calculate(this.salary)
}

var personA = new Bonus();
personA.setSalary(2000)
personA.setStrategy(new PerformanceA())
console.log(personA.getBonus())