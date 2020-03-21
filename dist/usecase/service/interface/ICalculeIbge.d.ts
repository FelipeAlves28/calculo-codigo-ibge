import People from "src/domain/model/People";
export default interface ICalculeIbge {
    execute(people: People): Promise<any>;
}
