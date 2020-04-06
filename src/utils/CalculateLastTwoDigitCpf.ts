import ICalculator from './interface/ICalculator';
export default class CalculateLastTwoDigitCpf implements ICalculator {

  private static instance: CalculateLastTwoDigitCpf;

  private constructor() { }

  public static getInstance(): CalculateLastTwoDigitCpf {
    if (!CalculateLastTwoDigitCpf.instance) {
      CalculateLastTwoDigitCpf.instance = new CalculateLastTwoDigitCpf();
    }
    return CalculateLastTwoDigitCpf.instance;
  }

  public calculeIbge(cpf: number, codeIbge: number): number {
    return codeIbge * cpf;
  }

}