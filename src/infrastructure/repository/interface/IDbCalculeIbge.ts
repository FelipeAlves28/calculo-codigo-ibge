import People from "src/domain/model/People";

export default interface IDbCalculeIbge {
    create(people: People): Promise<any>
    delete(id: string): Promise<any>
    findAll(): Promise<any>
    findById(id: string): Promise<any>
    update(id: string, payload: People): Promise<any>
}