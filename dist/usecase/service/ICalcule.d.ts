import People from "src/domain/model/People";
export default interface IPeople {
    create(people: People): Promise<any>;
}
