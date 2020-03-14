import People from "src/domain/model/People";
export default interface IDbPeople {
    execute(people: People): Promise<any>;
}
