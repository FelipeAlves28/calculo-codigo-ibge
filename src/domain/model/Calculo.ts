export default class Calculo {
    city?: string
    codeIbge?: string
    calcule: number
    formula?: string

    constructor(city:string,codeIbge:string,calcule:number,formula:string){
        this.city = city;
        this.codeIbge = codeIbge;
        this.calcule = calcule;
        this.formula = formula
    }
}