import People from "src/domain/model/People";

export default interface IDbCalculeUpdate {
    update(id: string, payload: People): Promise<any>
}