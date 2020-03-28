import CalculatorIbge from "../src/utils/CalculatorIbge";

describe('CalculatorIbgeService', () => {

    it('check multiplication of the city code by the last two digits of the CPF', () => {
        let cpf = 12
        let ibge = 4106902
        let result = CalculatorIbge.getInstance().calculate(cpf, ibge);
        expect(result).toBe(49282824);
    })
})