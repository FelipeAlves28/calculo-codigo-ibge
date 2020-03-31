import People from "src/domain/model/People";
import CalculateLastTwoDigitCpf from "./CalculateLastTwoDigitCpf";
import { Formula } from "src/domain/model/enum/Formula";

export class TreatApiIbge {

  private static instance: TreatApiIbge;

  private constructor() { }

  public static getInstance(): TreatApiIbge {
    if (!TreatApiIbge.instance) {
      TreatApiIbge.instance = new TreatApiIbge();
    }
    return TreatApiIbge.instance;
  }

  public async mountObjectCalculate(people: People, codigoIbge: []) {
    let cpf = JSON.stringify(people.cpf);
    cpf = cpf.charAt(people.cpf.length - 1) + cpf.charAt(people.cpf.length);

    people.calculo = new Array

    codigoIbge.forEach(function (elem) {
      let codeIbge = JSON.stringify(elem).split('"', 30).toString()
        .split('id', 20).toString()
        .split('municipio', 2).toString().slice(5, 12).toString()

      let calcule = CalculateLastTwoDigitCpf.getInstance().calculeIbge(parseInt(codeIbge), parseInt(cpf));
      let arrayNameCity = JSON.stringify(elem);
      let nameCity = arrayNameCity.split('"', 30).toString()
        .split('id', 20).toString()
        .split('municipio', 1).toString()
        .slice(23, 45).toLocaleUpperCase().replace(",,,", " ")

      let object = {
        code: codeIbge,
        city: nameCity,
        calculation: calcule,
        formula: Formula.DOIS_ULTIMOS_CPF
      }

      people.calculo.push(object);
    })
  }
}