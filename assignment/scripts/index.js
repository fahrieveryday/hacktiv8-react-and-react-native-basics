// define the calculator operation
class Operation {
  _listOperation = [0];
  _result = 0;
  _dot = '.';

  pushArithmeticOperator(currentOperator) {
    const currentIndex = this._listOperation.length - 1;

    // currentOperator nust be string
    if (typeof currentOperator === 'number') {
      return false;
    }

    // jump the number and next should be new operator
    if (
      typeof this._listOperation[currentIndex] === 'number' ||
      this._listOperation[currentIndex]?.includes(this._dot)
    ) {
      return this._listOperation.push(currentOperator);
    }

    // replace current operator
    this._listOperation[currentIndex] = currentOperator;
  }

  pushNumberValue(currentNumberValue) {
    const currentIndex = this._listOperation.length - 1;

    // currentNumberValue must be number
    if (typeof currentNumberValue === 'string') {
      return false;
    }

    // jump the operator and next should be new number
    if (
      typeof this._listOperation[currentIndex] === 'string' &&
      !this._listOperation[currentIndex]?.includes(this._dot)
    ) {
      return this._listOperation.push(currentNumberValue);
    }

    // add new number side
    this._listOperation[currentIndex] = Number(
      `${this._listOperation[currentIndex]}${currentNumberValue}`
    );
  }

  pushDot() {
    const currentIndex = this._listOperation.length - 1;

    if (`${this._listOperation[currentIndex]}`.includes(this._dot)) {
      return false;
    }

    // add new number side
    this._listOperation[
      currentIndex
    ] = `${this._listOperation[currentIndex]}${this._dot}`;
  }

  popLastNumberValue() {
    this._listOperation.pop();
    if (this._listOperation.length === 0) {
      this.reset();
    }
  }

  reset() {
    this._listOperation = [0];
  }

  getListOperation() {
    return this._listOperation;
  }

  setResult() {
    try {
      const stringResult = eval(this._listOperation.join(''));
      return (this._result = Number(parseFloat(stringResult).toPrecision(12)));
    } catch (error) {
      console.log('error bos');
    }
  }

  getResult() {
    return this._result;
  }
}

// define variable from calculator operation class
const operation = new Operation();

// define calculator element
const calculatorElement = document.querySelector('.calculator');
const listOperationElement = calculatorElement.querySelector('#list-operation');
const operationResultElement =
  calculatorElement.querySelector('#operation-result');

// add event listener to calculator operation
calculatorElement.addEventListener('click', function () {
  listOperationElement.textContent = operation.getListOperation().join(' ');
  operationResultElement.textContent = operation.setResult();
  operationResultElement.style.fontSize = '2rem';
});

// add event listener to calculator operation
calculatorElement
  .querySelector('#dot')
  .addEventListener('click', (event) => operation.pushDot());
calculatorElement
  .querySelector('#add')
  .addEventListener('click', (event) => operation.pushArithmeticOperator('+'));
calculatorElement
  .querySelector('#substract')
  .addEventListener('click', (event) => operation.pushArithmeticOperator('-'));
calculatorElement
  .querySelector('#divide')
  .addEventListener('click', (event) => operation.pushArithmeticOperator('/'));
calculatorElement
  .querySelector('#multiply')
  .addEventListener('click', (event) => operation.pushArithmeticOperator('*'));
calculatorElement
  .querySelector('#clear-all')
  .addEventListener('click', (event) => operation.reset());
calculatorElement
  .querySelector('#clear-entry')
  .addEventListener('click', (event) => operation.popLastNumberValue());
calculatorElement.querySelector('#equal').addEventListener('click', (event) => {
  //   operationResultElement.style.fontSize = '2.5rem';
  console.log('tombol error bos');
});

// add event listener to calculator operation number
calculatorElement
  .querySelector('#number-1')
  .addEventListener('click', (event) => operation.pushNumberValue(1));
calculatorElement
  .querySelector('#number-2')
  .addEventListener('click', (event) => operation.pushNumberValue(2));
calculatorElement
  .querySelector('#number-3')
  .addEventListener('click', (event) => operation.pushNumberValue(3));
calculatorElement
  .querySelector('#number-4')
  .addEventListener('click', (event) => operation.pushNumberValue(4));
calculatorElement
  .querySelector('#number-5')
  .addEventListener('click', (event) => operation.pushNumberValue(5));
calculatorElement
  .querySelector('#number-6')
  .addEventListener('click', (event) => operation.pushNumberValue(6));
calculatorElement
  .querySelector('#number-7')
  .addEventListener('click', (event) => operation.pushNumberValue(7));
calculatorElement
  .querySelector('#number-8')
  .addEventListener('click', (event) => operation.pushNumberValue(8));
calculatorElement
  .querySelector('#number-9')
  .addEventListener('click', (event) => operation.pushNumberValue(9));
calculatorElement
  .querySelector('#number-0')
  .addEventListener('click', (event) => operation.pushNumberValue(0));
