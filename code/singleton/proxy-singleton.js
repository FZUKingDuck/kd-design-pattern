var PiggyBank = function(){
  this.money = 0;
}

PiggyBank.prototype.getMoney = function() {
  return this.money;
}

PiggyBank.prototype.saveMoney = function(money) {
  this.money += money;
}

var ProxySinglePiggyBank = (function(){
  var instance;
  return function(){
    if(!instance){
      instance = new PiggyBank();
    }
    return instance;
  }
})();

const aPiggyBank = new ProxySinglePiggyBank();

const bPiggyBank = new ProxySinglePiggyBank();
console.log(aPiggyBank.getMoney()); // 0
aPiggyBank.saveMoney(10); // 存入10元
console.log(aPiggyBank.getMoney()); // 10
console.log(bPiggyBank.getMoney()); // 10