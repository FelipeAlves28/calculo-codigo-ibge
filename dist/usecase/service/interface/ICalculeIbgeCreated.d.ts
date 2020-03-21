import People from "src/domain/model/People";
export default interface ICalculeIbgeCreated {
    execute(people: People): Promise<any>;
}
