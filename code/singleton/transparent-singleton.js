var PiggyBank = (function(){
  var instance;

  var Singleton = function() {
    if(instance){
      return instance;
    }
    this.money = 0;
    return instance = this;
  }
  
  Singleton.prototype.saveMoney = function(money){
    this.money += money;
  }

  Singleton.prototype.getMoney = function(){
    return this.money;
  }

  return Singleton;
})(); // 要立即执行该匿名函数,否则PiggyBank指向的就是该函数了，而非该函数返回的类

const aPiggyBank = new PiggyBank();

const bPiggyBank = new PiggyBank();
console.log(aPiggyBank.getMoney());
aPiggyBank.saveMoney(10);
console.log(aPiggyBank.getMoney());
console.log(bPiggyBank.getMoney());
