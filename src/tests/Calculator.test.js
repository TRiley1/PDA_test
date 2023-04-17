import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add 1 and 4 and equal 5', () => {
    // gather the buttons
    const runningTotal = container.getByTestId('running-total');
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const plus = container.getByTestId('operator-add');
    const equal = container.getByTestId('operator-equals')

    // commit the actions
    fireEvent.click(button1)
    fireEvent.click(plus)
    fireEvent.click(button4)
    fireEvent.click(equal)

    // check the result 
    expect(runningTotal.textContent).toEqual('5');
  })

  it('subtract 4 from 7 and get 3', () => {
    const runningTotal = container.getByTestId('running-total');
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const equal = container.getByTestId('operator-equals');
    const subtract = container.getByTestId('operator-subtract');

    fireEvent.click(button7)
    fireEvent.click(subtract)
    fireEvent.click(button4)
    fireEvent.click(equal)

    expect(runningTotal.textContent).toEqual('3');

  })

  it('multiply 3 by 5 and get 15', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const equal = container.getByTestId('operator-equals');
    const multiply = container.getByTestId('operator-multiply');

    fireEvent.click(button3)
    fireEvent.click(multiply)
    fireEvent.click(button5)
    fireEvent.click(equal)

    expect(runningTotal.textContent).toEqual('15');
  })

  it('divide 21 by 7 and get 3', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const equal = container.getByTestId('operator-equals');
    const divide = container.getByTestId('operator-divide');

    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divide)
    fireEvent.click(button7)
    fireEvent.click(equal)

    expect(runningTotal.textContent).toEqual('3');
  })

  it('concatenate multiple number button clicks', () => {
    const button2 = container.getByTestId('number2');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button2)
    fireEvent.click(button2)

    expect(runningTotal.textContent).toEqual('22');
  
  })

  it('chain multiple operations together', () => {
    const button1 = container.getByTestId('number1');
    const button0 = container.getByTestId('number0');
    const runningTotal = container.getByTestId('running-total');
    const divide = container.getByTestId('operator-divide');
    const equal = container.getByTestId('operator-equals');


    fireEvent.click(button1)
    fireEvent.click(button0)
    fireEvent.click(button0)
    fireEvent.click(divide)
    fireEvent.click(button1)
    fireEvent.click(button0)
    fireEvent.click(divide)
    fireEvent.click(button1)
    fireEvent.click(button0)
    fireEvent.click(equal)
    
    expect(runningTotal.textContent).toEqual('1');
  })

  it('clear the running total without affecting the calculation', () => {
    const button1 = container.getByTestId('number1');
    const button0 = container.getByTestId('number0');
    const button2 = container.getByTestId('number2');
    const runningTotal = container.getByTestId('running-total');
    const clear = container.getByTestId('clear');
    const divide = container.getByTestId('operator-divide');
    const equal = container.getByTestId('operator-equals');

    fireEvent.click(button1)
    fireEvent.click(button0)
    fireEvent.click(divide)
    fireEvent.click(button2)
    fireEvent.click(equal)
    fireEvent.click(button1)
    fireEvent.click(button0)
    fireEvent.click(clear)
    fireEvent.click(divide)
    fireEvent.click(button2)
    fireEvent.click(equal)


    expect(runningTotal.textContent).toEqual('2.5');

  })
})

