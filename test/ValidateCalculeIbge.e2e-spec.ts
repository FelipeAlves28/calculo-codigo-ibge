import CalculateLastTwoDigitCpf from "../src/utils/CalculateLastTwoDigitCpf";

describe('CalculatorIbgeService', () => {

    it('check multiplication of the city code by the last two digits of the CPF', () => {
        let cpf = 12
        let ibge = 4106902
        let result = CalculateLastTwoDigitCpf.getInstance().calculeIbge(cpf, ibge);
        expect(result).toBe(49282824);
    })
})