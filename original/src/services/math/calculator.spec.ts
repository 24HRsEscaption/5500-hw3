import Calculator from "./calculator";

describe('services > math', () => {
  describe('Calculator', () => {
    describe('add()', () => {
      let calculator: Calculator;
      //   If you prefer to constrain the input type, use: jest.MockedClass<Source>, jest.MockedFunction<Source> or jest.MockedObject<Source>.
      let logStub: jest.MockedFunction<any>;
      // beforeAll(): Runs one time before all the tests in a suite.
      // beforeEach(): Runs before every test in a suite.
      // afterEach(): Runs after every test in a suite.
      // afterAll(): Runs once after all tests in a suite.
      beforeAll(() => {
        calculator = new Calculator();
      });

      beforeEach(() => {
        logStub = jest.spyOn(console, 'log').mockReturnValue();
      });

      afterEach(() => {
        logStub.mockRestore();
      });

      afterAll(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (<any>calculator) = undefined;
      });

      it('should return 3 when inputs are 1 and 2', () => {
        const result: number = calculator.add(1, 2);

        expect(result).toEqual(3);
      });

      it('should return -100 when inputs are -1 and -99', () => {
        const result: number = calculator.add(-1, -99);

        expect(result).toEqual(-100);
      });

      // test the console.log message
      it('should invoke console.log() with the result', () => {
        calculator.add(3, 1);
        // Expects a function being spied/stubbed/mocked to be invoked with specified arguments.
        expect(logStub).toHaveBeenCalledWith('The result is: ', 4);
      });
    });
  });
});