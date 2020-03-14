import People from "src/domain/model/People";
export default interface IPeople {
    execute(people: People): Promise<any>;
}
