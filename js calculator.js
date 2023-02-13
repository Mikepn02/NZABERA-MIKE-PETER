class calculator {
    constructor(previousOperandTextElement, CurrentOperandaTextElement){
        this.previousOperandTextElement= spreviousOperandTextElement
        this.CurrentOperandTextElement = CurrentOperandaTextElement
        this.clear()
    }
    clear(){
       this.currentOperand = ''
       this.previousOperand = '' 
       this,operation = undefined    
    }
    delete(){

    }
    appendNumber(number){
       this.currentOperand = this.currentOperand.toSting() + numberButton.toSting()
    }
    chooseOperation(operation) {

    }
    compute(){

    }
    updateDisplay(){
          this.CurrentOperandTextElement.innerText  = this.currentOperand 
    }
}
const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const prevousOperandButton = document.querySelector('[data-previous-operand]')
const currentOperandButton = document.querySelector('[data-current-operand]')

const calculator = new calculator(previousOperandTextElement,currentperandTextElemet)

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
} )

app.get('/button', (req, res) => {
  const button = req.query.button;
  let result;

  switch (button) {
    case '0':
      result = '0';
      break;
    case '1':
      result = '1';
      break;
    case '2':
      result = '2';
      break;
    case '3':
      result = '3';
      break;
    case '4':
      result = '4';
      break;
    case '5':
      result = '5';
      break;
    case '6':
      result = '6';
      break;
    case '7':
      result = '7';
      break;
    case '8':
      result = '8';
      break;
    case '9':
      result = '9';
      break;
    case '+':
      result = '+';
      break;
    case '-':
      result = '-';
      break;
    case '*':
      result = '*';
      break;
    case '/':
      result = '/';
      break;
    case '.':
      result = '.';
      break;
    case 'DEL':
      result = 'DEL';
      break;
    default:
      result = 'Invalid button';
  }

  res.send(result);
});
