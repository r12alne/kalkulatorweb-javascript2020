
const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
  calculatorScreen.value = number;
}


const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  })
})

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
  if (currentNumber==='0')  {
    currentNumber = number;
  }  else {
    currentNumber += number;
  }
}
const operators = document.querySelectorAll('.operator');
operators.forEach((operator) =>{
  operator.addEventListener('click', (event) =>{
    inputOperator(event.target.value);
  })
})
const inputOperator = (operator) => {
  if(calculationOperator === '') {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = '';
}


const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', () => {
  calculate(); //menjalankan fungsi calculate
  updateScreen(currentNumber);

})

const calculate = () => {
  let result = '';
  switch(calculationOperator) {
    case "+":
        if(prevNumber.includes('.') || currentNumber.includes('.')) {
          result = (parseFloat(prevNumber) + parseFloat(currentNumber)).toFixed(2);
        } else {
          result = parseFloat(prevNumber) + parseFloat(currentNumber);
        }
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      if (parseFloat(prevNumber) % parseFloat(currentNumber) === 0) {
        result = parseFloat(prevNumber) / parseFloat(currentNumber);
      } else {
        result = (parseFloat(prevNumber) / parseFloat(currentNumber)).toFixed(2);
      }
      break;

    default:
      break;
  }
  currentNumber = result; // menampilkan hasil operasi di layar
  calculationOperator = ''; //membersihkan operator
}

const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', () => {
  clearAll();
  updateScreen(currentNumber);
})

const clearAll = () => {
  prevNumber = '';
  calculatorOperator = '';
  currentNumber = '0';
}

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
})

const inputDecimal = (dot) => {
  if(currentNumber.includes('.')) {
    return;
  }
  currentNumber += dot;
}

const percentage = document.querySelector('.percentage');
percentage.addEventListener('click', (event) => {
  inputPercentage(event.target.value);
  updateScreen(currentNumber);
})

const inputPercentage = () => {
  currentNumber /= 100;
}
