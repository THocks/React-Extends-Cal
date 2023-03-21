
import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          displayValue: '0',
          operator: null,
          previousValue: null
        };
      }
    
      componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
      }
    
      componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
      }
    
      handleKeyDown = (event) => {
        const key = event.key;
    
        if (/\d|\+|\-|\*|\//.test(key)) {
          event.preventDefault();
          this.handleClick({ target: { value: key } });
        } else if (key === 'Enter') {
          event.preventDefault();
          this.handleClick({ target: { value: '=' } });
        } else if (key === 'Backspace') {
          event.preventDefault();
          this.handleClick({ target: { value: 'C' } });
        }
      };
    
      handleClick = (event) => {
        const value = event.target.value;
    
        switch (value) {
          case '+':
          case '-':
          case '*':
          case '/':
            this.setState({
              operator: value,
              previousValue: this.state.displayValue,
              displayValue: '0'
            });
            break;
    
          case 'C':
            this.setState({
              displayValue: '0',
              operator: null,
              previousValue: null
            });
            break;
    
          case '=':
            const { operator, previousValue, displayValue } = this.state;
            const currentValue = parseFloat(displayValue);
    
            if (previousValue === null) {
              this.setState({
                displayValue: currentValue
              });
            } else {
              const result = eval(`${previousValue} ${operator} ${currentValue}`);
    
              this.setState({
                displayValue: String(result),
                operator: null,
                previousValue: null
              });
            }
    
            break;
    
          default:
            if (this.state.displayValue === '0') {
              this.setState({
                displayValue: value
              });
            } else {
              this.setState({
                displayValue: this.state.displayValue + value
              });
            }
            break;
        }
      }
    
      render() {
    return (
      <div>
        
        <div id="calc">
      <h3>Calculadora</h3>
      <div id="operations">
      <div id='current-operation'>{this.state.displayValue}</div>
       
      </div>
      <div id="buttonsMain">
        <button onClick={this.handleClick} >CE</button>
        <button  value="C" onClick={this.handleClick}>C</button>
        <button  value="C" onClick={this.handleClick}>DEL</button>
        <button  value="/" onClick={this.handleClick}  >/</button>
        <button  value="7" className="number" onClick={this.handleClick}>7</button>
        <button  value="8" className="number" onClick={this.handleClick}>8</button>
        <button  value="9" className="number" onClick={this.handleClick}>9</button>
        <button  value="*" onClick={this.handleClick}>*</button>
        <button  value="4" className="number" onClick={this.handleClick}>4</button>
        <button  value="5" className="number" onClick={this.handleClick}>5</button>
        <button  value="6" className="number" onClick={this.handleClick}>6</button>
        <button  value="-" onClick={this.handleClick}>-</button>
        <button  value="1" className="number" onClick={this.handleClick}>1</button>
        <button  value="2" className="number" onClick={this.handleClick}>2</button>
        <button  value="3" className="number" onClick={this.handleClick}>3</button>
        <button  value="+" onClick={this.handleClick}>+</button>
        <button  value="0" className="number" onClick={this.handleClick}>0</button>
        <button  value="." className="number" onClick={this.handleClick}>.</button>
        <button  value="=" id="equal-btn" onClick={this.handleClick}>=</button>
      </div>
    </div>
      </div>
    );
  }
}

export default Calculator;


