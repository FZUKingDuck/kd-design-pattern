var strategy = {
  'S': function(salary) { return salary * 0.5;},
  'A': function(salary) { return salary * 0.4;},
  'B': function(salary) { return salary * 0.3;},
  'C': function(salary) { return salary * 0.2;}
}

var calculateBonus = function(level, salary){
  return strategy[level](salary);
}