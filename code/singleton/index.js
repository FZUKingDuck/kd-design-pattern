
/**
 * 标准的单例
 */
var Singleton = function(name){
  this.name = name;
  this.instance = null;// 这就是对应的实例标志位
}
Singleton.prototype.getName = function() {
  return this.name;
}

Singleton.getInstance = function(name){
  if( !this.instance){
    this.instance = new Singleton(name);
  }
  return this.instance;
}

const a = Singleton.getInstance("张三");
const b = Singleton.getInstance("李四");

alert(a === b);
