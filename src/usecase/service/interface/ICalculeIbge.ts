import People from "src/domain/model/People";

export default interface ICalculeIbge {
    executeCreate(people: People): Promise<any>
    executeDelete(id: string): Promise<any>
    executeFindAll(): Promise<any>
    executeFindById(id: string): Promise<any>
    executeUpdate(id: string, payload: People): Promise<any>
}