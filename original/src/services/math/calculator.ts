
export default class Calculator {

  // eslint-disable-next-line class-methods-use-this
  public add(num1: number, num2: number): number {
    const result: number = num1 + num2;
    // eslint-disable-next-line no-console
    console.log('The result is: ', result);
    return result;
  }

}