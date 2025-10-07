// skapa funktionerna som anropas i myCalculator så att de funkar så som koden och alla "cases" antyder

export function myCalculator(operator, num1, num2) {
  switch (operator) {
    case "+":
    function myAddFunction(num1, num2) {
      let sum = num1 + num2;
      return sum;
    }
    myAddFunction(num1, num2);
    case "-":
    function mySubtractFunction(num1, num2) {
      let sum = num1 - num2;
      return sum;
    }
    mySubtractFunction(num1, num2);
    case "*":
    function myMultiplyFunction(num1, num2) {
      let sum = num1 * num2;
      return sum;
    }
    myMultiplyFunction(num1, num2);
    case "/":
    function myDivisionFunction(num1, num2) {
      let sum = num1 / num2;
      return sum;
    }
    myDivisionFunction(num1, num2);
    default:
      return "Error operator not found!";
  }
}