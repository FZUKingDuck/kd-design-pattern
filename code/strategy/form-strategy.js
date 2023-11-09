/**
 * 最大长度校验
 * @param {*} value 需要检验的值 
 * @param {*} errorMessage 错误时提示信息
 * @param {*} maxLen 额外的信息
 * @returns 
 */
var maxLenCheck = function (value, errorMessage, maxLen) {
  if (value.length > maxLen) {
    return errorMessage;
  }
};

var notNullCheck = function (value, errorMessage) {
  if (!value) {
    return errorMessage;
  }
};
var minLenCheck = function (value, errorMessage, minLen) {
  if (value.length > minLen) {
    return errorMessage;
  }
};

/** 策略表 */
var strategy = {
  MaxLen: maxLenCheck,
  MinLen: minLenCheck,
  NotNull: notNullCheck,
};

// 校验对象，实际上就是我们的context类，负责对策略的选择和委托执行
const Validator = function () {
  this.cache = [];
};
/**
 * 添加使用的校验规则
 * @param {*} valueKey 校验值对应的表单字段 
 * @param {*} ruleName 使用的校验规则名
 * @param {*} errorMsg 错误的提示信息
 * @returns 
 */
Validator.prototype.addRule = function (valueKey, ruleName, errorMsg) {
  var ruleArgs = ruleName.split(":");
  var ruleKey = ruleArgs[0];
  ruleArgs.shift();
  var args = ruleArgs
  var checkFC = strategy[ruleKey];
  if (!checkFC || typeof checkFC !== "function") {
    console.error("未找到对应的检查方法")
    return;
  }
  this.cache.push({
    FC: checkFC,
    args,
    valueKey,
    errorMsg,
  });
};
/**
 * 执行表单值校验
 * @param {*} obj 表单值 
 * @returns 通过校验返回undefined，否则返回错误信息
 */
Validator.prototype.start = function (obj) {
  for (let checkItem of this.cache) {
    var errMsg = checkItem.FC.apply(this, [
      obj[checkItem.valueKey],
      checkItem.errorMsg,
      ...checkItem.args,
    ]);
    if (errMsg) {
      return errMsg;
    }
  }
};

/** 校验表单函数 */
var validateForm = (formData) => {
  var validator = new Validator();
  validator.addRule("name", "MaxLen:10", "姓名不可超过10个字");
  validator.addRule("password", "MinLen:6", "密码最少要6位");
  validator.addRule("address", "NotNull", "地址不可为空");
  validator.addRule("tel", "NotNull", "手机号不可为空");

  var errMsg = validator.start(formData);
  if (errMsg) {
    console.log("error message:", errMsg);
    return false;
  } else {
    return true;
  }
};

console.log(
  validateForm({
    name: "张三12345678910",
    password: "123456",
    address: "纽约市第三人民医院",
    tel: '13000000000',
  })
);

console.log(
  validateForm({
    name: "张三",
    password: "1234",
    address: "纽约市第三人民医院",
    tel: '13000000000',
  })
);


console.log(
  validateForm({
    name: "张三",
    password: "123456",
    address: "纽约市第三人民医院",
    tel: null,
  })
);
