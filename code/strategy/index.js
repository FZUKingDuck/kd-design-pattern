/**
 * 计算不同员工的奖金
 * @param {String} level 级别
 * @param {Number} salary 工资 
 */
const fc = (level ,salary) => {
  
  if(level === 'C'){
    console.log("bonus: ", 0.2 * salary );
  } 
  if(level === 'B'){
    console.log("bonus: ", 0.3 * salary );
  }
  if(level === 'A'){
    console.log("bonus: ", 0.4 * salary );
  }
  if(level === 'S') {
    console.log("bonus: ", 0.5 * salary );
  }

}

function calculateS (salary) {
  console.log("bonus: ", 0.5 * salary );
}

function calculateA (salary) {
  console.log("bonus: ", 0.4 * salary );
}
function calculateB (salary) {
  console.log("bonus: ", 0.3 * salary );
}
function calculateC (salary) {
  console.log("bonus: ", 0.2 * salary );
}

const fc2 = (level, salary) => {
  if(level === 'S'){
    calculateS(salary);
  }
  if(level === 'A'){
    calculateA(salary);
  }
  if(level === 'B'){
    calculateB(salary);
  }
  if(level === 'C'){
    calculateC(salary);
  }
}