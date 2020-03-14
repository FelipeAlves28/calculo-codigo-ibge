import People from "src/domain/model/People";

export default interface IDbCalcule{
    create(people: People): Promise<any>
}