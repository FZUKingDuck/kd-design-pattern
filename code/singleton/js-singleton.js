var SingleNamespcae = {
	a: function() {
		return 1;
	},
	b: function() {
		return 2;
	}
}

var User = (function(){
	var __name = 'a';
	var __age = 18;
	
	return {
		getUserInfo: function() {
			return __name + __age;
		}
	}
})();

var getLazySingle = function(fn){
  var res;
  return function()  {
    return res || (res = fn.apply(this, arguments))
  };
}

var A = function(name) {
  this.name = name
  return this;
}
var B = function(age){
  this.age = age
}

var SingleA = getLazySingle(A)
var a = new SingleA("张三");
var b = new SingleA("李四");
console.log(a.name , b.name)

var SingleB = getLazySingle(B);
var c = new SingleB(10);
console.log(c);