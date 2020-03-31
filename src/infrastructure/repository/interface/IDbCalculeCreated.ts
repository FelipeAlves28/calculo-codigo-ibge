import People from "src/domain/model/People";

export default interface IDbCalculeCreated {
    create(people: People): Promise<any>
}