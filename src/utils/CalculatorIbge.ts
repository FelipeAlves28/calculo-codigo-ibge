export default class CalculatorIbge{

    private static instance: CalculatorIbge;

    private constructor() { }
  
    public static getInstance(): CalculatorIbge {
      if (!CalculatorIbge.instance) {
        CalculatorIbge.instance = new CalculatorIbge();
      }
      return CalculatorIbge.instance;
    }

    public calculate(cpf: any, codeIbge: any) {
        let result =  codeIbge * cpf;
        return result;
    }
}