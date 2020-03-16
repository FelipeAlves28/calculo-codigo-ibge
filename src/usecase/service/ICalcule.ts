import People from "src/domain/model/People";

export default interface ICalcule {
    execute(people: People): Promise<any>
}